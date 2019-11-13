import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges, OnInit {
  @ViewChild('formDiv', null) private formDiv: ElementRef;
  constructor(public shared:SharedService) { }
  @Input('feature') feature: esri.Graphic = null;
  account: esri.Graphic = null;

  @Input('update') update: boolean = true;
  @Input('formgroups') formgroups: esri.FieldGroupConfig[] = [];
  @Output() formSubmitted = new EventEmitter<esri.FeatureLayer>();
  @Output() formCanceled = new EventEmitter<null>();

  form: esri.FeatureForm = null;
  ngOnInit() {
    this.shared.account.subscribe(account => {
      this.account = account;
    });
  }

  payoffCalculated(total:number) {
    this.feature.attributes['PaymentAmount'] = parseFloat(total.toFixed(2));
    this.form.feature = this.feature;
    this.form.renderNow();
  }
  async initializeForm() {
    try {
      // Load the modules for the ArcGIS API for JavaScript
      const [FeatureForm] = await loadModules([
        'esri/widgets/FeatureForm',
      ]);
      this.form = new FeatureForm({
        container: this.formDiv.nativeElement,
        groupDisplay: 'sequential'
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
    loadModules(['esri/Graphic']).then(([Graphic]) => {
      let addFeatures: esri.Graphic[] = [];
      let updateFeatures: esri.Graphic[] = [];
      if (this.update) {
        updateFeatures = [new Graphic({ attributes: this.form.getValues() })];
      } else {
        addFeatures = [new Graphic({ attributes: this.form.getValues(), geometry: this.form.feature.geometry })];
      }
      this.form.layer.applyEdits({ addFeatures: addFeatures, updateFeatures: updateFeatures }).then(result => {
        this.formSubmitted.emit(this.form.layer);
      });
    })
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.feature.currentValue) {
      this.feature = changes.feature.currentValue;
      if (!this.form) {
        this.initializeForm().then((form: esri.FeatureForm) => {
          this.form.feature = changes.feature.currentValue;
          this.form.renderNow();

        });
      } else {
        this.form.feature = changes.feature.currentValue;
        this.form.renderNow();

      }
    }
    if (changes.formgroups) {
      if (!this.form) {
        this.initializeForm().then((form: esri.FeatureForm) => {
          this.form.fieldConfig = this.formgroups;
        });
      } else {
        this.form.fieldConfig = this.formgroups;
      }
    }
  }
}
