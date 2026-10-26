// Builds where clause pieces that match the field type: numbers go in bare, text is quoted and escaped
import type * as esri from './esri';

export function isNumericField(layer: esri.FeatureLayer, field: string): boolean {
  const f = layer.fields?.find(x => x.name.toLowerCase() === field.toLowerCase());
  return !!f && ['integer', 'small-integer', 'long', 'single', 'double', 'oid'].includes(f.type);
}

// if the layer's fields haven't loaded yet, assume the field is there
export function hasField(layer: esri.FeatureLayer, field: string): boolean {
  return !layer.fields || layer.fields.some(x => x.name.toLowerCase() === field.toLowerCase());
}

export function escapeSql(value: string): string {
  return String(value).replace(/'/g, "''");
}

// blank input is not a number; Number('') would be 0 and could match a real record
function toNumber(value: any): number {
  const text = String(value ?? '').trim();
  return text === '' ? NaN : Number(text);
}

// number fields get the bare value, text fields get it quoted and escaped
export function sqlValue(layer: esri.FeatureLayer, field: string, value: any): string {
  if (isNumericField(layer, field)) {
    const n = toNumber(value);
    return Number.isFinite(n) ? String(n) : 'NULL'; // NULL never matches, so bad input finds nothing
  }
  return `'${escapeSql(value)}'`;
}

// "like" only works on text, so convert number fields to text for the match
export function likeClause(layer: esri.FeatureLayer, field: string, term: string, contains = false): string {
  const pattern = `${contains ? '%' : ''}${escapeSql(term)}%`;
  return isNumericField(layer, field)
    ? `CAST(${field} AS VARCHAR(20)) LIKE '${pattern}'`
    : `${field} LIKE '${pattern}'`;
}

export function resolutionWhere(layer: esri.FeatureLayer, dateField: string, numField: string, year: any, num: any): string {
  const y = toNumber(year);
  return `EXTRACT(YEAR FROM ${dateField}) = ${Number.isInteger(y) ? y : 'NULL'} AND ${numField} = ${sqlValue(layer, numField, num)}`;
}
