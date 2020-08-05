import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
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
  lookups:string[] = [
    'Directing Resolution Number',
    'Directing Resolution Date',
    'Confirming Resolution Number',
    'Confirming Resolution Date',    
    'Roll #',
    'Contract #',  
    'Contract Date',  
    'Correcting Resolution Number',
    'Correcting Resolution Date',      
  ]
  form: esri.FeatureForm = null;
  invalid: string[] = [];
  activeField = '';
  ngOnInit() {
    this.shared.account.subscribe(account => {
      this.account = account;
    });
  }
  showAttributeLookup() {
    return !(this.feature.layer as esri.FeatureLayer).isTable;
  }

  showPayoffCalculator() {
      if (!this.account || !this.feature) {
        return false;
      } else {
        return this.account && this.feature.layer.title.includes('Payments')
      }
  }

  payoffCalculated(values:any) {
    this.form.feature.attributes = this.form.getValues();
    this.form.feature.setAttribute('PaymentAmount', parseFloat(values.paymentAmount.toFixed(2)));
    this.form.feature.setAttribute('PrincipalAmount', parseFloat(values.principal.toFixed(2)));
    this.form.feature.setAttribute('InterestAmount', parseFloat(values.interest.toFixed(2)));
    this.form.feature = this.form.feature.clone();
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
    if (status) {
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
    }
    this.form.feature = this.form.feature.clone();
  }

  refreshFields() {
    //@ts-ignore
    this.form.viewModel.inputFields.forEach(field => {
      if (field.inputFields) {
        field.inputFields.forEach(f => {
          if (f.required && f.value === null) {
            f.valid = false;
          } else {
            f.valid = true;
          }
          f.initialize();
          f._validate();              
        //@ts-ignore
          this.form.renderFields();
        });
      }
    });
    this.disableAttributeLookupFields();
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
              this.form.feature.attributes = this.form.getValues();
              this.form.feature.setAttribute('NumYears', featureSet.features[0].getAttribute('NumYears'));
              this.form.feature.setAttribute('InterestRate', featureSet.features[0].getAttribute('InterestRate'));
              this.form.feature = this.form.feature.clone();
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
      //@ts-ignore
      this.form.postInitialize = () => {
        this.form.watch('feature', (a,b) => {
          if (this.activeField != '') {
            //@ts-ignore
            this.form._activeInputName = this.activeField;
          } else {
            //@ts-ignore
            this.form._activeInputName = this.form._activeInputName;
          }
          //@ts-ignore
          this.form._fieldFocusNeeded = false;
        });
      };
      this.form.postInitialize();
             
      this.form.on('value-change', e => {
        this.activeField = e.fieldName;
        this.form.feature.attributes = this.form.getValues();
        this.setDefaults(e);
        if (e.fieldName === 'StatusCode') {     
          this.setFormConfigByStatus(e.value, e.layer);
          setTimeout(()=>{
            this.disableAttributeLookupFields();
          });
        }
        //Set status to deliquent if attorney flag changed
        if (e.fieldName === 'AttorneyFlag' && e.value == 'Y') {     
          this.form.feature.setAttribute('StatusCode', '4');
        }
        if (e.fieldName === 'TotalLienAmount') {
          this.form.feature.setAttribute('PrincipalBalance', e.value);
          this.form.feature.setAttribute('TotalLienAmount', e.value);
          this.form.feature.setAttribute('InstallmentAmount', e.value/this.form.feature.getAttribute("NumYears"));
          this.form.feature.setAttribute('CurrentInstallmentDue', e.value/this.form.feature.getAttribute("NumYears"));
        }
        this.form.feature = this.form.feature.clone();
      });

      this.form.on('submit', e=> {
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
             const layer = new FeatureLayer({url:'https://maps.raleighnc.gov/arcgis/rest/services/ABS/ABS_Comments/FeatureServer/1'});
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
        //@ts-ignore
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
    if (this.form.layer.title.includes("Payment")) {
       this.form.feature.attributes = this.form.getValues();
        const query = this.form.layer.createQuery();
        query.outStatistics = {
          //@ts-ignore
          onStatisticField: "PaymentTransactionNum", 
          outStatisticFieldName: "PaymentTransactionNum_max",
          statisticType: "max"
        };
        query.outFields = ['PaymentTransactionNum_max'];
        query.returnGeometry = false;
        this.form.layer.queryFeatures(query).then(result => {
          if (result.features.length) {
            const num = result.features[0].getAttribute('PaymentTransactionNum_max');
            this.form.feature.setAttribute('PaymentTransactionNum', num + 1);
            this.form.feature = this.form.feature.clone();
            this.form.submit();
          }
        });
    } else {
      this.form.submit();
    }
  }
  disableAttributeLookupFields() {
    let labels = document.getElementsByClassName('esri-feature-form__label');
    for (let i = 0;i < labels.length;i++) {
     const labelText = (labels.item(i) as HTMLElement).firstChild.textContent;
      if (this.lookups.includes(labelText)){
        //@ts-ignore
        let fields = this.form.viewModel._allInputFields.filter(field => {
          return field.required && field.label === labelText;
        });
        if (fields.length) {
          for(let j = 0;j < labels.item(i).getElementsByTagName('input').length;j++) {
            labels.item(i).getElementsByTagName('input')[j].setAttribute('disabled', 'true');
            let errors = labels.item(i).getElementsByClassName("esri-feature-form__field-error-message");
            if (errors.length) {
              errors[0].innerHTML = 'Set using attribute lookup tool';
            }
          }
        }  
      }
    }  
  }
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.feature.currentValue.layer.title.includes('Billing') ) {
      if (changes.feature.currentValue) {
        this.feature = changes.feature.currentValue;
        if (!this.form) {
          this.initializeForm().then((form: esri.FeatureForm) => {
            this.form.feature = changes.feature.currentValue;  
            this.setFormConfigByStatus(this.feature.getAttribute("StatusCode"),this.form.layer);
            setTimeout(()=>{
              this.disableAttributeLookupFields();
            });
          });
        } else {
          this.form.feature = changes.feature.currentValue;
          this.setFormConfigByStatus(this.feature.getAttribute("StatusCode"),this.form.layer);
        }
      }
    }
  }
  refreshForm(form:esri.FeatureForm) {
    this.feature.attributes = form.feature.attributes;
    this.form.feature = this.feature;
    //this.refreshFields();
          //@ts-ignore
    //this.form.renderFields();
    //this.form.renderNow();
  }
}