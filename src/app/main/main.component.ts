import { Component, OnInit } from '@angular/core';
import { loadModules, loadCss } from 'esri-loader';
import esri = __esri;
import { FormgroupsService } from '../formgroups.service';
import { Crumb } from '../crumb';
import { Panel } from '../panel';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
import * as calcite from 'calcite-web';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private formGroupService: FormgroupsService, private route: ActivatedRoute, private router:Router, public shared:SharedService) {
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
  commentsLayer: esri.FeatureLayer;
  
  accountPanels: Panel[] = [];
  detailPanels: Panel[] = [];
  loaded: boolean = false;
  basemap: string = 'gray-vector';
  paymentFeatures: esri.Graphic[] = []; 
  paymentEnabled: boolean = false;
  totalFeatures: number = 0;
  identity:esri.IdentityManager = null;
  dark:boolean = false;
  signOut() {
    this.identity.destroyCredentials();
    window.location.reload();
  }
  async authorize() {
    try {
      const [OAuthInfo, esriId, Portal] = await loadModules([
        "esri/identity/OAuthInfo",
        "esri/identity/IdentityManager",
        "esri/portal/Portal"
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
      this.identity = esriId;
      esriId.registerOAuthInfos([info]);
      esriId.checkSignInStatus(info.portalUrl + '/sharing').then((credential:esri.Credential) => {
        const portal:esri.Portal = new Portal(info.portalUrl);
        portal.load().then(() => {
          this.shared.user = portal.user;
          if (this.shared.user.roleId === "o8P1VswLYBUnsLsQ") {
            this.shared.role = 'cashier';
          }
          if (this.shared.user.roleId === 'PT9XAlXMaIiCdBej') {
            this.shared.role = 'admin';
          }
          if (this.shared.user.roleId === 'rpT7LgMQ92eHhOef') {
            this.shared.role = 'viewer';
          }          
          if (this.shared.user.role === 'org_admin') {
            this.shared.role = 'admin';
          }
          
          this.initialize();
        });

      }).catch(() => {
        esriId.getCredential(info.portalUrl + '/sharing');
      });;
    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }
  
  storeLayer(layer: esri.FeatureLayer, layers: esri.FeatureLayer[]) {

    if (layer.title.includes("Tap Fees")) {
      this.tapfeesLayer = layer;
    }
    if (layer.title.includes('Abatements')) {
      this.abatementsLayer = layer;            
    }
    if (layer.title.includes('Assessment')) {
      this.assessmentsLayer = layer;            
    }  
    if (layer.title.includes('Billing Data')) {
      this.billingLayer = layer;
    }
    if (layer.title.includes('Payments')) {
      this.paymentsLayer = layer;
    }
    if (layer.title.includes('Communications')) {
      this.communicationLayer = layer;
    }      
    if (layer.title.includes('Comments')) {
      this.commentsLayer = layer;
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
          id: "2a3e30ce4ad54380a1a7232301b1f3dd"
        }
      });
      
      webmap.load().then(() => {
        webmap.when(() => {
          //@ts-ignore
          webmap.layers.items.forEach((layer:esri.FeatureLayer) => {

            this.storeLayer(layer, layers);
          });
          webmap.tables.forEach((table:esri.FeatureLayer) => {
            let layer:esri.FeatureLayer = new FeatureLayer({url: (table as esri.FeatureLayer).url, title: table.title});
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
            },
            {
              fieldName: "DEED_BOOK",
              label: "DeedBook"
            },
            {
              fieldName: "DEED_PAGE",
              label: "Deed Page"
            }   
            ,
            {
              fieldName: "DEED_DATE",
              label: "Deed Date"
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
                this.billingLayer.popupTemplate.content = [{
                  type: 'text',
                  //@ts-ignore
                  text: "<div><p><span style='font-weight:bold;'>Property Information</span></p><p><span /></p><p><span>Real Estate ID: {REID}</span></p><p><span /></p><p><span>PIN: {NCPIN}</span></p><p><span /></p><p><span /></p><p><span style='font-weight:bold;'>Billing Information</span></p><p><span /></p><p><span>Account ID: {AccountID}</span></p><p><span /></p><p><p><span>Billing Type: {BillingTypeCode}</span></p><p><p><span>Notice Date: {NoticeDate}</span></p><p><p><span>Notice #: {NoticeNum}</span></p><p><p><span>Notice Year: {NoticeYear}</span></p> <p><p><span>Number of Days: {NumberOfDays}</span></p>  <p><p><span>Payoff Amount: ${PayoffAmount}</span></p><p><span>Total Due: ${TotalDue}</span></p><p><p><span>Principal Balance: ${PrincipalBal}</span></p><p><p><span>Principal Past Due: {PrincipalPastDue}</span></p><p><p><span>Principal Pre-paid: {PrincipalPrePaid}</span></p><p><p><span>Interest Paid Through: {InterestPaidThruDate}</span></p><p><p><span>Interest Start Date: {InterestFromDate}</span></p>   <p><p><span>Projected Principal Due: ${ProjDuePrincipal}</span></p><p><p><span>Projected Interest Amount: ${ProjInterestAmount}</span></p><p><p><span>Installment Amount: ${InstallmentAmount}</span></p>   <p><span /></p><p><span style='font-weight:bold;'>Bill Sent To</span></p><p><span /></p><p><span>{BillSentToName1} {BillSentToName2}</span></p><p><p><span>{BillSentToAddr1}</span></p><p><p><span>{BillSentToAddr2}</span></p><p><p><span>{BillSentToAddr3}</span></p><p><span /></p><p><span style='font-weight:bold;'>Site Address</span></p><p><span /></p><p><span>{SiteStreetNum} {SiteStreetDirPre} {SiteStreetName} {SiteStreetType}</span></p><p><span>{SiteStreetSuite}</span></p><p><p><span>{SiteStreetCity}, {SiteStreetCounty} {SiteStreetZip}</span></p></div>"
                }];                  
                this.paymentsLayer.load().then(() => {
                  //@ts-ignore
                  this.paymentsLayer.popupTemplate = this.paymentsLayer.defaultPopupTemplate;   
                  
                  this.paymentsLayer.popupTemplate.content = [{
                    type: 'text',
                    //@ts-ignore
                    text: "<div><p><span style='font-weight:bold;'>Payment Information</span></p><p><span /></p><p><span>Billing Account ID: {AccountID}</span></p><p><span /></p><p><span>Transaction Type Code: {TransactionTypeCode}</span></p><p><span /></p><p><span>Payment Date: {PaymentDate}</span></p><p><span /></p><p><span>Payment Class Code: {PaymentClassCode}</span></p><p><span /></p><p><span>Payment Amount: ${PaymentAmount}</span></p><p><span>Principal Amount: ${PrincipalAmount}</span></p><p><span>Interest Amount: ${InterestAmount}</span></p><p><span /></p><p><span>Receipt #: {PaymentReceiptNumber}</span></p><p><span /></p><p><span>Posted: {PaymentPostingDate}</span></p><p><span /></p><p><span>Interest Paid Thru: {PaymentInterestPaidThruDate}</span></p><p><span /></p><p><span>Source: {PaymentSource}</span></p><p><span /></p><p><span>Method: {PaymentMethod}</span></p><p><span /></p><p><span>Journal Voucher #: {PaymentJournalVoucherNum}</span><span /></p><p><span>Description: {PaymentDescription}</span></p><p><span /></p><p><span>Reversed Flag: {PaymentReversedFlag}</span></p><p><span /></p><p><span>Holding Flag: {PaymentHoldingFlag}</span></p><p><span /></p><p><span>Transaction #: {PaymentTransactionNum}</span></p><p><span /></p><p><span>Prepay Transfer Flag: {PaymentPrepayTransferFlag}</span></p><p><span /></p><p><span>Billing Type: {CategoryTypeCode}</span></p><p><span /></p><p><span>Status: {StatusCode}</span></p><p><span /></p><p><span>Cashiering Transaction #: {CashieringTransactionNum}</span></p><p><span /></p><p><span>Cashier User ID: {CashieringUserID}</span></p><p><span /></p><p><span>Cashier Location: {CashieringLocationCode}</span></p><p><span /></p><p><span>Cashier Workstation: {CashieringWorkstationNum}</span></p></div>"
                  }];
                  
                  this.communicationLayer.load().then(() => {
                    //@ts-ignore
                    this.communicationLayer.popupTemplate = this.communicationLayer.defaultPopupTemplate; 
                    this.communicationLayer.popupTemplate.content = [{
                      type: 'text',
                      //@ts-ignore
                      text: ""
                    }];                    
                    this.commentsLayer.load().then(() => {
                      //@ts-ignore
                      this.commentsLayer.popupTemplate = this.commentsLayer.defaultPopupTemplate;
                      this.commentsLayer.popupTemplate.content = [{
                        type: 'text',
                        //@ts-ignore
                        text: "<div><p><span style='font-weight:bold;'>Comments</span></p><p><span /></p><p><span>Account ID: {AccountID}</span></p><p><span /></p><p><span>Comment Sequence: {CommentSequenceNum}</span></p><p><span /></p><p><span>Comment Date: {CommentDate}</span></p><p><span /></p><p><span>Comment Code: {CommentCode}</span></p><p><span /></p><p><span>Comment: {Comment}</span></p></div>"
                      }];        
                      this.layers = layers;
                      this.configureAccountPanels();
                      this.configureDetailPanels();
                      this.configureCrumbs();
                      this.loaded = !this.loaded;
                      loadCss('https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.2.5/css/calcite-web.min.css')
                      loadCss('https://js.arcgis.com/4.14/esri/css/main.css')
                    });
                    
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
  calcite.stopPropagation(event)

  if (event.target.checked) {
    this.changeTheme(event.target.checked, 'calcite-web.min.css', 'calcite-web-dark.min.css', 'https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.2.5/css/calcite-web-dark.min.css');
    this.changeTheme(event.target.checked, 'css/main.css', 'dark/main.css', 'https://js.arcgis.com/4.14/esri/themes/dark/main.css');
    this.basemap = 'dark-gray-vector';
    window.localStorage.setItem('dark', 'true');
  } else {
    this.changeTheme(event.target.checked, 'calcite-web.min.css', 'calcite-web-dark.min.css', 'https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.2.5/css/calcite-web.min.css');
    this.changeTheme(event.target.checked, 'css/main.css', 'dark/main.css', 'https://js.arcgis.com/4.14/esri/themes/css/main.css');
    this.basemap = 'gray-vector';
    window.localStorage.setItem('dark', 'false');
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
    this.getLayerFields(this.tapfeesLayer, ['AccountID', 'CategoryTypeCode', 'ContractDate', 'ContractNum', 'PrincipalBalance', 'StatusCode']),
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
        this.getLayerFields(this.paymentsLayer, ['AccountID','PaymentDate', 'TransactionTypeCode', 'PaymentAmount', 'BillingTypeCode', 'StatusCode']),
        ['ACCOUNTID','PAYMENT DATE', 'TRANSACTION TYPE', 'PAYMENT AMOUNT', 'BILLING CODE', 'STATUS'],
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
          ),
          new Panel(
            'Comments',
            'Comment Details',
            this.commentsLayer,
            [],
            null,
            this.getLayerFields(this.commentsLayer, ['CommentDate', 'CommentCode', 'Comment']),
            ['DATE', 'TYPE', 'COMMENT'],
            'CommentDate',
            [this.formGroupService.commentsFormGroup],
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
            this.hideCrumbs([5, 6, 7, 8, 9, 11]);
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
          if (panel.title === 'Comments' && !panel.showDetails) {
            this.crumbs[10].visible = true;
            this.hideCrumbs([4, 5, 6, 7, 9, 11]);
            //  this.toggleAccountCrumbs(panel);
          }
          if (panel.detailsTitle === 'Comment Details' && panel.showDetails) {
            this.crumbs[11].visible = true;
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
        selectionMadeMultiple(features: esri.Graphic[]) {
          console.log(features);
          let ids = [];
          let reids = [];
          features.forEach(feature => {
            ids.push(feature.attributes['AccountID']);
          })
          this.accountLayers.forEach(layer => {
            let panel = this.accountPanels.filter((panel: Panel) => {
              return panel.layer === layer;
            })[0];
            layer.queryFeatures({where: "AccountID in (" + ids.toString().replace('[','').replace(']', '') + ")" ,outFields:['*']}).then(featureSet => {
              panel.features = featureSet.features;
              panel.features.forEach(feature => {
                reids.push(feature.attributes['REID']);
              });
            });
  

          })


        }
        selectionMade(feature: esri.Graphic) {
          let count = 0;
          if (feature) {
            if (feature.geometry) {
              this.selectedAccount = null;
              this.selectedProperty = feature;
              this.paymentEnabled = true;

              this.router.navigate(['reid',  feature.attributes.REID]);
              this.accountLayers.forEach(layer => {
                let panel = this.accountPanels.filter((panel: Panel) => {
                  return panel.layer === layer;
                })[0];
                layer.queryFeatures({ where: "REID = '" + feature.attributes.REID + "'", outFields: ['*'], orderByFields: [panel.orderBy + ' desc'] }).then((featureSet: esri.FeatureSet) => {
                  panel.features = featureSet.features;
                  count += featureSet.features.length;
                  // console.log(count);
                  // if (count > 0) {
                  //   this.accountPanels.forEach(p => {
                  //     p.showDetails = false;
                  //     p.visible = true;
                  //   });
                  // }
                  this.accountPanels.forEach(p => {
                    p.showDetails = false;
                    p.visible = true;
                    this.crumbs.forEach((crumb: Crumb, i: number) => {
                      crumb.visible = i === 0;
                      crumb.active = i === 0;
                    });
                  });
                  this.detailPanels.forEach(p => {
                    p.showDetails = false;
                    p.visible = false;
                  });                  
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
            new Crumb('Communication Details', [this.detailPanels[2]], false, false, true),
            new Crumb('Comments', [this.detailPanels[3]], false, false, false),
            new Crumb('Comment Details', [this.detailPanels[3]], false, false, true)      
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
          this.totalFeatures = features.length;
        }
        ngOnInit() {
          this.authorize();
        }

      }
      