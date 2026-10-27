import FormTemplate from '@arcgis/core/form/FormTemplate.js';
import type { ExpressionInfoProperties } from '@arcgis/core/form/ExpressionInfo.js';
import type { FieldElementProperties } from '@arcgis/core/form/elements/FieldElement.js';
import type { GroupElementProperties } from '@arcgis/core/form/elements/GroupElement.js';
import type CodedValueDomain from '@arcgis/core/layers/support/CodedValueDomain.js';
import type FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';

// The form configs are written in the 4.15 FieldConfig/FieldGroupConfig shape,
// which 5.x removed; toFormTemplate() converts them to a 5.x FormTemplate.
export interface FieldConfig {
  name: string;
  label?: string;
  description?: string;
  editable?: boolean;
  required?: boolean;
  maxLength?: number;
  domain?: CodedValueDomain;
  visibilityExpression?: string;
}

export interface FieldGroupConfig {
  label?: string;
  description?: string;
  visibilityExpression?: string;
  fieldConfig: FieldConfig[];
}

// A field value the form calculates with Arcade. The form only calculates values for fields that can't be
// edited, so the field is read-only while `when` is true and can be edited by hand otherwise.
export interface Calculation {
  expression: string;
  when: string;
}

export interface FormTemplateOptions {
  // used to only put a max length on text fields
  layer?: FeatureLayer | null;
  // required fields with these labels are read-only, they get set by another tool
  lockedLabels?: string[];
  lockedHint?: string;
  // by field name
  calculations?: Record<string, Calculation>;
}

// Changing TotalLienAmount sets the principal balance and installment amounts. This is done in the form's
// Arcade instead of on a new graphic, which re-renders the form on every keystroke and moves focus to the
// first input. Saved values are kept until TotalLienAmount changes, so balances that payments have lowered
// aren't overwritten.
const totalLienChanged = "$feature.TotalLienAmount != DefaultValue($originalFeature, 'TotalLienAmount', null)";
const fromTotalLien = (field: string, calculation: string): string => `
var total = $feature.TotalLienAmount;
if (!(${totalLienChanged}) || IsEmpty(total)) {
  return DefaultValue($originalFeature, '${field}', null);
}
${calculation}`;
const perYear = `var years = $feature.NumYears;
if (IsEmpty(years) || years == 0) { return null; }
return total / years;`;

export const totalLienCalculations: Record<string, Calculation> = {
  PrincipalBalance: { expression: fromTotalLien('PrincipalBalance', 'return total;'), when: totalLienChanged },
  InstallmentAmount: { expression: fromTotalLien('InstallmentAmount', perYear), when: totalLienChanged },
  CurrentInstallmentDue: { expression: fromTotalLien('CurrentInstallmentDue', perYear), when: totalLienChanged }
};

// Picking BillingTypeCode and CategoryTypeCode fills in NumYears and InterestRate from the billing parameters
// table, in the form's Arcade for the same reason as above. Arcade can only read that table through
// $datastore, so this returns null when it's in a different service than the form's layer.
export function billingParameterCalculations(layer: FeatureLayer, parameters: FeatureLayer | null): Record<string, Calculation> | null {
  if (!parameters || parameters.url !== layer.url) {
    return null;
  }
  const codesChanged = ['BillingTypeCode', 'CategoryTypeCode']
    .map(field => `$feature.${field} != DefaultValue($originalFeature, '${field}', null)`)
    .join(' || ');
  const fromParameters = (field: string): string => `
var bill = $feature.BillingTypeCode;
var cat = $feature.CategoryTypeCode;
var saved = DefaultValue($originalFeature, '${field}', null);
if (!(${codesChanged}) || IsEmpty(bill) || IsEmpty(cat)) { return saved; }
var row = First(Filter(FeatureSetById($datastore, '${parameters.layerId}', ['${field}'], false),
  'BillingTypeCode = @bill AND CategoryTypeCode = @cat'));
if (IsEmpty(row)) { return saved; }
return row['${field}'];`;
  return {
    NumYears: { expression: fromParameters('NumYears'), when: codesChanged },
    InterestRate: { expression: fromParameters('InterestRate'), when: codesChanged }
  };
}

export function toFormTemplate(groups: FieldGroupConfig[], options: FormTemplateOptions = {}): FormTemplate {
  // 5.x forms reference Arcade expressions by name instead of inline, so collect them on the template
  const expressionInfos: ExpressionInfoProperties[] = [];
  const names = new Map<string, string>();
  const expressionName = (expression: string, returnType: 'boolean' | 'number' = 'boolean'): string => {
    const key = `${returnType}:${expression}`;
    let name = names.get(key);
    if (!name) {
      name = `expr-${names.size}`;
      names.set(key, name);
      expressionInfos.push({ name, expression, returnType });
    }
    return name;
  };

  const toFieldElement = (field: FieldConfig): FieldElementProperties & { type: 'field' } => {
    const layerField = options.layer?.getField(field.name);
    const required = field.required || layerField?.nullable === false;
    const locked = required && !!field.label && !!options.lockedLabels?.includes(field.label);
    const textField = !layerField || layerField.type === 'string';
    const calculation = options.calculations?.[field.name];
    const editable = field.editable === false || locked ? 'false'
      : calculation ? `!(${calculation.when})`
      : null;
    return {
      type: 'field',
      fieldName: field.name,
      label: field.label,
      description: field.description,
      hint: locked ? options.lockedHint : undefined,
      domain: field.domain as FieldElementProperties['domain'],
      input: field.maxLength && textField && !field.domain ? { type: 'text-box', maxLength: field.maxLength } : undefined,
      editableExpression: editable ? expressionName(editable) : undefined,
      requiredExpression: field.required ? expressionName('true') : undefined,
      valueExpression: calculation ? expressionName(calculation.expression, 'number') : undefined,
      visibilityExpression: field.visibilityExpression ? expressionName(field.visibilityExpression) : undefined
    };
  };

  const elements = groups.filter(Boolean).map((group): GroupElementProperties & { type: 'group' } => ({
    type: 'group',
    label: group.label,
    description: group.description,
    visibilityExpression: group.visibilityExpression ? expressionName(group.visibilityExpression) : undefined,
    elements: group.fieldConfig.map(toFieldElement)
  }));

  return new FormTemplate({ elements, expressionInfos });
}
