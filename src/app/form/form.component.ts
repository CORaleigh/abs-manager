import { Component, OnInit, Input, OnChanges, ElementRef, ViewChild, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
  @ViewChild('formDiv', null) private formDiv: ElementRef;
  constructor() { }
  @Input('feature') feature: esri.Graphic = null;
  @Input('update') update: boolean = true;
  @Input('formgroups') formgroups: esri.FieldGroupConfig[] = [];
  @Output() formSubmitted = new EventEmitter<esri.FeatureLayer>();
  @Output() formCanceled = new EventEmitter<null>();

  form: esri.FeatureForm = null;
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
      if (!this.form) {
        this.initializeForm().then((form: esri.FeatureForm) => {
          this.form.feature = changes.feature.currentValue;
        });
      } else {
        this.form.feature = changes.feature.currentValue;
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
