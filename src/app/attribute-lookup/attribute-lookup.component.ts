import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import '@arcgis/map-components/components/arcgis-feature-form';
import Graphic from '@arcgis/core/Graphic.js';
import type * as esri from '../esri';
import { FormgroupsService } from '../formgroups.service';
import { toFormTemplate } from '../form-config';
import { resolutionWhere, sqlValue } from '../sql';
@Component({
    selector: 'app-attribute-lookup',
    templateUrl: './attribute-lookup.component.html',
    styleUrls: ['./attribute-lookup.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AttributeLookupComponent implements OnInit {
  @ViewChild('createForm') private formEl: ElementRef<esri.FeatureForm>;
  form:esri.FeatureForm = null;
  // the create form is re-rendered each time it's shown, so only listen once per element
  private listening = new WeakSet<esri.FeatureForm>();
  constructor(public formGroups:FormgroupsService) { }
  @Input('accountType') accountType:string = "";
  @Input('layers') layers:esri.FeatureLayer[] = [];
  @Input('sourceForm') sourceForm:esri.FeatureForm = null;
  @Output() refreshForm = new EventEmitter<any>() ;
  create:boolean = false;
  lookupOpen = false;
  selectedSection: any = null;

  async initializeForm(section) {
    try {
      this.form = await this.formEl.nativeElement.componentOnReady();
      const graphic:esri.Graphic = new Graphic({ attributes: {} });
      if (section.layer) {
          section.layer.load().then(loaded=> {
            graphic.layer = section.layer;
            this.setForm(section, graphic);
          })
      }
      if (this.listening.has(this.form)) {
        return;
      }
      this.listening.add(this.form);
      this.form.addEventListener('arcgisValueChange', async event => {
        const e = event.detail;
        const formLayer = this.form.layer as esri.FeatureLayer;
        if (e.fieldName === 'ContractDate') {
          const query = formLayer.createQuery();
          query.outStatistics = [{
            onStatisticField: "ContractNum",
            outStatisticFieldName: "ContractNum_max",
            statisticType: "max"
          }];
          query.outFields = ['ContractNum_max'];
          query.returnGeometry = false;
          formLayer.queryFeatures(query).then(async result => {
            if (result.features.length) {
              let num = result.features[0].getAttribute('ContractNum_max');
              num = (parseInt(num.substr(4)) + 1).toString();
              if (num.length === 4) {
                num = '0' + num;
              }
              if (num.length === 3) {
                num = '00' + num;
              }
              if (num.length === 2) {
                num = '000' + num;
              }
              if (num.length === 1) {
                num = '0000' + num;
              }
              const values = await this.form.getValues();
              this.form.feature.attributes = values;

              num = new Date(values.ContractDate).getFullYear().toString() + num;
              this.form.feature.setAttribute('ContractNum', num);
              this.form.feature = this.form.feature.clone();

            }
          });
        }
        if (e.fieldName === 'ConfResDate') {
          // the form component has no setValue(), so set the value on a new copy of the feature
          this.form.feature.attributes = await this.form.getValues();
          this.form.feature.setAttribute('ConfResDate', new Date(e.value as number).setHours(0,0,0,0));
          this.form.feature = this.form.feature.clone();
        }
      });

    } catch (error) {
      console.log('FeatureForm: ', error);
    }
  }

  setForm(section, graphic) {
    this.create = true;
    this.form.layer = section.layer;
    this.form.formTemplate = toFormTemplate([section.fieldConfig], { layer: section.layer });
    this.form.feature = graphic;
  }

  async submit() {
    let addFeatures: esri.Graphic[] = [];
    addFeatures = [new Graphic({ attributes: await this.form.getValues() })];
    (this.form.layer as esri.FeatureLayer).applyEdits({ addFeatures: addFeatures }).then(result => {
      //this.formSubmitted.emit(this.form.layer);
      this.create = false;
      this.selectedSection.features = addFeatures;
      this.setFeatureText(this.selectedSection);
      this.selectedSection = null;
    });
  }
  showCreationForm(section) {
    this.selectedSection = section;
    this.create = true;
    setTimeout(() => {
      this.initializeForm(section);
    });
  }
  async applyToFeature(section) {
    this.sourceForm.feature.attributes = await this.sourceForm.getValues()
    section.fields.forEach(field => {
      this.sourceForm.feature.attributes[field] = section.features[0].attributes[field];
    });
    this.refreshForm.emit(this.sourceForm);
  }
  searchSection(section:any) {
    if (section.layer) {
      const [field, numField] = section.fields;
      // resolutions are looked up by the year of their date plus their number
      const where = section.title.includes("Resolution")
        ? resolutionWhere(section.layer, field, numField, section[field], section[numField])
        : `${field} = ${sqlValue(section.layer, field, section[field])}`;
      section.layer.queryFeatures({where: where, outFields:['*']}).then((featureSet:esri.FeatureSet) => {
        section.features = featureSet.features;
        if (section.features.length) {
          this.setFeatureText(section);
        }
      });
    }
  }
  checkAccountType = (section) => {
    return section.accountTypes.filter(type => {
      return this.accountType.includes(type);
    }).length > 0;
  }
  setFeatureText(section) {
    section.text = section.title.replace('ABS - ', '');
    section.fields.forEach(field => {
      if (field.toLowerCase().includes('date')) {
        section.text += new Date(section.features[0].attributes[field]).toLocaleDateString() + ' ';
      } else {
        section.text += section.features[0].attributes[field] + ' ';
      }
    });
    section.text += ' found';
  }
 sections:any[] = [];

  ngOnInit() {
    this.layers.forEach(layer => {
      if (layer.title.includes("Confirming")) {
        this.sections.push({layer: layer, fieldConfig: this.formGroups.confResFormGroup,fields: ['ConfResDate', 'ConfResNum'], values: ["",""], inputs: ['Year', 'Resolution Number'], title: layer.title, text: '', accountTypes: ['Assessment', 'Abatement'], features:[]});
      }
      if (layer.title.includes("Directing")) {
        this.sections.push({layer: layer, fieldConfig: this.formGroups.dirResFormGroup, fields: ['DirResDate', 'DirResNum'], values: ["",""], inputs: ['Year', 'Resolution Number'], title: layer.title, text: '', accountTypes: ['Assessment'], features:[]});
      }
      if (layer.title.includes("Correcting")) {
        this.sections.push({layer: layer, fieldConfig: this.formGroups.corrResFormGroup, fields: ['CorrResDate', 'CorrResNum'], values: ["",""], inputs: ['Year', 'Resolution Number'], title: layer.title, text: '', accountTypes: ['Assessment'], features:[]});
      }
      if (layer.title.includes("Roll")) {
        this.sections.push({layer: layer, fieldConfig: this.formGroups.rollFormGroup, fields: ['RollNum'], inputs: ['Roll#'], values: [""], title: layer.title, text: '', accountTypes: ['Assessment'], features:[]});
      }
      if (layer.title.includes("Contract")) {
        this.sections.push({layer: layer, fieldConfig: this.formGroups.contractFormGroup, fields: ['ContractNum', 'ContractDate'], inputs: ['Contact #'], values: [""], title: layer.title, text: '', accountTypes: ['Tap Fee'], features:[]});
      }
    })
  }
}
