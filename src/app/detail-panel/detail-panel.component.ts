import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges, Output, EventEmitter, AfterContentInit, OnDestroy } from '@angular/core';

import { loadModules } from 'esri-loader';
import esri = __esri;
import * as calcite from 'calcite-web';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-detail-panel',
  templateUrl: './detail-panel.component.html',
  styleUrls: ['./detail-panel.component.scss']
})
export class DetailPanelComponent implements OnInit, OnChanges {
  constructor(public shared:SharedService) { }
  @ViewChild('featureDiv') private featureDiv: ElementRef;
  @Input('title') title: string = "Details";
  @Input('feature') feature: esri.Graphic = null;
  @Input('layers') layers: esri.FeatureLayer[] = [];

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



  featureWidget: esri.Feature = null;
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
                    //@ts-ignore

              changes.feature.currentValue.popupTemplate = changes.feature.currentValue.layer.popupTemplate;

          //@ts-ignore
          changes.feature.currentValue.sourceLayer = changes.feature.currentValue.layer;
          console.log(changes.feature.currentValue);

          this.featureWidget.graphic = changes.feature.currentValue;

          // if (this.featureWidget.graphic.attributes['InterestPaidThruDate']) {
          //   this.fromDate = new Date(this.featureWidget.graphic.attributes['InterestPaidThruDate']);
          //   this.fromDateLabel = "Interest Paid Thru Date: ";
          // } else if (this.featureWidget.graphic.attributes['ConfResDate']) {
          //   this.fromDate = new Date(this.featureWidget.graphic.attributes['ConfResDate']);
          //   this.fromDateLabel = "Confirming Resolution Date: ";
          // } else if (this.featureWidget.graphic.attributes['ContractDate']) {
          //   this.fromDate = new Date(this.featureWidget.graphic.attributes['ContractDate']);
          //   this.fromDateLabel = "Contract Date: ";
          // }  
        });
      } else {
        this.featureWidget.graphic = changes.feature.currentValue;
        // if (this.featureWidget.graphic.attributes['InterestPaidThruDate']) {
        //   this.fromDate = new Date(this.featureWidget.graphic.attributes['InterestPaidThruDate']);
        //   this.fromDateLabel = "Interest Paid Thru Date: ";
        // } else if (this.featureWidget.graphic.attributes['ConfResDate']) {
        //   this.fromDate = new Date(this.featureWidget.graphic.attributes['ConfResDate']);
        //   this.fromDateLabel = "Confirming Resolution Date: ";
        // } else if (this.featureWidget.graphic.attributes['ContractDate']) {
        //   this.fromDate = new Date(this.featureWidget.graphic.attributes['ContractDate']);
        //   this.fromDateLabel = "Contract Date: ";
        // }  
      }
    }
  }
  getRelatedFeatures(label:string) {
    debugger
    const relationships: esri.Relationship[] = (this.feature.layer as esri.FeatureLayer).relationships.filter((relationship: esri.Relationship) => {
      let match: esri.Relationship = null;
      if (label === 'BILLS') {
        if (relationship.name.toLowerCase().includes('billing data') || relationship.relatedTableId == 3) {
          match = relationship;
        }
      }
      if (label === 'COMMUNICATION') {
        if (relationship.name.toLowerCase().includes('communications') || relationship.relatedTableId == 5) {
          match = relationship;
        }
      }
      if (label === 'PAYMENTS') {
        if (relationship.name.toLowerCase().includes('payments') || relationship.relatedTableId == 4) {
          match = relationship;
        }
      }
      if (label === 'COMMENTS') {
        if (relationship.name.toLowerCase().includes('comments') || relationship.relatedTableId == 6) {
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

  


}