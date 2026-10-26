import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import '@arcgis/map-components/components/arcgis-map';
import '@arcgis/map-components/components/arcgis-search';
import '@arcgis/map-components/components/arcgis-expand';
import '@arcgis/map-components/components/arcgis-basemap-gallery';
import '@arcgis/map-components/components/arcgis-fullscreen';
import '@arcgis/map-components/components/arcgis-popup';
import Collection from '@arcgis/core/core/Collection.js';
import Color from '@arcgis/core/Color.js';
import Extent from '@arcgis/core/geometry/Extent.js';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol.js';
import SearchSource, { type SearchSourceProperties } from '@arcgis/core/widgets/Search/SearchSource.js';
import type { SearchViewModelSelectResultEvent } from '@arcgis/core/widgets/Search/SearchViewModel.js';

import type * as esri from '../esri';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';
import { escapeSql, hasField, isNumericField, likeClause, resolutionWhere, sqlValue } from '../sql';
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SearchComponent implements OnInit, OnChanges {
  constructor(public shared:SharedService, private route: ActivatedRoute, private router: Router) { 
    
  }
  @ViewChild('searchEl') private searchEl: ElementRef<esri.widgetsSearch>;
  @Input('layers') layers: esri.FeatureLayer[] = null;
  @Input('basemap') basemap: string = null;
  @Output() selectionMade = new EventEmitter<esri.Graphic>();
  @Output() selectionMadeMultiple = new EventEmitter<esri.Graphic[]>();
  @Output() propertiesSelected = new EventEmitter<esri.Graphic[]>();

  propertyLayer: esri.FeatureLayer = null;
  view: esri.MapView = null;
  mapEl: esri.ArcgisMap = null;
  // the <arcgis-popup> in the map's popup slot docks in the top right corner
  popupDockOptions = {
    position: 'top-right' as const,
    buttonEnabled: false
  };
  sub:Subscription = null;
  mapVisible = false;
  initialExtent = new Extent({
    xmin: -78.995,
    ymin: 35.519,
    xmax: -78.253,
    ymax: 36.077,
    spatialReference: {
      wkid: 4326
    }
  });
  ngOnInit() {
    // this.initialize();
    // this.createMap();
  }

  getLayerByTitle(title:string) {
    const match = this.layers.filter(layer => {
        return layer.title.includes(title);
      }
    );
    
    if (match.length > 0) {
      return match[0];
    } else {
      return null;
    }
  }

  getSuggestions(params, field, contains) {
    return this.propertyLayer.queryFeatures({
      where: likeClause(this.propertyLayer, field, params.suggestTerm.toUpperCase(), contains),
      num: 6,
      outFields: [field],
      outSpatialReference: {wkid: 102100},
      returnDistinctValues: true,
      returnGeometry: false,
      orderByFields: [field]
    }).then((results) => {
      return results.features.map(feature => {
        // the search lists suggestions by key and source, so each key has to be unique
        return {
          key: String(feature.attributes[field]),
          text: feature.attributes[field],
          sourceIndex: params.sourceIndex
        }
      })
    }).catch(reason => { console.log(reason); return []; });
  }

  getResults(params, field) {
    return this.propertyLayer.queryFeatures({
      where: `${field} = ${sqlValue(this.propertyLayer, field, String(params.suggestResult.text).toUpperCase())}`,
      outFields: ['*'],
      outSpatialReference: {wkid: 102100},
      returnGeometry: true
    }).then(results => {
     //this.selectionMade.emit(results.features[0]);
      // if (!this.view) {
      //   this.createMap(results.features[0]);
      // }
      let searchResults = results.features.map(feature => {
        let searchResult = {
          extent: feature.geometry.extent,
          feature: feature,
          target: feature,
          name: feature.attributes.REID
        }
        return searchResult;
      });
      return searchResults;
    }).catch(reason => { console.log(reason); return []; });
  }

getAccountSuggestions(params, field, layer: esri.FeatureLayer) {
  const term = escapeSql(params.suggestTerm.trim().toUpperCase());

  // "like" only works on text, so convert number fields to text for the prefix match
  const where = isNumericField(layer, field)
    ? `CAST(${field} AS VARCHAR(20)) LIKE '${term}%'`
    : `UPPER(${field}) LIKE '${term}%'`;

  return layer.queryFeatures({
    where,
    num: 6,
    outFields: [field, 'REID'],
    returnDistinctValues: true,
    returnGeometry: false,
    orderByFields: [field]
  }).then(results =>
    results.features.map(feature => ({
      key: String(feature.attributes[field]),
      text: String(feature.attributes[field]),
      sourceIndex: params.sourceIndex
    }))
  ).catch(reason => { console.log(reason); return []; });
}

getAccountResults(params, field, layer: esri.FeatureLayer) {
  const raw = String(params.suggestResult.text).trim();
  let where: string;

  if (isNumericField(layer, field)) {
    const n = Number(raw);
    if (!Number.isFinite(n)) {
      return Promise.resolve([]); // not a number, so no match and nothing unsafe reaches the query
    }
    where = `${field} = ${n}`;                                  // AccountID = 14056
  } else {
    where = `${field} = '${escapeSql(raw.toUpperCase())}'`; // text fields keep quotes
  }

  return layer.queryFeatures({
    where,
    outFields: ['*'],
    returnGeometry: false
  }).then(results =>
    results.features.map(feature => ({
      feature,
      target: feature,
      name: String(feature.attributes[field])
    }))
  ).catch(reason => { console.log(reason); return []; });
}
  getResolutionResults(where, dateField, numField, layer) {
    
    return layer.queryFeatures({
      where: where,//field + " = '"+params.suggestResult.text.toUpperCase() + "'",
      outFields: ['*'],
      returnGeometry: false
    }).then(results => {
      
      let searchResults = results.features.map(feature => {
        let searchResult = {
          feature: feature,
          target: feature,
          name: new Date(feature.attributes[dateField]).getFullYear().toString()  + "-" + feature.attributes[numField]
        }
        return searchResult;
      });
      
      return searchResults;
    }).catch(reason => { console.log(reason); return []; });
  }  
  getResolutionSuggestions(params, dateField, numField, layer) {
    let year = null;
    let num = null;
    
    if (params.suggestTerm.indexOf('-') > -1) {
      let array = params.suggestTerm.split('-');
      year = Number(array[0]);
      num = array[1];
      if (!Number.isInteger(year)) {
        return null;
      }

      return layer.queryFeatures({
        where: "EXTRACT(YEAR from "+dateField+") = " + year + " AND " + likeClause(layer, numField, num),
        num: 6,
        outFields: [dateField, numField],
        returnDistinctValues: true,
        returnGeometry: false,
        orderByFields: [numField]
      }).then((results) => {
        return results.features.map(feature => {
          let text = new Date(feature.attributes[dateField]).getFullYear().toString();
          text += '-' + feature.attributes[numField];
          return {
            key: text,
            text: text,
            sourceIndex: params.sourceIndex
          }
        })
      }).catch(reason => { console.log(reason); return []; });
    } else {
      return null;
    }

  }

  // 5.x SearchSource no longer declares a name, but the source menu and select-result handling use it
  createSource(properties: SearchSourceProperties & { name: string }): esri.SearchSource {
    const { name, ...props } = properties;
    return Object.assign(new SearchSource(props), { name });
  }

  async initialize() {
    try {
      const reidSource: esri.SearchSource = this.createSource({
        placeholder:"Search By REID",
        getSuggestions: (params) => {
          return this.getSuggestions(params, 'REID', false)
        },
        getResults: params => {
          return this.getResults(params, 'REID');
        },
        minSuggestCharacters: 4,
        name: 'REID'
      });
      const pinSource: esri.SearchSource = this.createSource({
        placeholder:"Search By PIN",
        getSuggestions: (params) => {
          return this.getSuggestions(params, 'PIN_NUM', false)
        },
        getResults: params => {
          return this.getResults(params, 'PIN_NUM');
        },
        minSuggestCharacters: 4,
        name: 'PIN'
      });     
      const addrSource: esri.SearchSource = this.createSource({
        placeholder:"Search By Site Address",
        getSuggestions: (params) => {
          return this.getSuggestions(params, 'SITE_ADDRESS', false)
        },
        getResults: params => {
          return this.getResults(params, 'SITE_ADDRESS');
        },
        minSuggestCharacters: 4,
        name: 'Site Address'
      });       
      const ownerSource: esri.SearchSource = this.createSource({
        placeholder:"Search By Owner",
        getSuggestions: (params) => {
          return this.getSuggestions(params, 'OWNER', false);
        },
        getResults: params => {
          return this.getResults(params, 'OWNER');
        },
        minSuggestCharacters: 4,
        name: 'Owner'
      });         
      
      const assessAccountSource: esri.SearchSource = this.createSource({
        placeholder: "Assessment ID",
        minSuggestCharacters: 3,
        name: 'Assessment ID',     
        getSuggestions: (params) => {
          return this.getAccountSuggestions(params, 'AccountID', this.getLayerByTitle('Assessment'));
        },
        getResults: (params) => {
          return this.getAccountResults(params, 'AccountID', this.getLayerByTitle('Assessment'));
        }
      });

      const abatementAccountSource: esri.SearchSource = this.createSource({
        placeholder: "Abatement ID",
        minSuggestCharacters: 3,
        name: 'Abatement ID',           
        getSuggestions: (params) => {
          return this.getAccountSuggestions(params, 'AccountID', this.getLayerByTitle('Abatements'));
        },
        getResults: (params) => {
          return this.getAccountResults(params, 'AccountID', this.getLayerByTitle('Abatements'));

        }
      });
      const tapFeeAccountSource: esri.SearchSource = this.createSource({
        placeholder: "Tap Fee ID",
        minSuggestCharacters: 3,
        name: 'Tap Fee ID',             
        getSuggestions: (params) => {
          return this.getAccountSuggestions(params, 'AccountID', this.getLayerByTitle('Tap Fees'));
        },
        getResults: (params) => {
          return this.getAccountResults(params, 'AccountID', this.getLayerByTitle('Tap Fees'));
        }
      });     
      const rollNumSource: esri.SearchSource = this.createSource({
        placeholder: "Roll Number",
        minSuggestCharacters: 3,
        name: 'Roll Number',     
        getSuggestions: (params) => {
          return this.getAccountSuggestions(params, 'RollNum', this.getLayerByTitle('Rolls'));
        },
        getResults: (params) => {
          return this.getAccountResults(params, 'RollNum', this.getLayerByTitle('Assessment'));
        }
      });
      const contractSource: esri.SearchSource = this.createSource({
        placeholder: "Contract Number",
        minSuggestCharacters: 3,
        name: 'Contract Number',     
        getSuggestions: (params) => {
          return this.getAccountSuggestions(params, 'ContractNum', this.getLayerByTitle('Contracts'));
        },
        getResults: (params) => {
          return this.getAccountResults(params, 'ContractNum', this.getLayerByTitle('Tap Fees'));
        }
      });           
      const confirmResSource: esri.SearchSource = this.createSource({
        placeholder: "example: 2019-244",
        minSuggestCharacters: 4,
        name: 'Confirming Resolution',             
        getSuggestions: (params) => {
          const layer = this.getLayerByTitle('Confirming Resolutions');
          if (layer) {
            return this.getResolutionSuggestions(params, 'ConfResDate', 'ConfResNum', layer);
          } else {
            return null;
          }
        },
        getResults: (params) => {
          let year = null;
          let num = null;
          
          if (params.suggestResult.text.indexOf('-') > -1) {
            let array = params.suggestResult.text.split('-');
            year = array[0];
            num = array[1];
            const layer = this.getLayerByTitle('Confirming Resolutions');
            return this.getResolutionResults(resolutionWhere(layer, 'ConfResDate', 'ConfResNum', year, num), 'ConfResDate', 'ConfResNum', layer);

          }
                    
        }
      });    
      const dirResSource: esri.SearchSource = this.createSource({
        placeholder: "example: 2019-244",
        minSuggestCharacters: 4,
        name: 'Directing Resolution',             
        getSuggestions: (params) => {
          const layer = this.getLayerByTitle('Directing Resolutions');
          if (layer) {
            return this.getResolutionSuggestions(params, 'DirResDate', 'DirResNum', layer);
          } else {
            return null;
          }
        },
        getResults: (params) => {
          let year = null;
          let num = null;
          
          if (params.suggestResult.text.indexOf('-') > -1) {
            let array = params.suggestResult.text.split('-');
            year = array[0];
            num = array[1];
            const layer = this.getLayerByTitle('Directing Resolutions');
            return this.getResolutionResults(resolutionWhere(layer, 'DirResDate', 'DirResNum', year, num), 'DirResDate', 'DirResNum', layer);

          }
                    
        }
      });     
      const corrResSource: esri.SearchSource = this.createSource({
        placeholder: "example: 2019-244",
        minSuggestCharacters: 4,
        name: 'Correcting Resolutions',             
        getSuggestions: (params) => {
          const layer = this.getLayerByTitle('Correcting Resolutions');
          
          if (layer) {
            return this.getResolutionSuggestions(params, 'CorrResDate', 'CorrResNum', layer);
          } else {
            return null;
          }
        },
        getResults: (params) => {
          let year = null;
          let num = null;
          
          if (params.suggestResult.text.indexOf('-') > -1) {
            let array = params.suggestResult.text.split('-');
            year = array[0];
            num = array[1];
            const layer = this.getLayerByTitle('Correcting Resolutions');
            return this.getResolutionResults(resolutionWhere(layer, 'CorrResDate', 'CorrResNum', year, num), 'CorrResDate', 'CorrResNum', layer);

          }
                    
        }
      });                 
      const search = await this.searchEl.nativeElement.componentOnReady();
      // custom sources are supported, but the sources type only lists the layer and locator sources
      search.sources = new Collection([reidSource, pinSource, addrSource,ownerSource, assessAccountSource, abatementAccountSource, tapFeeAccountSource, confirmResSource, dirResSource, corrResSource, rollNumSource, contractSource]) as esri.widgetsSearch['sources'];
      search.addEventListener('arcgisSelectResult', e => this.resultSelected(e.detail));

      if (this.route.routeConfig) {
        if(this.route.snapshot.children.length) {
          if (this.route.snapshot.children[0].params.id) {
            search.search(this.route.snapshot.children[0].params.id);
          }

        }


        // if (this.route.routeConfig.path === 'reid/:id') {
        //   this.sub = this.route.params.subscribe(params => {
        //     if (params.id) {
        //       search.search(params.id);
        //     }
        //   });
        //   this.sub.unsubscribe();

        // }  
      }

    } catch (error) {
      console.log('EsriLoader: ', error);
    }
  }

  resultSelected(event: SearchViewModelSelectResultEvent) {
    
    
    if (event.result.feature.geometry) {
      this.selectionMade.emit(event.result.feature);
      this.addPropertyGraphic([event.result.feature]);
    } else {
      if (event.source.name.includes('Resolution')) {
        let reids = [];
        let dateField = 'ConfResDate';
        let numField = 'ConfResNum';
        if (event.source.name.includes('Directing')){
          dateField = 'DirResDate';
          numField = 'DirResNum';
        } else if (event.source.name.includes('Correcting')) {
          dateField = 'CorrResDate';
          numField = 'CorrResNum';
        }
        const year = new Date(event.result.feature.attributes[dateField]).getFullYear();
        const num = event.result.feature.attributes[numField];
        // only some account layers carry each resolution's fields (e.g. abatements only have confirming)
        const accountLayers = [this.getLayerByTitle('Assessment'), this.getLayerByTitle('Abatements')]
          .filter(layer => layer && hasField(layer, numField));
        Promise.all(accountLayers.map(layer =>
          layer.queryFeatures({outFields: ['AccountID', 'REID'], where: resolutionWhere(layer, dateField, numField, year, num)})
        )).then(featureSets => {
            const features = [].concat(...featureSets.map(featureSet => featureSet.features));
            this.selectionMadeMultiple.emit(features);
        
            features.forEach(feature => {
              reids.push(feature.attributes['REID']);
            });
            const reidList = reids.map(reid => sqlValue(this.propertyLayer, 'REID', reid)).join(',');
            this.propertyLayer.queryFeatures({where: `REID in (${reidList || 'NULL'})`, returnGeometry: true, outFields: ['*'], outSpatialReference:{wkid:102100}}).then(featureSet => {
              this.addPropertyGraphic(featureSet.features);
              this.propertiesSelected.emit(featureSet.features);
            });
        }).catch(reason => console.log(reason));
      } else {
        this.selectionMade.emit(event.result.feature);

        this.propertyLayer.queryFeatures({where: `REID = ${sqlValue(this.propertyLayer, 'REID', event.result.feature.attributes['REID'])}`, returnGeometry: true, outFields: ['*'], outSpatialReference:{wkid:102100}}).then(featureSet => {
          this.propertiesSelected.emit(featureSet.features);
          this.addPropertyGraphic(featureSet.features);
        });
      }
    }

  }

 
  // <arcgis-map> fires this once its view is ready; add the property layer, then set up the search sources
  viewReady(event: CustomEvent) {
    const mapEl = event.target as esri.ArcgisMap;
    if (this.view || !mapEl.ready) {
      return;
    }
    this.mapEl = mapEl;
    this.view = mapEl.view;
    // the map resets these on its <arcgis-popup> while it starts up, so set them once the view is ready
    if (mapEl.popupElement) {
      mapEl.popupElement.dockEnabled = true;
      mapEl.popupElement.defaultPopupTemplateEnabled = true;
    }
    const property = this.getLayerByTitle('Property');
    this.view.map.add(property);
    this.view.whenLayerView(property).then((layerView: esri.LayerView) => {
      this.propertyLayer = layerView.layer as esri.FeatureLayer;
      this.initialize();
    }).catch(reason => console.log(reason));
  }
  addPropertyGraphic(features: esri.Graphic[]) {
    // opens the <arcgis-popup>, which also highlights the selected feature
    this.mapEl.openPopup({
      features: features
    });
    this.view.goTo(features);
    this.view.graphics.removeAll();
    features.forEach((feature:esri.Graphic) => {
      feature.symbol = new SimpleFillSymbol({
        color: new Color([76, 140, 43, 0.1]),
        outline: {
          color: new Color([76, 140, 43, 1]),
          width: 3
        }
      });
      this.view.graphics.add(feature);
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    const layers = changes['layers']?.currentValue as esri.FeatureLayer[] | undefined;

    if (layers?.length) {
      const property = layers.find(layer => layer?.url?.includes('Property'));
      if (property) {
        this.propertyLayer = property;
      }
      // renders <arcgis-map>, which calls viewReady(); the basemap input is bound in the template
      this.mapVisible = true;
    }
  }
}
