import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {
  constructor() { }
  @ViewChild('searchDiv', null) private searchDiv: ElementRef;
  @ViewChild('viewDiv', null) private viewDiv: ElementRef;
  @Input('layers') layers: esri.FeatureLayer[] = null;
  @Input('basemap') basemap: string = null;
  @Output() selectionMade = new EventEmitter<esri.Graphic>();
  propertyLayer: esri.FeatureLayer = null;
  view: esri.MapView = null;
  ngOnInit() {
  }

  getSuggestions(params, field, contains) {
    return this.propertyLayer.queryFeatures({
      where: contains ? field+" like '%" + params.suggestTerm.toUpperCase() + "%'":field+" like '" + params.suggestTerm.toUpperCase() + "%'",
      num: 6,
      outFields: [field],
      outSpatialReference: {wkid: 102100},
      returnDistinctValues: false,
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
    });
  }

  getResults(params, field) {
    return this.propertyLayer.queryFeatures({
      where: field + " = '"+params.suggestResult.text.toUpperCase() + "'",
      outFields: ['*'],
      outSpatialReference: {wkid: 102100},
      returnGeometry: true
    }).then(results => {
      this.selectionMade.emit(results.features[0]);
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
    });
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
      // const reidSource: esri.LayerSearchSource = new LayerSearchSource({
      //   displayField: 'REID',
      //   layer: this.propertyLayer,
      //   maxResults: 10,
      //   maxSuggestions: 10,
      //   minSuggestCharacters: 3,
      //   name: "REID",
      //   outFields: ["REID", "PIN_NUM", "OWNER", "ADDR1", "ADDR2", "ADDR3", "SITE_ADDRESS"],
      //   placeholder: "Search By REID",
      //   popupEnabled: true,
      //   searchFields: ["REID"]
      // });
      // const pinSource: esri.LayerSearchSource = new LayerSearchSource({
      //   displayField: 'PIN_NUM',
      //   layer: this.propertyLayer,
      //   maxResults: 10,
      //   maxSuggestions: 10,
      //   minSuggestCharacters: 3,
      //   name: "PIN",
      //   outFields: ["REID", "PIN_NUM", "OWNER", "ADDR1", "ADDR2", "ADDR3", "SITE_ADDRESS"],
      //   placeholder: "Search By PIN",
      //   popupEnabled: true,
      //   searchFields: ["PIN_NUM"]
      // });
      // const addrSource: esri.LayerSearchSource = new LayerSearchSource({
      //   displayField: 'SITE_ADDRESS',
      //   layer: this.propertyLayer,
      //   maxResults: 10,
      //   maxSuggestions: 10,
      //   minSuggestCharacters: 3,
      //   name: "SITE_ADDRESS",
      //   outFields: ["REID", "PIN_NUM", "OWNER", "ADDR1", "ADDR2", "ADDR3", "SITE_ADDRESS"],
      //   placeholder: "Search By Site Address",
      //   popupEnabled: true,
      //   searchFields: ["SITE_ADDRESS"]
      // });
      // const acctAssessSource: esri.LayerSearchSource = new LayerSearchSource({
      //   displayField: 'AccountID',
      //   layer: this.layers[0],
      //   maxResults: 10,
      //   maxSuggestions: 10,
      //   minSuggestCharacters: 3,
      //   name: "AccountID",
      //   outFields: ["AccountID", "REID"],
      //   placeholder: "Search By Assessment AccountID",
      //   popupEnabled: false,
      //   searchFields: ["AccountID"]
      // });
      const search: esri.widgetsSearch = new Search({
        container: this.searchDiv.nativeElement,
        sources: [reidSource, pinSource, addrSource,ownerSource],
        includeDefaultSources: false
      });
      search.on('select-result', event => {
        
        this.selectionMade.emit(event.result.feature);
        if (!this.view) {
          this.createMap(event.result.feature);
        } else {
          if (event.result.feature.geometry) {
            this.addPropertyGraphic(event.result.feature);
          }
        }
      });
    } catch (error) {
      console.log('EsriLoader: ', error);
    }
  }
  createMap(feature: esri.Graphic) {
    loadModules(['esri/views/MapView', 'esri/Map', 'esri/widgets/Fullscreen']).then(([MapView, Map, Fullscreen]) => {
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
      this.view.popup.dockEnabled = true;
      this.view.popup.dockOptions = {
        position: 'top-right',
        buttonEnabled: false
      };
      this.view.popup.actions.removeAll();
      this.view.when(() => {
        this.view.popup.defaultPopupTemplateEnabled = true;
        this.view.popup.open({
          features: [feature]
        });
        
        const fullscreen = new Fullscreen({ view: this.view });
        this.view.ui.add(fullscreen, 'top-left');
        if (feature.geometry) {
          this.addPropertyGraphic(feature);
        }
      });
    });
  }
  addPropertyGraphic(feature: esri.Graphic) {
    loadModules(['esri/Color']).then(([Color]) => {
      this.view.popup.defaultPopupTemplateEnabled = true;
      this.view.popup.open({
        features: [feature]
      });
      this.view.goTo(feature);
      feature.symbol = {
        type: "simple-fill",
        color: new Color([76, 140, 43, 0.25]),
        //@ts-ignore
        outline: {
          color: new Color([76, 140, 43, 1]),
          width: 4
        }
      };
      this.view.graphics.removeAll();
      this.view.graphics.add(feature);
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
        this.initialize();
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
