import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges, Output, EventEmitter, AfterContentInit } from '@angular/core';

import { loadModules } from 'esri-loader';
import esri = __esri;
import * as calcite from 'calcite-web';
@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.scss']
})
export class DetailPanelComponent implements OnInit, OnChanges {
  constructor() { }
  @ViewChild('featureDiv', null) private featureDiv: ElementRef;
  @Input('title') title: string = "Details";
  @Input('feature') feature: esri.Graphic = null;
  @Input('detailButtons') detailButtons: boolean = true;
  @Input('formgroups') formgroups: esri.FieldGroupConfig[] = [];
  @Input('update') update: boolean = true;
  @Output() relatedFeatureReturned = new EventEmitter<any>();
  @Output() formSubmitted = new EventEmitter<null>();
  ngOnInit() {
    setTimeout(() => {
      calcite.init();
    });
  }
  payoffDate:string = new Date().toISOString().slice(0,10);
  principalDue: number = 0;
  interestDue: number = 0;
  fromDate: Date = null;
  fromDateLabel: string = "";
  totalDue: number = 0;


  featureWidget: esri.Feature;
  async initializeFeature() {
    try {
      const [Feature] = await loadModules([
        'esri/widgets/Feature',
      ]);
      this.featureWidget = new Feature({
        container: this.featureDiv.nativeElement
      });
      return this.featureWidget;
    } catch (error) {
      console.log('EsriLoader: ', error);
    }
  }
  submitted(layer: esri.FeatureLayer) {
    if (layer.isTable) {
      layer.queryFeatures({ where: 'AccountID = ' + this.feature.attributes.AccountID, outFields: ['*'], returnGeometry: false }).then((featureSet: esri.FeatureSet) => {
        featureSet.features.forEach((feature: esri.Graphic) => {
          feature.popupTemplate = layer.popupTemplate;
        });
        this.relatedFeatureReturned.emit({ tableId: layer.layerId, features: featureSet.features });
        
      });
    }
    this.formSubmitted.emit();
  }
  ngOnChanges(changes: SimpleChanges) {
    
    if (this.update) {
      if (!this.featureWidget) {
        this.initializeFeature().then((featureWidget: esri.Feature) => {
          this.featureWidget.graphic = changes.feature.currentValue;
          if (this.featureWidget.graphic.attributes['InterestPaidThruDate']) {
            this.fromDate = new Date(this.featureWidget.graphic.attributes['InterestPaidThruDate']);
            this.fromDateLabel = "Interest Paid Thru Date: ";
          } else if (this.featureWidget.graphic.attributes['ConfResDate']) {
            this.fromDate = new Date(this.featureWidget.graphic.attributes['ConfResDate']);
            this.fromDateLabel = "Confirming Resolution Date: ";
          } else if (this.featureWidget.graphic.attributes['ContractDate']) {
            this.fromDate = new Date(this.featureWidget.graphic.attributes['ContractDate']);
            this.fromDateLabel = "Contract Date: ";
          }  
        });
      } else {
        this.featureWidget.graphic = changes.feature.currentValue;
        if (this.featureWidget.graphic.attributes['InterestPaidThruDate']) {
          this.fromDate = new Date(this.featureWidget.graphic.attributes['InterestPaidThruDate']);
          this.fromDateLabel = "Interest Paid Thru Date: ";
        } else if (this.featureWidget.graphic.attributes['ConfResDate']) {
          this.fromDate = new Date(this.featureWidget.graphic.attributes['ConfResDate']);
          this.fromDateLabel = "Confirming Resolution Date: ";
        } else if (this.featureWidget.graphic.attributes['ContractDate']) {
          this.fromDate = new Date(this.featureWidget.graphic.attributes['ContractDate']);
          this.fromDateLabel = "Contract Date: ";
        }  
      }
    }
  }
  getRelatedFeatures(label:string) {
    const relationships: esri.Relationship[] = (this.feature.layer as esri.FeatureLayer).relationships.filter((relationship: esri.Relationship) => {
      let match: esri.Relationship = null;
      if (label === 'Bills') {
        if (relationship.name.includes('BILLING_DATA')) {
          match = relationship;
        }
      }
      if (label === 'Communication') {
        if (relationship.name.includes('COMMUNICATIONS')) {
          match = relationship;
        }
      }
      if (label === 'Payments') {
        if (relationship.name.includes('PAYMENTS')) {
          match = relationship;
        }
      }
      return match;
    });
    if (relationships.length) {
      (this.feature.layer as esri.FeatureLayer).queryRelatedFeatures({
        relationshipId: relationships[0].id,
        objectIds: [this.feature.attributes.OBJECTID],
        outFields: ['*'],
        returnGeometry: false
      }).then((result: any) => {
        
        if (result[this.feature.attributes.OBJECTID]) {
          this.relatedFeatureReturned.emit({ tableId: relationships[0].relatedTableId, features: result[this.feature.attributes.OBJECTID].features });
        } else {
          this.relatedFeatureReturned.emit({ tableId: relationships[0].relatedTableId, features: [] });
        }
      });
    }
  }

  calculatePayoff() {
    let days = 0;
    if (this.featureWidget.graphic.attributes['InterestPaidThruDate']) {      
      days = Math.round((new Date(this.payoffDate).getTime() - new Date(new Date(this.featureWidget.graphic.attributes['InterestPaidThruDate']).toDateString()).getTime())/(1000*60*60*24));
    } else if (this.featureWidget.graphic.attributes['ConfResDate']){
      days = Math.round((new Date(this.payoffDate).getTime() - new Date(new Date(this.featureWidget.graphic.attributes['ConfResDate']).toDateString()).getTime())/(1000*60*60*24));
    } else if (this.featureWidget.graphic.attributes['ContractDate']){
      days = Math.round((new Date(this.payoffDate).getTime() - new Date(new Date(this.featureWidget.graphic.attributes['ContractDate']).toDateString()).getTime())/(1000*60*60*24));

    }
    this.principalDue = this.featureWidget.graphic.attributes['PrincipalBalance'];
    this.interestDue = ((this.featureWidget.graphic.attributes['InterestRate']/100)/365 * days) * this.featureWidget.graphic.attributes['PrincipalBalance'];
    this.totalDue = this.principalDue + this.interestDue;
  }
}