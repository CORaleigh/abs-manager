import { Component, OnInit } from '@angular/core';
import { loadModules, loadCss } from 'esri-loader';
import esri = __esri;
import { FormgroupsService } from './formgroups.service';
import { Crumb } from './crumb';
import { Panel } from './panel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private formGroupService: FormgroupsService) {
  }
  layers: esri.FeatureLayer[] = [];
  accountLayers: esri.FeatureLayer[] = [];
  selectedAccount: esri.Graphic = null;
  selectedProperty: esri.Graphic = null;
  billingLayer: esri.FeatureLayer;
  assessmentsLayer: esri.FeatureLayer;
  abatementsLayer: esri.FeatureLayer;
  tapfeesLayer: esri.FeatureLayer;
  paymentsLayer: esri.FeatureLayer;
  communicationLayer: esri.FeatureLayer;
  accountPanels: Panel[] = [];
  detailPanels: Panel[] = [];
  loaded: boolean = false;
  basemap: string = 'gray-vector';
  paymentFeatures: esri.Graphic[] = []; 
  paymentEnabled: boolean = false;
  async authorize() {
    try {
      const [OAuthInfo, esriId] = await loadModules([
        "esri/identity/OAuthInfo",
        "esri/identity/IdentityManager",
      ], {
          css: true,
          // insert the stylesheet link above the first <style> tag on the page
          insertCssBefore: 'style'
        });
      const info: esri.OAuthInfo = new OAuthInfo({
        appId: 'EHQRkH0b5LJnizhP',
        portalUrl: 'https://mapstest.raleighnc.gov/portal',
        popup: false
      });
      esriId.registerOAuthInfos([info]);
      esriId.checkSignInStatus(info.portalUrl + '/sharing').then(event => {
        this.initialize();
      }).catch(() => {
        esriId.getCredential(info.portalUrl + '/sharing');
      });;
    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }

  storeLayer(layer: esri.FeatureLayer, layers: esri.FeatureLayer[]) {
    if (layer.layerId === 0) {
      this.tapfeesLayer = layer;
    }
    if (layer.layerId === 1) {
      this.abatementsLayer = layer;            
    }
    if (layer.layerId === 2) {
      this.assessmentsLayer = layer;            
    }  
    if (layer.layerId === 3) {
      this.billingLayer = layer;
    }
    if (layer.layerId === 4) {
      this.paymentsLayer = layer;
    }
    if (layer.layerId === 5) {
      this.communicationLayer = layer;
    }      
    layers.push(layer);
  }
  async initialize() {
    try {
      let layers: esri.FeatureLayer[] = [];
      const [FeatureLayer, Layer, WebMap, esriConfig] = await loadModules([
        'esri/layers/FeatureLayer',
        'esri/layers/Layer',
        'esri/WebMap',
        'esri/config'
      ]);
      esriConfig.portalUrl = 'https://mapstest.raleighnc.gov/portal';

      const webmap:esri.WebMap = new WebMap({
        portalItem: { // autocasts as new PortalItem()
          id: "b1675a3d73aa4534a6c34210d0b809da"
        }
      });

      webmap.load().then(() => {
        webmap.when(() => {
        //@ts-ignore
        webmap.layers.items.forEach((layer:esri.FeatureLayer) => {
          this.storeLayer(layer, layers);
        });
        webmap.tables.forEach((table:esri.FeatureLayer) => {
          let layer:esri.FeatureLayer = new FeatureLayer({url: (table as esri.FeatureLayer).url});
          this.storeLayer(layer, layers);     
        });
      });
      });

      // //FEATURE LAYERS//
      // this.assessmentsLayer = new FeatureLayer({
      //   portalItem: {
      //     id: "6043f5597a904ee5a9cda8663b1878cd"
      //   },
      //   layerId: 2,
      //   //@ts-ignore
      //   defaultPopupTemplateEnabled: true
      // });
      // layers.push(this.assessmentsLayer);
      // this.abatementsLayer = new FeatureLayer({
      //   portalItem: {
      //     id: "6043f5597a904ee5a9cda8663b1878cd"
      //   },
      //   layerId: 1,
      //   //@ts-ignore
      //   defaultPopupTemplateEnabled: true
      // });
      // layers.push(this.abatementsLayer);
      // this.tapfeesLayer = new FeatureLayer({
      //   portalItem: {
      //     id: "6043f5597a904ee5a9cda8663b1878cd"
      //   },
      //   layerId: 0,
      //   //@ts-ignore
      //   defaultPopupTemplateEnabled: true
      // });
      // layers.push(this.tapfeesLayer);
      // this.billingLayer = new FeatureLayer({
      //   portalItem: {
      //     id: "6043f5597a904ee5a9cda8663b1878cd"
      //   },
      //   layerId: 3,
      //   //@ts-ignore
      //   defaultPopupTemplateEnabled: true
      // });
      // this.assessmentsLayer.load();
      // this.abatementsLayer.load();
      // this.tapfeesLayer.load();
      // this.billingLayer.load();
      // layers.push(this.billingLayer);
      // this.communicationLayer = new FeatureLayer({
      //   portalItem: {
      //     id: "6043f5597a904ee5a9cda8663b1878cd"
      //   },
      //   layerId: 5,
      //   //@ts-ignore
      //   defaultPopupTemplateEnabled: true
      // });
      // this.communicationLayer.load();
      // this.paymentsLayer = new FeatureLayer({
      //   portalItem: {
      //     id: "6043f5597a904ee5a9cda8663b1878cd"
      //   },
      //   layerId: 4,
      //   //@ts-ignore
      //   defaultPopupTemplateEnabled: true
      // });
      // layers.push(this.communicationLayer);
      //PROPERTY LAYER//
      Layer.fromPortalItem({
        //@ts-ignore
        portalItem: { id: 'e5cd98a8d7b741d4bb70ae6694486355' }
      }).then((propertyLayer: esri.FeatureLayer) => {
        propertyLayer.popupTemplate = {
          title: '{SITE_ADDRESS}',
          content: [{
            type: "fields",
            //@ts-ignore
            fieldInfos: [{
              fieldName: "REID",
              label: "Real Estate ID"
            }, {
              fieldName: "PIN_NUM",
              label: "PIN#"
            },
            {
              fieldName: "OWNER",
              label: "Owner"
            },
            {
              fieldName: "ADDR1",
              label: "Mailing Address 1"
            },
            {
              fieldName: "ADDR2",
              label: "Mailing Address 2"
            },
            {
              fieldName: "ADDR3",
              label: "Mailing Address 3"
            }
            ]
          }]
        }
        layers.push(propertyLayer);

        propertyLayer.load().then(() => {
          this.assessmentsLayer.load().then(() => {
            this.accountLayers.push(this.assessmentsLayer);
            this.abatementsLayer.load().then(() => {
              this.accountLayers.push(this.abatementsLayer);
              this.tapfeesLayer.load().then(() => {
                this.accountLayers.push(this.tapfeesLayer);
                this.billingLayer.load().then(() => {
                  //@ts-ignore
                  this.billingLayer.popupTemplate = this.billingLayer.defaultPopupTemplate;
                  this.paymentsLayer.load().then(() => {
                  //@ts-ignore
                  this.paymentsLayer.popupTemplate = this.paymentsLayer.defaultPopupTemplate;    
                  //@ts-ignore
                  this.paymentsLayer.defaultPopupTemplateEnabled = false;                
                    this.communicationLayer.load().then(() => {
                                        //@ts-ignore
                  this.communicationLayer.popupTemplate = this.communicationLayer.defaultPopupTemplate; 
                    
                      this.layers = layers;
                      this.configureAccountPanels();
                      this.configureDetailPanels();
                      this.configureCrumbs();
                      this.loaded = !this.loaded;
                      loadCss('https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.2.5/css/calcite-web.min.css')
                      loadCss('https://js.arcgis.com/4.12/esri/css/main.css')
                    });
                  });
                });
              });
            });
          });
        });
      });
    } catch (error) {
      console.log('EsriLoader: ', error);
    }
  }
  changeTheme(checked: boolean, light: string, dark: string, url: string) {
    for (let i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets.item(i).href) {
        if (document.styleSheets.item(i).href.indexOf(light) > -1) {
          document.styleSheets.item(i).disabled = checked;
        }
        if (document.styleSheets.item(i).href.indexOf(dark) > -1) {
          document.styleSheets.item(i).disabled = !checked;
        } else {
          loadCss(url)
        }
      }
    }
  }
  darkModeToggle(event) {
    if (event.target.checked) {
      this.changeTheme(event.target.checked, 'calcite-web.min.css', 'calcite-web-dark.min.css', 'https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.2.5/css/calcite-web-dark.min.css');
      this.changeTheme(event.target.checked, 'css/main.css', 'dark/main.css', 'https://js.arcgis.com/4.12/esri/themes/dark/main.css');
      this.basemap = 'dark-gray-vector';
    } else {
      this.changeTheme(event.target.checked, 'calcite-web.min.css', 'calcite-web-dark.min.css', 'https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.2.5/css/calcite-web.min.css');
      this.changeTheme(event.target.checked, 'css/main.css', 'dark/main.css', 'https://js.arcgis.com/4.12/esri/themes/css/main.css');
      this.basemap = 'gray-vector';
    }
  }
  getLayerFields(layer: esri.FeatureLayer, names: string[]) {
    let fields: esri.Field[] = [];
    let matches: esri.Field[] = layer.fields.filter((field: esri.Field) => {
      return names.indexOf(field.name) > -1;
    });
    names.forEach((name: string) => {
      fields.push(matches.filter((field: esri.Field) => {
        return field.name === name;
      })[0]);
    });
    return fields;
  }
  configureAccountPanels() {
    this.accountPanels = [
      new Panel('Assessments', 'Assessment Details', this.assessmentsLayer, [], null,
        this.getLayerFields(this.assessmentsLayer, ['AccountID', 'CategoryTypeCode', 'ConfResDate', 'RollNum', 'PrincipalBalance', 'StatusCode']),
        ['ACCOUNT ID', 'CATEGORY TYPE', 'CONFIRMING RESOLUTION DATE', 'ROLL NUMBER', 'PRINCIPAL BALANCE', 'STATUS'],
        'AccountID',
        [this.formGroupService.assessmentFormGroup, this.formGroupService.billingFormGroup, this.formGroupService.altBillingFormGroup],
        false,
        true
      ),
      new Panel('Abatements', 'Abatement Details', this.abatementsLayer, [], null,
        this.getLayerFields(this.abatementsLayer, ['AccountID', 'CategoryTypeCode', 'ConfResDate', 'ABHousingLetter1', 'PrincipalBalance', 'StatusCode']),
        ['ACCOUNT ID', 'CATEGORY TYPE', 'CONFIRMING RESOLUTION DATE', 'FIRST HOUSING LETTER SENT', 'PRINCIPAL BALANCE', 'STATUS'],
        'AccountID',
        [this.formGroupService.abatementFormGroup, this.formGroupService.billingFormGroup, this.formGroupService.altBillingFormGroup],
        false,
        true
      ),
      new Panel('Tap Fees', 'Tap Fee Details', this.tapfeesLayer, [], null,
        this.getLayerFields(this.tapfeesLayer, ['AccountID', 'CategoryTypeCode', 'ContractDate', 'ContractNumber', 'PrincipalBalance', 'StatusCode']),
        ['ACCOUNT ID', 'CATEGORY TYPE', 'CONTRACT DATE', 'CONTRACT NUMBER', 'PRINCIPAL BALANCE', 'STATUS'],
        'AccountID',
        [this.formGroupService.tapFeeFormGroup, this.formGroupService.billingFormGroup, this.formGroupService.altBillingFormGroup],
        false,
        true
      )
    ];
  }
  configureDetailPanels() {
    this.detailPanels = [
      new Panel(
        'Bills',
        'Bill Details',
        this.billingLayer,
        [],
        null,
        this.getLayerFields(this.billingLayer, ['NoticeNum', 'NoticeDate', 'PrincipalBal', 'TotalDue']),
        ['NOTICE #', 'NOTICE DATE', 'PRINCIPAL BALANCE', 'TOTAL DUE'],
        'NoticeDate',
        [this.formGroupService.billingDataFormGroup, this.formGroupService.billSentToFormGroup, this.formGroupService.billSiteAddressFormGroup],
        false,
        false),
      new Panel(
        'Payments',
        'Payment Details',
        this.paymentsLayer,
        [],
        null,
        this.getLayerFields(this.paymentsLayer, ['PaymentDate', 'TransactionTypeCode', 'PaymentAmount', 'BillingTypeCode', 'StatusCode']),
        ['PAYMENT DATE', 'TRANSACTION TYPE', 'PAYMENT AMOUNT', 'BILLING CODE', 'Status'],
        'PaymentDate',
        [this.formGroupService.paymentFormGroup],
        false,
        false
      ),
      new Panel(
        'Communications',
        'Communication Details',
        this.communicationLayer,
        [],
        null,
        this.getLayerFields(this.communicationLayer, ['CommDate', 'CommTypeCode', 'CommCompletedDate', 'SentToName1']),
        ['COMMUNICATION DATE', 'TYPE', 'COMPLETED DATE', 'SENT TO'],
        'CommDate',
        [this.formGroupService.communicationFormGroup, this.formGroupService.commSentToFormGroup],
        false,
        false
      )
    ];
  }
  showAccounts() {
    this.accountPanels.forEach((panel: Panel) => {
      panel.visible = true;
      panel.showDetails = false;
    })
  }
  hideCrumbs(ids: number[]) {
    ids.forEach((id: number) => {
      this.crumbs[id].visible = false;
    });
  }
  toggleAccountCrumbs(panel: Panel) {
    if (panel.source.layer != panel.layer) {
      this.crumbs[1].visible = (panel.source.layer as esri.FeatureLayer).layerId === 2;
      this.crumbs[3].visible = (panel.source.layer as esri.FeatureLayer).layerId === 0;
      this.crumbs[2].visible = (panel.source.layer as esri.FeatureLayer).layerId === 1;
    }
  }
  toggleCrumbs(panel: Panel, showDetails: boolean) {
    this.crumbs.forEach((crumb: Crumb) => {
      crumb.active = crumb.panels.indexOf(panel) > -1 && panel.showDetails === crumb.showDetails;
    });
    this.crumbs[0].visible = true;
    if (panel.title === 'Accounts') {
    }
    if (panel.detailsTitle === 'Assessment Details') {
      this.crumbs[1].visible = true;
      this.hideCrumbs([2, 3]);
    }
    if (panel.detailsTitle === 'Abatement Details') {
      this.crumbs[2].visible = true;
      this.hideCrumbs([1, 3]);
    }
    if (panel.detailsTitle === 'Tap Fee Details') {
      this.crumbs[3].visible = true;
      this.hideCrumbs([1, 2]);
    }
    if (panel.title === 'Bills' && !panel.showDetails) {
      this.crumbs[4].visible = true;
      this.hideCrumbs([5, 6, 7, 8, 9]);
     // this.toggleAccountCrumbs(panel);
    }
    if (panel.detailsTitle === 'Bill Details' && panel.showDetails) {
      this.crumbs[5].visible = true;
     // this.toggleAccountCrumbs(panel);
    }
    if (panel.title === 'Payments' && !panel.showDetails) {
      this.crumbs[6].visible = true;
      this.hideCrumbs([4, 5, 7]);
     // this.toggleAccountCrumbs(panel);
    }
    if (panel.detailsTitle === 'Payment Details' && panel.showDetails) {
      this.crumbs[7].visible = true;
     // this.toggleAccountCrumbs(panel);
    }
    if (panel.title === 'Communications' && !panel.showDetails) {
      this.crumbs[8].visible = true;
      this.hideCrumbs([4, 5, 6, 7, 9]);
    //  this.toggleAccountCrumbs(panel);
    }
    if (panel.detailsTitle === 'Communication Details' && panel.showDetails) {
      this.crumbs[9].visible = true;
    //  this.toggleAccountCrumbs(panel);
    }
  }



  togglePanels(feature: esri.Graphic, layer: esri.FeatureLayer, showDetails: boolean, update: boolean) {
    
    [this.accountPanels, this.detailPanels].forEach((panelGroup: Panel[]) => {
      panelGroup.forEach((panel: Panel) => {
        panel.visible = panel.layer === layer;
        if (panel.layer === layer) {
          setTimeout(() => {
            if (showDetails) {
              panel.update = update;
              panel.selectedFeature = feature;
              panel.showDetails = true;
            } else {
              panel.selectedFeature = null;
              panel.showDetails = false;
            }
            setTimeout(() => {
              this.toggleCrumbs(panel, showDetails);
            })
          })
        }
      });
    });
  }
  accountSelected(feature: esri.Graphic) {
    this.selectedAccount = feature;
    this.togglePanels(feature, (feature.layer as esri.FeatureLayer), true, true);
  }
  createFeatureClicked(feature: esri.Graphic) {
    this.togglePanels(feature, (feature.layer as esri.FeatureLayer), true, false);
    this.selectedAccount = feature;
  }
  selectionMade(feature: esri.Graphic) {
    let count = 0;
    if (feature) {
      if (feature.geometry) {
        this.selectedAccount = null;
        this.selectedProperty = feature;
        this.paymentEnabled = true;
        this.accountLayers.forEach(layer => {
          let panel = this.accountPanels.filter((panel: Panel) => {
            return panel.layer === layer;
          })[0];
          layer.queryFeatures({ where: "REID = '" + feature.attributes.REID + "'", outFields: ['*'], orderByFields: [panel.orderBy + ' desc'] }).then((featureSet: esri.FeatureSet) => {
            panel.features = featureSet.features;
            count += featureSet.features.length;
            console.log(count);
            if (count > 1) {
              this.accountPanels.forEach(p => {
                p.showDetails = false;
                p.visible = true;
              });
            }
          });
        });

      } else {
        this.paymentEnabled = true;

        this.selectedAccount = null;
        //this.accountLayers.forEach(layer => {
          let panel = this.accountPanels.filter((panel: Panel) => {
            return panel.layer === feature.layer;
          })[0];
          
          panel.features = [feature];

          this.togglePanels(feature, (feature.layer as esri.FeatureLayer), true, true);

       // });       
      }
    }

  }
  formSubmitted() {
    this.accountPanels.forEach((panel: Panel) => {
      panel.showDetails = false;
      panel.visible = true;
      this.selectionMade(this.selectedProperty);
    })
    this.crumbs.forEach((crumb: Crumb, i: number) => {
      crumb.visible = i === 0;
      crumb.active = i === 0;
    });
  }
  showRelatedTable(item: any) {
    let layer: esri.FeatureLayer = this.layers.filter((layer: esri.FeatureLayer) => {
      return layer.layerId === item.tableId;
    })[0];
    item.features.forEach((feature:esri.Graphic) => {
      feature.popupTemplate = layer.popupTemplate;
    });
    [this.accountPanels, this.detailPanels].forEach((panelGroup: Panel[]) => {
      panelGroup.forEach((panel: Panel) => {
        if (panel.layer.layerId === item.tableId) {
          panel.visible = true;
          panel.showDetails = false;
          panel.selectedFeature = null;
          panel.features = item.features;
          panel.source = this.selectedAccount;
          this.toggleCrumbs(panel, true);
        } else {
          panel.visible = false;
          panel.showDetails = false;
        }
      });
    });
  }
  crumbClicked(crumb: Crumb, index:number) {
    if (!crumb.active) {
      this.crumbs.forEach((crumb: Crumb, i: number) => {
        crumb.active = false;
        if (i > 0 && index === 0) {
          crumb.visible = false;
        }
      });
      crumb.active = true;
      if (index === 0) {
        this.accountPanels.forEach((panel: Panel) => {
          panel.visible = true;
          panel.showDetails = false;
          panel.selectedFeature = null;
        });
        this.detailPanels.forEach((panel: Panel) => {
          panel.showDetails = false;
          panel.visible = false;
          panel.selectedFeature = null;
        });
      } else {
        [this.accountPanels, this.detailPanels].forEach((panelGroup: Panel[]) => {
          panelGroup.forEach((panel: Panel) => {
            if (crumb.panels.indexOf(panel) > -1) {
              this.togglePanels(null, panel.layer, crumb.showDetails, true);
            }
          });
        });
        if (index < 4 ) {
          this.crumbs.forEach((crumb: Crumb, i) => {
            crumb.visible = false;
          });
        }        
        // this.crumbs.forEach((crumb: Crumb, i) => {
        //   crumb.visible = i <= index;
        // });
      }
    }
  }
  crumbs: Crumb[] = [];
  configureCrumbs() {
    this.crumbs = [
      new Crumb('Accounts', this.accountPanels, true, true, false),
      new Crumb('Assessment Details', [this.accountPanels[0]], false, false, true),
      new Crumb('Abatement Details', [this.accountPanels[1]], false, false, true),
      new Crumb('Tap Fee Details', [this.accountPanels[2]], false, false, true),
      new Crumb('Billing', [this.detailPanels[0]], false, false, false),
      new Crumb('Billing Details', [this.detailPanels[0]], false, false, true),
      new Crumb('Payments', [this.detailPanels[1]], false, false, false),
      new Crumb('Payment Details', [this.detailPanels[1]], false, false, true),
      new Crumb('Communications', [this.detailPanels[2]], false, false, false),
      new Crumb('Communication Details', [this.detailPanels[2]], false, false, true)
    ]
  }
  getPayments(payments: esri.Graphic[]) {
    if (payments.length) {
      let panels: Panel[] = this.detailPanels.filter((panel: Panel) => {
        return panel.layer === this.paymentsLayer;
      });
      if (panels.length) {
        payments.sort((a: esri.Graphic, b: esri.Graphic) => {
          return b.attributes[panels[0].orderBy] - a.attributes[panels[0].orderBy];
        });
        payments.forEach((payment:esri.Graphic) => {
          //@ts-ignore
          payment.popupTemplate = this.paymentsLayer.defaultPopupTemplate;
        });
        panels[0].visible = true;
        panels[0].features = payments;
        panels[0].showDetails = false;
      }
      this.accountPanels.forEach((panel: Panel) => {
        panel.visible = false;
      });
      this.crumbs[6].visible = true;
      this.crumbs[6].active = true;
      this.crumbs[0].active = false;
    } else {
      alert('No payments made for this property.')
    }
  }
  paymentClicked() {
    
    let features: any[] = [];
    this.accountPanels.forEach((panel: Panel) => {
      features.push(panel.features);
    });
    this.paymentFeatures = features;

  }
  ngOnInit() {
    this.authorize();
  }
}
