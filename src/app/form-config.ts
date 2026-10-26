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

export interface FormTemplateOptions {
  // used to only put a max length on text fields
  layer?: FeatureLayer | null;
  // required fields with these labels are read-only, they get set by another tool
  lockedLabels?: string[];
  lockedHint?: string;
}

export function toFormTemplate(groups: FieldGroupConfig[], options: FormTemplateOptions = {}): FormTemplate {
  // 5.x forms reference Arcade expressions by name instead of inline, so collect them on the template
  const expressionInfos: ExpressionInfoProperties[] = [];
  const names = new Map<string, string>();
  const expressionName = (expression: string): string => {
    let name = names.get(expression);
    if (!name) {
      name = `expr-${names.size}`;
      names.set(expression, name);
      expressionInfos.push({ name, expression, returnType: 'boolean' });
    }
    return name;
  };

  const toFieldElement = (field: FieldConfig): FieldElementProperties & { type: 'field' } => {
    const layerField = options.layer?.getField(field.name);
    const required = field.required || layerField?.nullable === false;
    const locked = required && !!field.label && !!options.lockedLabels?.includes(field.label);
    const textField = !layerField || layerField.type === 'string';
    return {
      type: 'field',
      fieldName: field.name,
      label: field.label,
      description: field.description,
      hint: locked ? options.lockedHint : undefined,
      domain: field.domain as FieldElementProperties['domain'],
      input: field.maxLength && textField && !field.domain ? { type: 'text-box', maxLength: field.maxLength } : undefined,
      editableExpression: field.editable === false || locked ? expressionName('false') : undefined,
      requiredExpression: field.required ? expressionName('true') : undefined,
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
