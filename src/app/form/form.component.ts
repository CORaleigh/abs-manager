import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { loadModules, setDefaultOptions } from 'esri-loader';
import esri = __esri;
import { SharedService } from '../shared.service';
import { FormgroupsService } from '../formgroups.service';
import { ConfirmedFormgroupsService } from '../confirmed-form-groups.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges, OnInit {
  @ViewChild('formDiv') private formDiv: ElementRef;
  
  constructor(public shared:SharedService, private formGroups:FormgroupsService, private confirmedFormGroups:ConfirmedFormgroupsService) { }
  @Input('feature') feature: esri.Graphic = null;
  @Input('layers') layers: esri.FeatureLayer[] = [];

  account: esri.Graphic = null;

  @Input('update') update: boolean = true;

  @Output() formSubmitted = new EventEmitter<esri.FeatureLayer>();
  @Output() formCanceled = new EventEmitter<null>();

  form: esri.FeatureForm = null;
  invalid: string[] = [];
  ngOnInit() {
    this.shared.account.subscribe(account => {
      this.account = account;
    });
  }
  showAttributeLookup() {
    if (!this.feature) {
      return false;
    } else {
      return !(this.feature.layer as esri.FeatureLayer).isTable;
    }
  }

  showPayoffCalculator() {
      if (!this.account || !this.feature) {
        return false;
      } else {
        return this.account && this.feature.layer.title.includes('Payments')
      }
  }

  payoffCalculated(values:any) {
    this.feature.attributes['PaymentAmount'] = parseFloat(values.total.toFixed(2));
    this.feature.attributes['PrincipalAmount'] = parseFloat(values.principal.toFixed(2));
    this.feature.attributes['InterestAmount'] = parseFloat(values.interest.toFixed(2));
    this.form.feature = this.feature;
    this.form.renderNow();
  }


  setFormConfigByStatus(status:string, layer:esri.FeatureLayer) {
    if (layer.title.includes("Payment")) {
      this.form.fieldConfig = [this.formGroups.paymentFormGroup];
    }
    if (layer.title.includes("Communication")) {
      this.form.fieldConfig = [this.formGroups.communicationFormGroup, this.formGroups.commSentToFormGroup];
    }    
    if (layer.title.includes("Bill")) {
      this.form.fieldConfig = [this.formGroups.billingDataFormGroup, this.formGroups.billSentToFormGroup, this.formGroups.billSiteAddressFormGroup];
    }        
    if (layer.title.includes("Comment")) {
      this.form.fieldConfig = [this.formGroups.commentsFormGroup];
    }       

    if (status === '2') {
      if (layer.title.includes("Abatement")) {
        this.form.fieldConfig = [this.confirmedFormGroups.abatementFormGroup,
        this.confirmedFormGroups.abatementBillingFormGroup, this.formGroups.altBillingFormGroup]
      }
      if (layer.title.includes("Assessment")) {
        this.form.fieldConfig = [this.confirmedFormGroups.assessmentFormGroup,
          this.confirmedFormGroups.assessmentBillingFormGroup, this.formGroups.altBillingFormGroup]              
      }
      if (layer.title.includes("Tap Fee")) {
        this.form.fieldConfig = [this.confirmedFormGroups.tapFeeFormGroup,
          this.confirmedFormGroups.tapFeeBillingFormGroup, this.formGroups.altBillingFormGroup]              
      }    
    } else {
      if (layer.title.includes("Abatement")) {
        this.form.fieldConfig = [this.formGroups.abatementFormGroup,
        this.formGroups.abatementBillingFormGroup, this.formGroups.altBillingFormGroup]
      }
      if (layer.title.includes("Assessment")) {
        this.form.fieldConfig = [this.formGroups.assessmentFormGroup,
          this.formGroups.assessmentBillingFormGroup, this.formGroups.altBillingFormGroup]              
      }
      if (layer.title.includes("Tap Fee")) {
        this.form.fieldConfig = [this.confirmedFormGroups.tapFeeFormGroup,
          this.confirmedFormGroups.tapFeeBillingFormGroup, this.formGroups.altBillingFormGroup]              
      }       
    }
    this.form.feature.attributes = this.form.getValues();
    this.refreshFields();
  }

  refreshFields() {
        //@ts-ignore
        this.form.viewModel.inputFields.forEach(field => {
          field.inputFields.forEach(f => {
            if (f.required && !f.value) {
              f.valid = false;
            } else if (!f.required) {
              f.valid = true;
            }
    
            f.initialize();
            f._validate();
            
          });
          this.form.renderNow();
        });
  }
  setDefaults(e) {
    if (e.fieldName === 'BillingTypeCode' || e.fieldName === 'CategoryTypeCode') {
      const billCode = e.target.getValues()['BillingTypeCode'];
      const catCode = e.target.getValues()['CategoryTypeCode'];
      if (billCode && catCode) {
        this.shared.billingParameters.queryFeatures({
          where: "BillingTypeCode = '" + billCode + "' and CategoryTypeCode = '"+
          catCode + "'",
          outFields:['NumYears','InterestRate']
        }).then((featureSet:esri.FeatureSet) => {
            if (featureSet.features.length) {
              let feature = this.form.feature.clone();
              feature.attributes = e.target.getValues();
              feature.setAttribute('NumYears', featureSet.features[0].getAttribute('NumYears'));
              feature.setAttribute('InterestRate', featureSet.features[0].getAttribute('InterestRate'));
              this.form.feature = feature;
            }
        });
      }
    }
  }
  async initializeForm() {
    try {
      // Load the modules for the ArcGIS API for JavaScript
      const [FeatureForm, FeatureLayer, Graphic] = await loadModules([
        'esri/widgets/FeatureForm', 'esri/layers/FeatureLayer','esri/Graphic'
      ]);
      this.form = new FeatureForm({
        container: this.formDiv.nativeElement,
        groupDisplay: 'sequential'
      });
      this.form.on('value-change', e => {
        if (e.fieldName === 'StatusCode') {     
          this.setFormConfigByStatus(e.value, e.layer);
        }
        this.setDefaults(e);
      });

      this.form.on('submit', e=> {
        this.refreshFields();
        let addFeatures: esri.Graphic[] = [];
        let updateFeatures: esri.Graphic[] = [];
        if (this.update) {
          updateFeatures = [new Graphic({ attributes: this.form.getValues() })];
        } else {
          addFeatures = [new Graphic({ attributes: this.form.getValues(), geometry: this.form.feature.geometry })];
        }        
        this.invalid=[];
         e.invalid.forEach(field => {
           this.invalid.push(this.form.layer.fields.filter((value:esri.Field) => {
             return value.name === field;
           })[0].alias);
         });
         if (e.invalid.length === 0) {          
           if (this.shared.role === 'viewer') {
             const layer = new FeatureLayer({url:'https://mapstest.raleighnc.gov/arcgis/rest/services/ABS/ABS_Comments/FeatureServer/1'});
             layer.applyEdits({ addFeatures: addFeatures, updateFeatures: updateFeatures }).then(result => {
               this.formSubmitted.emit(this.form.layer);
             });
           } else {
             this.form.layer.applyEdits({ addFeatures: addFeatures, updateFeatures: updateFeatures }).then(result => {
               this.formSubmitted.emit(this.form.layer);
             });
           }
         }
       });       

      this.form.viewModel.watch('inputFields',()=> {
        
        this.refreshFields();   
      });
      return this.form;
    } catch (error) {
      console.log('EsriLoader: ', error);
    }
  }
  cancel() {
    this.formSubmitted.emit(this.form.layer);
  }
  submit() {
    this.form.submit();
  }
  ngOnChanges(changes: SimpleChanges) {
    
    if (changes.feature.currentValue) {
      this.feature = changes.feature.currentValue;
      if (!this.form) {
        this.initializeForm().then((form: esri.FeatureForm) => {
          this.form.feature = changes.feature.currentValue;
          this.setFormConfigByStatus(this.feature.getAttribute("StatusCode"),this.form.layer);
        });
      } else {
        this.form.feature = changes.feature.currentValue;
        this.setFormConfigByStatus(this.feature.getAttribute("StatusCode"),this.form.layer);
      }

    }

  }
  refreshForm(form:esri.FeatureForm) {
    this.feature.attributes = form.feature.attributes;
    this.form.feature = this.feature;
    this.form.renderNow();
  }
}
