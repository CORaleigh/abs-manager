import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import * as calcite from 'calcite-web';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-account-panel',
  templateUrl: './account-panel.component.html',
  styleUrls: ['./account-panel.component.scss']
})
export class AccountPanelComponent implements OnInit, OnChanges {
  constructor(public shared:SharedService, private router:Router) { }
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
  @Input('totalFeatures') totalFeatures:number = 0;
  @Output() showRelatedTable = new EventEmitter<any>();
  @Output() formSubmitted = new EventEmitter<any>();
  @Output() accountSelected = new EventEmitter<esri.Graphic>();
  @Output() createFeatureClicked = new EventEmitter<any>();
  @Input('source') source: esri.Graphic;
  currencyFields:string[] = ['PaymentAmount', 'PrincipalBalance', 'PrincipalBal', 'TotalDue'];
  ngOnInit() {
    setTimeout(()=>{calcite.init()})

  }
  featureSelected(feature: esri.Graphic) {

    this.update = true;
    this.selectedFeature = feature;
    feature.layer = this.layer;
    if (this.layer.layerId < 4) {
      this.shared.account.next(feature);
      this.router.navigate(['account',feature.getAttribute('AccountID')]);
    }
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
      let feature:esri.Graphic = new Graphic({ attributes: {} });
      feature.layer = this.layer;
      if (this.layer.isTable) {
        this.source = this.shared.account.getValue();

        if(this.layer.getField('PaymentDate')) {
          this.source.attributes['PaymentDate'] = new Date();
        }
      }
      
      let cloned: esri.Graphic = this.source.clone();
      feature.geometry = cloned.geometry;

      this.layer.fields.forEach((field: esri.Field) => {
        feature.attributes[field.name] = null;
        if (cloned.attributes[field.name]) {
          feature.attributes[field.name] = cloned.attributes[field.name];
        }
        if (field.name === 'RollNumInOut' && this.layer.title.includes("Assessments")) {
          if (cloned.getAttribute('CITY_DECODE') === 'RALEIGH') {
            feature.attributes[field.name] = "A";
          }
        }
      });
      feature.setAttribute("StatusCode",'1');
      if (this.layer.title.includes("Abatements")) {
        feature.setAttribute("BillingTypeCode", "AB");
        feature.setAttribute("CategoryTypeCode", "05");
      }
      if (this.layer.title.includes("Tap Fees")) {
        feature.setAttribute("BillingTypeCode", "TF");
      }      
      if (!this.layer.isTable) {
        feature.attributes.NCPIN = cloned.attributes.PIN_NUM;
        feature.attributes.AccountID = 0;
      }
    
      this.selectedFeature = feature;

      this.createFeatureClicked.emit(feature);
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedFeature) {
      if (changes.selectedFeature.currentValue) {
       this.featureSelected(this.selectedFeature);

      }
    }
    if (changes.features) {
      

      if (this.title === 'Bills') {
        this.features = this.features.sort((a:esri.Graphic,b:esri.Graphic)=> {
          return b.attributes.NoticeDate - a.attributes.NoticeDate;
        })
      }         
      if (this.title === 'Payments') {
        this.features = this.features.sort((a:esri.Graphic,b:esri.Graphic)=> {
          return b.attributes.PaymentDate - a.attributes.PaymentDate;
        })
      }
      if (this.title === 'Communications') {
        this.features = this.features.sort((a:esri.Graphic,b:esri.Graphic)=> {
          return b.attributes.CommDate - a.attributes.CommDate;
        })
      }      
      if (this.title === 'Comments') {
        this.features = this.features.sort((a:esri.Graphic,b:esri.Graphic)=> {
          return b.attributes.CommentDate - a.attributes.CommentDate;
        })
      }          
    }
    if (changes.totalFeatures) {
      if (changes.totalFeatures.currentValue) {
        if (changes.totalFeatures.currentValue.length === 1) {        
          this.featureSelected(this.features[0]);
        }
      }
    }
    if (changes.visible) {
      if (!this.layer.isTable && this.selectedFeature) {
        this.layer.queryFeatures({objectIds:[this.selectedFeature.getAttribute("OBJECTID")],outFields:['*']}).then(result=>{
          this.selectedFeature=result.features[0];
        });
      }
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
