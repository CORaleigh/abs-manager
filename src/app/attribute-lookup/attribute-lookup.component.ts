import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from "esri-loader";
import esri = __esri;
import { FormgroupsService } from '../formgroups.service';
@Component({
  selector: 'app-attribute-lookup',
  templateUrl: './attribute-lookup.component.html',
  styleUrls: ['./attribute-lookup.component.scss']
})
export class AttributeLookupComponent implements OnInit {
  @ViewChild('createForm') private formDiv: ElementRef;
  form:esri.FeatureForm = null;
  constructor(public formGroups:FormgroupsService) { }
  @Input('accountType') accountType:string = "";
  @Input('layers') layers:esri.FeatureLayer[] = [];
  @Input('sourceForm') sourceForm:esri.FeatureForm = null;
  @Output() refreshForm = new EventEmitter<any>() ;
  create:boolean = false;
  selectedSection: any = null;
   
  async initializeForm(section) {
    try {
      const [FeatureForm, Graphic] = await loadModules([
        'esri/widgets/FeatureForm', 'esri/Graphic'
      ]);
     // if (!this.form) {
        this.form = new FeatureForm({
          container: this.formDiv.nativeElement
        });
     // }
      const graphic:esri.Graphic = new Graphic({ attributes: {} });
      if (section.layer) {
        //if (!section.layer.loaded) {
          section.layer.load().then(loaded=> {
            graphic.layer = section.layer;
            this.setForm(section, graphic);
          })
      //  } else {
     //     graphic.layer = section.layer;
     //     this.setForm(section, graphic);          
     //   }
        
      }
      this.form.on('value-change', e => {
        if (e.fieldName === 'ContractDate') {
          const query = this.form.layer.createQuery();
          query.outStatistics = {
            //@ts-ignore
            onStatisticField: "ContractNum", 
            outStatisticFieldName: "ContractNum_max",
            statisticType: "max"
          };
          query.outFields = ['ContractNum_max'];
          query.returnGeometry = false;
          this.form.layer.queryFeatures(query).then(result => {
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
              this.form.feature.attributes = this.form.getValues();

              num = new Date(this.form.getValues().ContractDate).getFullYear().toString() + num;     
              this.form.feature.setAttribute('ContractNum', num + 1);
              this.form.feature = this.form.feature.clone();
          
            }
          });
        }
      });

    } catch (error) {
      console.log('EsriLoader: ', error);
    }
  }

  setForm(section, graphic) {
    this.create = true;
    this.form.fieldConfig = [section.fieldConfig];
    this.form.feature = graphic;
    //@ts-ignore
    this.form.renderFields();      
  }

  submit() {
    loadModules(['esri/Graphic', 'esri/layers/FeatureLayer']).then(([Graphic, FeatureLayer]) => {
      let addFeatures: esri.Graphic[] = [];
      addFeatures = [new Graphic({ attributes: this.form.getValues() })];
      this.form.layer.applyEdits({ addFeatures: addFeatures }).then(result => {
        //this.formSubmitted.emit(this.form.layer);
        this.create = false;
        this.selectedSection.features = addFeatures;
        this.setFeatureText(this.selectedSection);
        this.selectedSection = null;         
      });
    })
  }
  showCreationForm(section) {
    this.selectedSection = section;
    this.create = true;
    setTimeout(() => {
      this.initializeForm(section);
    });
  }
  applyToFeature(section) {
    this.sourceForm.feature.attributes = this.sourceForm.getValues()
    section.fields.forEach(field => {
      this.sourceForm.feature.attributes[field] = section.features[0].attributes[field];
    });  
    this.refreshForm.emit(this.sourceForm);
  }  
  searchSection(section:any) {
    let where = section.fields[0] + " = '" + section[section.fields[0]] + "'";
    if (section.title.includes("Resolution")) {
      where = "EXTRACT(Year from " + section.fields[0] +") = " + section[section.fields[0]] + "AND " + section.fields[1] + " = '" + section[section.fields[1]] + "'";
    }
    if (section.layer) {
      section.layer.queryFeatures({where: where, outFields:['*']}).then((featureSet:esri.FeatureSet) => {
        section.features = featureSet.features;
        this.setFeatureText(section);
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
