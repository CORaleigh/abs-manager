import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import esri = __esri;
@Component({
  selector: 'app-payment-button',
  templateUrl: './payment-button.component.html',
  styleUrls: ['./payment-button.component.scss']
})
export class PaymentButtonComponent implements OnInit, OnChanges {
  constructor() { }
  @Input('features') features: any[] = [];
  @Input('enabled') enabled: false;
  @Input('layers') layers: esri.FeatureLayer[] = [];
  @Output() getPayments = new EventEmitter<esri.Graphic[]>();
  @Output() clicked = new EventEmitter<boolean>();
  payments: esri.Graphic[] = [];
  buttonClick() {
    this.clicked.emit(true);
  }
  ngOnInit() {
  }
  getObjectedIds(features: esri.Graphic[]) {
    let oids: number[] = [];
    features.forEach((feature: esri.Graphic) => {
      oids.push(feature.attributes.OBJECTID);
    });
    return oids;
  }
  getRelatedFeatures(features: esri.Graphic[]) {
    let oids: number[] = this.getObjectedIds(features);
    (features[0].layer as esri.FeatureLayer).queryRelatedFeatures({
      objectIds: oids, relationshipId: (features[0].layer as esri.FeatureLayer).relationships.filter(relationship => {
        return relationship.name.includes('PAYMENTS');
      })[0].id, outFields: ['*'], returnGeometry: false
    }).then((result: any) => {
      oids.forEach((oid: number) => {
        if (result[oid]) {
          this.payments = this.payments.concat(result[oid].features);
        }
      });
      this.count += 1;
      if (this.count === this.features.length) {
        this.getPayments.emit(this.payments);
      }
    });
  }
  count: number = 0;
  ngOnChanges(changes: SimpleChanges) {
    if (changes.features) {
      this.count = 0;
      this.payments = [];
      if (changes.features.currentValue.length) {
        this.features.forEach((feature: any) => {
          if (feature.length) {
            this.getRelatedFeatures(feature)
          } else {
            this.count += 1;
          }
        });
      }
    }
  }
}
