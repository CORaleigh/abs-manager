import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import '@arcgis/map-components/components/arcgis-feature-form';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer.js';
import Graphic from '@arcgis/core/Graphic.js';
import type { SubmitEvent, ValueChangeEvent } from '@arcgis/core/widgets/FeatureForm/FeatureFormViewModel.js';
import type * as esri from '../esri';
import { SharedService } from '../shared.service';
import { FormgroupsService } from '../formgroups.service';
import { ConfirmedFormgroupsService } from '../confirmed-form-groups.service'
import { toFormTemplate } from '../form-config';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FormComponent implements OnChanges, OnInit, AfterViewInit {
  @ViewChild('formEl') private formEl: ElementRef<esri.FeatureForm>;

  constructor(public shared:SharedService, private formGroups:FormgroupsService, private confirmedFormGroups:ConfirmedFormgroupsService) { }
  @Input('feature') feature: esri.Graphic = null;
  @Input('layers') layers: esri.FeatureLayer[] = [];

  account: esri.Graphic = null;

  @Input('update') update: boolean = true;

  @Output() formSubmitted = new EventEmitter<esri.FeatureLayer>();
  @Output() formCanceled = new EventEmitter<null>();
  // required fields with these labels are read-only in the form, they get set with the attribute lookup tool
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
  // ngOnChanges runs before the <arcgis-feature-form> element exists, so the form is set up once the view is ready
  private viewInitialized: () => void;
  private viewReady = new Promise<void>(resolve => this.viewInitialized = resolve);
  private formReady: Promise<esri.FeatureForm> = null;
  ngAfterViewInit() {
    this.viewInitialized();
  }
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

  // the form only shows changed values when it gets a new graphic, so callers set values on a clone
  setFeature(feature: esri.Graphic) {
    this.form.layer = feature.layer as esri.FeatureLayer;
    this.form.feature = feature;
  }

  async payoffCalculated(values:any) {
    this.form.feature.attributes = await this.form.getValues();
    this.form.feature.setAttribute('PaymentAmount', parseFloat(values.paymentAmount.toFixed(2)));
    this.form.feature.setAttribute('PrincipalAmount', parseFloat(values.principal.toFixed(2)));
    this.form.feature.setAttribute('InterestAmount', parseFloat(values.interest.toFixed(2)));
    this.setFeature(this.form.feature.clone());
  }

  setFormConfigByStatus(status:string, layer:esri.FeatureLayer) {
    let groups: esri.FieldGroupConfig[] = null;
    if (layer.title.includes("Payment")) {
      groups = [this.formGroups.paymentFormGroup];
    }
    if (layer.title.includes("Communication")) {
      groups = [this.formGroups.communicationFormGroup, this.formGroups.commSentToFormGroup];
    }
    if (layer.title.includes("Bill")) {
      groups = [this.formGroups.billingDataFormGroup, this.formGroups.billSentToFormGroup, this.formGroups.billSiteAddressFormGroup];
    }
    if (layer.title.includes("Comment")) {
      groups = [this.formGroups.commentsFormGroup];
    }
    if (status) {
      if (status === '2') {
        if (layer.title.includes("Abatement")) {
          groups = [this.confirmedFormGroups.abatementFormGroup,
          this.confirmedFormGroups.abatementBillingFormGroup, this.formGroups.altBillingFormGroup]
        }
        if (layer.title.includes("Assessment")) {
          groups = [this.confirmedFormGroups.assessmentFormGroup,
            this.confirmedFormGroups.assessmentBillingFormGroup, this.formGroups.altBillingFormGroup]
        }
        if (layer.title.includes("Tap Fee")) {
          groups = [this.confirmedFormGroups.tapFeeFormGroup,
            this.confirmedFormGroups.tapFeeBillingFormGroup, this.formGroups.altBillingFormGroup]
        }
      } else {
        if (layer.title.includes("Abatement")) {
          groups = [this.formGroups.abatementFormGroup,
          this.formGroups.abatementBillingFormGroup, this.formGroups.altBillingFormGroup]
        }
        if (layer.title.includes("Assessment")) {
          groups = [this.formGroups.assessmentFormGroup,
            this.formGroups.assessmentBillingFormGroup, this.formGroups.altBillingFormGroup]
        }
        if (layer.title.includes("Tap Fee")) {
          groups = [this.confirmedFormGroups.tapFeeFormGroup,
            this.confirmedFormGroups.tapFeeBillingFormGroup, this.formGroups.altBillingFormGroup]
        }
      }
    }
    if (groups) {
      this.form.formTemplate = toFormTemplate(groups, {
        layer,
        lockedLabels: this.lookups,
        lockedHint: 'Set using attribute lookup tool'
      });
    }
    this.setFeature(this.form.feature.clone());
  }

  setDefaults(e: ValueChangeEvent, values: any) {
    if (e.fieldName === 'BillingTypeCode' || e.fieldName === 'CategoryTypeCode') {
      const billCode = values['BillingTypeCode'];
      const catCode = values['CategoryTypeCode'];
      if (billCode && catCode) {
        this.shared.billingParameters.queryFeatures({
          where: "BillingTypeCode = '" + billCode + "' and CategoryTypeCode = '"+
          catCode + "'",
          outFields:['NumYears','InterestRate']
        }).then(async (featureSet:esri.FeatureSet) => {
            if (featureSet.features.length) {
              this.form.feature.attributes = await this.form.getValues();
              this.form.feature.setAttribute('NumYears', featureSet.features[0].getAttribute('NumYears'));
              this.form.feature.setAttribute('InterestRate', featureSet.features[0].getAttribute('InterestRate'));
              this.setFeature(this.form.feature.clone());
            }
        });
      }
    }
  }
  async initializeForm() {
    try {
      await this.viewReady;
      this.form = await this.formEl.nativeElement.componentOnReady();

      this.form.addEventListener('arcgisValueChange', async event => {
        const e = event.detail;
        const values = await this.form.getValues();
        this.form.feature.attributes = values;
        this.setDefaults(e, values);
        if (e.fieldName === 'StatusCode') {
          this.setFormConfigByStatus(e.value as string, e.layer);
        }
        //Set status to deliquent if attorney flag changed
        if (e.fieldName === 'AttorneyFlag' && e.value == 'Y') {
          this.form.feature.setAttribute('StatusCode', '4');
        }
        if (e.fieldName === 'TotalLienAmount') {
          const amount = e.value as number;
          this.form.feature.setAttribute('PrincipalBalance', amount);
          this.form.feature.setAttribute('TotalLienAmount', amount);
          this.form.feature.setAttribute('InstallmentAmount', amount/this.form.feature.getAttribute("NumYears"));
          this.form.feature.setAttribute('CurrentInstallmentDue', amount/this.form.feature.getAttribute("NumYears"));
        }
        this.setFeature(this.form.feature.clone());
      });

      this.form.addEventListener('arcgisSubmit', event => {
        const e: SubmitEvent = event.detail;
        let addFeatures: esri.Graphic[] = [];
        let updateFeatures: esri.Graphic[] = [];

        if (this.update) {
          updateFeatures = [new Graphic({ attributes: e.values })];
        } else {
          addFeatures = [new Graphic({ attributes: e.values, geometry: this.form.feature.geometry })];
        }
        this.invalid=[];
         e.invalid.forEach(field => {
           this.invalid.push(this.form.layer.fields.filter((value:esri.Field) => {
             return value.name === field;
           })[0].alias);
         });
         if (e.invalid.length === 0) {
           const formLayer = this.form.layer as esri.FeatureLayer;
           if (this.shared.role === 'viewer') {
             const layer = new FeatureLayer({url:'https://mapstest.raleighnc.gov/arcgis/rest/services/ABS/ABS_Comments/FeatureServer/1'});
             layer.applyEdits({ addFeatures: addFeatures, updateFeatures: updateFeatures }).then(result => {
               this.formSubmitted.emit(formLayer);
             });
           } else {
             formLayer.applyEdits({ addFeatures: addFeatures, updateFeatures: updateFeatures }).then(result => {
               this.formSubmitted.emit(formLayer);
             });
           }
         }
       });
      return this.form;
    } catch (error) {
      console.log('FeatureForm: ', error);
    }
  }
  cancel() {
    this.formSubmitted.emit(this.form.layer as esri.FeatureLayer);
  }
  async submit() {
    const formLayer = this.form.layer as esri.FeatureLayer;
    if (formLayer.title.includes("Payment")) {
       this.form.feature.attributes = await this.form.getValues();
        const query = formLayer.createQuery();
        query.outStatistics = [{
          onStatisticField: "PaymentTransactionNum",
          outStatisticFieldName: "PaymentTransactionNum_max",
          statisticType: "max"
        }];
        query.outFields = ['PaymentTransactionNum_max'];
        query.returnGeometry = false;
        formLayer.queryFeatures(query).then(result => {
          if (result.features.length) {
            const num = result.features[0].getAttribute('PaymentTransactionNum_max');
            this.form.feature.setAttribute('PaymentTransactionNum', num + 1);
            this.setFeature(this.form.feature.clone());
            this.form.submit();
          }
        });
    } else {
      this.form.submit();
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.feature.currentValue.layer.title.includes('Billing') ) {
      if (changes.feature.currentValue) {
        this.feature = changes.feature.currentValue;
        this.formReady ??= this.initializeForm();
        this.formReady.then(() => {
          this.setFeature(this.feature);
          this.setFormConfigByStatus(this.feature.getAttribute("StatusCode"),this.form.layer as esri.FeatureLayer);
        });
      }
    }
  }
  refreshForm(form:esri.FeatureForm) {
    this.feature.attributes = form.feature.attributes;
    // a copy, since the form doesn't re-render when it's given the graphic it already has
    this.setFeature(this.feature.clone());
  }
}
