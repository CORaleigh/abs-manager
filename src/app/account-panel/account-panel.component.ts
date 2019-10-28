import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
@Component({
  selector: 'app-account-panel',
  templateUrl: './account-panel.component.html',
  styleUrls: ['./account-panel.component.scss']
})
export class AccountPanelComponent implements OnInit, OnChanges {
  constructor() { }
  @Input('title') title: string = '';
  @Input('detailsTitle') detailsTitle: string = '';
  @Input('headers') headers: string[] = [];
  @Input('fields') fields: esri.Field[] = [];
  @Input('features') features: any[] = [];
  @Input('formgroups') formgroups: esri.FieldGroupConfig[] = [];
  @Input('layer') layer: esri.FeatureLayer;
  @Input('layers') layers: esri.FeatureLayer[];
  @Input('showDetails') showDetails: boolean;
  @Input('visible') visible: boolean;
  @Input('update') update: boolean;
  @Input('selectedFeature') selectedFeature: esri.Graphic;
  @Output() showRelatedTable = new EventEmitter<any>();
  @Output() formSubmitted = new EventEmitter<any>();
  @Output() accountSelected = new EventEmitter<esri.Graphic>();
  @Output() createFeatureClicked = new EventEmitter<any>();
  @Input('source') source: esri.Graphic;

  currencyFields:string[] = ['PaymentAmount'];
  ngOnInit() {
  }
  featureSelected(feature: esri.Graphic) {
    this.update = true;
    this.selectedFeature = feature;
    feature.layer = this.layer;
    this.accountSelected.emit(feature);
  }
  getCodedValue(code: string, field: esri.Field) {
    let value: string = code;
    const matches: any[] = (field.domain as esri.CodedValueDomain).codedValues.filter((cv: any) => {
      return cv.code === code;
    });
    if (matches.length) {
      value = matches[0].name;
    }
    return value;
  }
  createFeature() {
    loadModules(['esri/Graphic']).then(([Graphic]) => {
      this.update = false;
      let feature = new Graphic({ attributes: {} });
      feature.layer = this.layer;
      let cloned: esri.Graphic = this.source.clone();
      feature.geometry = cloned.geometry;
      this.layer.fields.forEach((field: esri.Field) => {
        feature.attributes[field.name] = null;
        if (cloned.attributes[field.name]) {
          feature.attributes[field.name] = cloned.attributes[field.name];
        }
      });
      if (!this.layer.isTable) {
        feature.attributes.NCPIN = cloned.attributes.PIN_NUM;
        feature.attributes.AccountID = 0;
      }
      this.selectedFeature = feature;
      this.createFeatureClicked.emit(feature);
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.visible) {
    }
  }
  relatedFeatureReturned(item: any) {
    this.showRelatedTable.emit(item);
  }
  formSubmittedEvent() {
    if (!this.layer.isTable) {
      this.formSubmitted.emit();
    }
  }
}
