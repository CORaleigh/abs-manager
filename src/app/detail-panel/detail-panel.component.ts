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
        });
      } else {
        this.featureWidget.graphic = changes.feature.currentValue;
      }
    }
  }
  getRelatedFeatures(event) {
    const relationships: esri.Relationship[] = (this.feature.layer as esri.FeatureLayer).relationships.filter((relationship: esri.Relationship) => {
      let match: esri.Relationship = null;
      if (event.currentTarget.innerText === 'Bills') {
        if (relationship.name === 'BILLING_DATA') {
          match = relationship;
        }
      }
      if (event.currentTarget.innerText === 'Communication') {
        if (relationship.name === 'COMMUNICATIONS') {
          match = relationship;
        }
      }
      if (event.currentTarget.innerText === 'Payments') {
        if (relationship.name === 'PAYMENTS') {
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