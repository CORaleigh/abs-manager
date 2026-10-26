// Type-only re-exports of the ArcGIS Maps SDK 5.x modules this app uses.
// Import as `import type * as esri from './esri'` so code keeps the `esri.X` names
// it used with the 4.x `__esri` namespace, which is deprecated in 5.x.
export type { default as Graphic } from '@arcgis/core/Graphic.js';
export type { default as FeatureLayer } from '@arcgis/core/layers/FeatureLayer.js';
export type { default as Layer } from '@arcgis/core/layers/Layer.js';
export type { default as Field } from '@arcgis/core/layers/support/Field.js';
export type { default as Relationship } from '@arcgis/core/layers/support/Relationship.js';
export type { default as CodedValueDomain } from '@arcgis/core/layers/support/CodedValueDomain.js';
export type { default as CodedValueDomainCodedValues } from '@arcgis/core/layers/support/CodedValue.js';
export type { default as FeatureSet } from '@arcgis/core/rest/support/FeatureSet.js';
export type { default as LayerView } from '@arcgis/core/views/layers/LayerView.js';
export type { default as FeatureLayerView } from '@arcgis/core/views/layers/FeatureLayerView.js';
export type { default as MapView } from '@arcgis/core/views/MapView.js';
export type { default as Map } from '@arcgis/core/Map.js';
export type { default as WebMap } from '@arcgis/core/WebMap.js';
export type { default as Portal } from '@arcgis/core/portal/Portal.js';
export type { default as OAuthInfo } from '@arcgis/core/identity/OAuthInfo.js';
export type { default as Credential } from '@arcgis/core/identity/Credential.js';
export type { IdentityManagerBase as IdentityManager } from '@arcgis/core/identity/IdentityManagerBase.js';
export type { default as SearchSource } from '@arcgis/core/widgets/Search/SearchSource.js';

// The 4.x widgets are replaced by map components in 5.x
export type { ArcgisFeatureForm as FeatureForm } from '@arcgis/map-components/components/arcgis-feature-form';
export type { ArcgisFeature as Feature } from '@arcgis/map-components/components/arcgis-feature';
export type { ArcgisSearch as widgetsSearch } from '@arcgis/map-components/components/arcgis-search';
export type { ArcgisMap } from '@arcgis/map-components/components/arcgis-map';

// FieldGroupConfig was removed in 5.x; the app keeps its own config shape (see form-config.ts)
export type { FieldGroupConfig } from './form-config';
