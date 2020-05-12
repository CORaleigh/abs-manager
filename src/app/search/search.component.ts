import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import { ActivatedRoute, Router } from '@angular/router';

import esri = __esri;
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  constructor(private route: ActivatedRoute, private router: Router) { 
    
  }
  @ViewChild('searchDiv') private searchDiv: ElementRef;
  @ViewChild('viewDiv') private viewDiv: ElementRef;
  @Input('layers') layers: esri.FeatureLayer[] = null;
  @Input('basemap') basemap: string = null;
  @Output() selectionMade = new EventEmitter<esri.Graphic>();
  @Output() selectionMadeMultiple = new EventEmitter<esri.Graphic[]>();

  propertyLayer: esri.FeatureLayer = null;
  view: esri.MapView = null;
  sub:Subscription = null;
  highlight:any = null;
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
      where: contains ? field+" like '%" + params.suggestTerm.toUpperCase() + "%'":field+" like '" + params.suggestTerm.toUpperCase() + "%'",
      num: 6,
      outFields: [field],
      outSpatialReference: {wkid: 102100},
      returnDistinctValues: true,
      returnGeometry: false,
      orderByFields: [field]
    }).then((results) => {
      return results.features.map(feature => {
        return {
          key: field,
          text: feature.attributes[field],
          sourceIndex: params.sourceIndex
        }
      })
    }).catch(reason => console.log(reason));
  }

  getResults(params, field) {
    return this.propertyLayer.queryFeatures({
      where: field + " = '"+params.suggestResult.text.toUpperCase() + "'",
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
          name: feature.attributes.REID
        }
        return searchResult;
      });
      return searchResults;
    }).catch(reason => console.log(reason));;
  }

  getAccountSuggestions(params, field, layer) {
    return layer.queryFeatures({
      where: field+" like '" + params.suggestTerm.toUpperCase() + "%'",
      num: 6,
      outFields: [field, 'REID'],
      returnDistinctValues: true,
      returnGeometry: false,
      orderByFields: [field]
    }).then((results) => {
      return results.features.map(feature => {
        return {
          key: field,
          text: feature.attributes[field].toString(),
          sourceIndex: params.sourceIndex
        }
      })
    }).catch(reason => console.log(reason));
  }
  getAccountResults(params, field, layer:esri.FeatureLayer) {
    
    return layer.queryFeatures({
      where: field + " = '"+params.suggestResult.text.toUpperCase() + "'",
      outFields: ['*'],
      returnGeometry: false
    }).then(results => {
      let searchResults = results.features.map(feature => {
        let searchResult = {
          feature: feature,
          name: feature.attributes[field].toString()
        }
        return searchResult;
      });
      return searchResults;
    }).catch(reason => console.log(reason));
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
          name: new Date(feature.attributes[dateField]).getFullYear().toString()  + "-" + feature.attributes[numField]
        }
        return searchResult;
      });
      
      return searchResults;
    }).catch(reason => console.log(reason));;
  }  
  getResolutionSuggestions(params, dateField, numField, layer) {
    let year = null;
    let num = null;
    
    if (params.suggestTerm.indexOf('-') > -1) {
      let array = params.suggestTerm.split('-');
      year = array[0];
      num = array[1];
    
      return layer.queryFeatures({
        where: "EXTRACT(YEAR from "+dateField+") = " + year + " AND "+numField+" like '" + num + "%'",
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
            key: 'resolution',
            text: text,
            sourceIndex: params.sourceIndex
          }
        })
      }).catch(reason => console.log(reason));;      
    } else {
      return null;
    }

  }

  async initialize() {
    try {
      const [Search, LayerSearchSource, SearchSource] = await loadModules([
        'esri/widgets/Search',
        'esri/widgets/Search/LayerSearchSource',
        'esri/widgets/Search/SearchSource'
      ]);
      const reidSource: esri.SearchSource = new SearchSource({
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
      const pinSource: esri.SearchSource = new SearchSource({
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
      const addrSource: esri.SearchSource = new SearchSource({
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
      const ownerSource: esri.SearchSource = new SearchSource({
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
      
      const assessAccountSource: esri.SearchSource = new SearchSource({
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

      const abatementAccountSource: esri.SearchSource = new SearchSource({
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
      const tapFeeAccountSource: esri.SearchSource = new SearchSource({
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
      const rollNumSource: esri.SearchSource = new SearchSource({
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
      const contractSource: esri.SearchSource = new SearchSource({
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
      const confirmResSource: esri.SearchSource = new SearchSource({
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
            return this.getResolutionResults("EXTRACT(YEAR from ConfResDate) = " + year + " AND ConfResNum = '" + num + "'", 'ConfResDate', 'ConfResNum', this.getLayerByTitle('Confirming Resolutions'));

          }
                    
        }
      });    
      const dirResSource: esri.SearchSource = new SearchSource({
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
            return this.getResolutionResults("EXTRACT(YEAR from DirResDate) = " + year + " AND DirResNum = '" + num + "'", 'DirResDate', 'DirResNum', this.getLayerByTitle('Directing Resolutions'));

          }
                    
        }
      });     
      const corrResSource: esri.SearchSource = new SearchSource({
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
            return this.getResolutionResults("EXTRACT(YEAR from CorrResDate) = " + year + " AND CorrResNum = '" + num + "'", 'CorrResDate', 'CorrResNum', this.getLayerByTitle('Correcting Resolutions'));

          }
                    
        }
      });                 
      const search: esri.widgetsSearch = new Search({
        container: this.searchDiv.nativeElement,
        sources: [reidSource, pinSource, addrSource,ownerSource, assessAccountSource, abatementAccountSource, tapFeeAccountSource, confirmResSource, dirResSource, corrResSource, rollNumSource, contractSource],
        includeDefaultSources: false
      });
      
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
      search.on('select-result', event => {
        
        if (event.result.feature.geometry) {
          this.selectionMade.emit(event.result.feature);
          if (!this.view) {
            this.createMap();
          } else {
            if (event.result.feature.geometry) {
              this.addPropertyGraphic([event.result.feature]);
            }
          }
        } else {
          if (event.source.name.includes('Resolution')) {
            let features = [];
            let reids = [];
            let dateField = 'ConfResDate';
            let numField = 'ConfResNum';
            if (event.source.name.includes('Directing')){
              dateField = 'DirResDate';
              numField = 'DirResNum';
            }
            
            this.getLayerByTitle('Assessment').queryFeatures({outFields: ['AccountID', 'REID'], where: dateField + " = '" + new Date(event.result.feature.attributes[dateField]).toISOString()
            + "' and "+numField+" = '" + event.result.feature.attributes[numField]+"'"}).then(featureSet => {
              features = features.concat(featureSet.features);
              this.getLayerByTitle('Abatements').queryFeatures({outFields: ['AccountID', 'REID'], where: dateField + " = '" + new Date(event.result.feature.attributes[dateField]).toISOString()
              + "' and "+numField+" = '" + event.result.feature.attributes[numField]+"'"}).then(featureSet => {
                features = features.concat(featureSet.features);
                this.selectionMadeMultiple.emit(features);
                features.forEach(feature => {
                  reids.push(feature.attributes['REID']);
                });
                
                this.propertyLayer.queryFeatures({where: "REID in ('" + reids.toString().replace(/,/g, "','").replace('[', '').replace(']', '') + "')", returnGeometry: true, outFields: ['*'], outSpatialReference:{wkid:102100}}).then(featureSet => {
                  if (!this.view) {
                    this.createMap();
                  } else {
                    //if (featureSet.features[0].geometry) {

                    //featureSet.features.forEach(feature => {
                      this.addPropertyGraphic(featureSet.features);
                   // })
                    //}
                  }                
                });
              }).catch(reason => console.log(reason));
            }).catch(reason => console.log(reason));
          } else {

            this.propertyLayer.queryFeatures({where: "REID = '" + event.result.feature.attributes['REID'] + "'", returnGeometry: true, outFields: ['*'], outSpatialReference:{wkid:102100}}).then(featureSet => {
              this.selectionMade.emit(featureSet.features[0]);
  
              if (!this.view) {
                this.createMap();
              } else {
                //if (featureSet.features[0].geometry) {
                  //featureSet.features.forEach(feature => {
                    this.addPropertyGraphic(featureSet.features);
                  //})                }
              }
            });
          }
        }

      });
    } catch (error) {
      debugger
      console.log('EsriLoader: ', error);
    }
  }
  createMap() {
    loadModules(['esri/views/MapView', 'esri/Map', 'esri/widgets/Fullscreen','esri/widgets/BasemapGallery','esri/widgets/Expand']).then(
      ([MapView, Map, Fullscreen, BasemapGallery,Expand]) => {
      const map: esri.Map = new Map({
        basemap: this.basemap
      });
      this.view = new MapView({
        map: map,
        container: this.viewDiv.nativeElement,
        extent: {
          xmin: -78.995,
          ymin: 35.519,
          xmax: -78.253,
          ymax: 36.077,
          spatialReference: {
            wkid: 4326
          }
        }
      });
    this.view.ui.add(new Expand({content: new BasemapGallery({
      container: document.createElement("div"),
      view: this.view
    }
      
    )}),'top-left');
      this.view.popup.dockEnabled = true;
      this.view.popup.dockOptions = {
        position: 'top-right',
        buttonEnabled: false
      };
      this.view.map.add(this.getLayerByTitle('Property'));
      //this.view.popup.actions.removeAll();
      this.view.whenLayerView(this.getLayerByTitle('Property')).then((layerView:esri.LayerView) => {
        this.view.popup.defaultPopupTemplateEnabled = true;
        // this.view.popup.open({
        //   features: features
        // });
        // this.view.popup.watch('selectedFeature', (feature:esri.Graphic) => {
        //   this.view.goTo(feature);
        // });
        //@ts-ignore
        this.propertyLayer = layerView.layer;//this.view.map.layers.items.filter((layer:esri.Layer) => {
        //  return layer.title.includes('Property');
        //})[0];
        
        const fullscreen = new Fullscreen({ view: this.view });
        this.view.ui.add(fullscreen, 'top-left');
        // features.forEach(feature => {
        //   if (feature.geometry) {
        //     this.addPropertyGraphic([feature]);
        //   }
        // });
        this.initialize();

      }).catch(reason => console.log(reason));;
    });
  }
  addPropertyGraphic(features: esri.Graphic[]) {
    loadModules(['esri/Color']).then(([Color]) => {
      this.view.popup.defaultPopupTemplateEnabled = true;
      this.view.popup.open({
        features: features
      });
        this.view.popup.watch('selectedFeature', (feature:esri.Graphic) => {
          //this.view.goTo(feature);
        //@ts-ignore
        const layerView:esri.FeatureLayerView = (this.view.layerViews.items.filter((layerView:esri.LayerView) =>  {
          return layerView.layer.title.includes('Property');
        })[0] as esri.FeatureLayerView);

          if (this.highlight) {
            this.highlight.remove();
          }
          this.highlight = layerView.highlight(feature);          
        });      

      this.view.goTo(features);
      this.view.graphics.removeAll();
      features.forEach((feature:esri.Graphic) => {
        feature.symbol = {
          type: "simple-fill",
          color: new Color([76, 140, 43, 0.1]),
          //@ts-ignore
          outline: {
            color: new Color([76, 140, 43, 1]),
            width: 3
          }
        };
        this.view.graphics.add(feature);
      });

    });
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.layers) {
      if (changes.layers.currentValue.length) {
        changes.layers.currentValue.forEach((layer: esri.FeatureLayer) => {
          if (layer.url.indexOf('Property') > -1) {
              this.propertyLayer = layer;

          }
        });
        this.createMap();
      }
    }
    if (changes.basemap) {
      loadModules(['esri/Basemap']).then(([Basemap]) => {
        if (this.view) {
          this.view.map.basemap = Basemap.fromId(changes.basemap.currentValue);
        }
      });
    }
  }
}
