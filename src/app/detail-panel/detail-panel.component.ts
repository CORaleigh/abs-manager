import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges, Output, EventEmitter, AfterContentInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

import '@arcgis/map-components/components/arcgis-feature';
import type * as esri from '../esri';
import { SharedService } from '../shared.service';
@Component({
    selector: 'app-detail-panel',
    templateUrl: './detail-panel.component.html',
    styleUrls: ['./detail-panel.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DetailPanelComponent implements OnInit, OnChanges {
  constructor(public shared:SharedService) { }
  @Input('title') title: string = "Details";
  @Input('feature') feature: esri.Graphic = null;
  @Input('layers') layers: esri.FeatureLayer[] = [];

  @Input('detailButtons') detailButtons: boolean = true;
  @Input('formgroups') formgroups: esri.FieldGroupConfig[] = [];
  @Input('update') update: boolean = true;
  @Output() relatedFeatureReturned = new EventEmitter<any>();
  @Output() formSubmitted = new EventEmitter<null>();
  ngOnInit() {
  }



  // bound to <arcgis-feature>, so it's applied whenever the Information tab renders
  featureGraphic: esri.Graphic = null;
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
    if (changes.visible){
      if (changes.visible.currentValue === true) {
        (this.feature.layer as esri.FeatureLayer).queryFeatures({
          objectIds:[this.feature.getAttribute('OBJECTID')],outFields:['*']
        }).then(result => {
          this.feature = result.features[0];
        })
      }
    }

    if (this.update && changes.feature?.currentValue) {
      const feature = changes.feature.currentValue;
      // show the feature with its layer's popup template
      feature.popupTemplate = feature.layer.popupTemplate;
      //@ts-ignore
      feature.sourceLayer = feature.layer;
      this.featureGraphic = feature;
    }
  }
  getRelatedFeatures(label:string) {
    
    
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