import { Injectable } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
@Injectable({
  providedIn: 'root'
})
export class FormgroupsService {
  assessmentFormGroup: esri.FieldGroupConfig;
  abatementFormGroup: esri.FieldGroupConfig;
  tapFeeFormGroup: esri.FieldGroupConfig;
  assessmentBillingFormGroup: esri.FieldGroupConfig;
  abatementBillingFormGroup: esri.FieldGroupConfig;
  tapFeeBillingFormGroup: esri.FieldGroupConfig;
  billingDataFormGroup: esri.FieldGroupConfig;
  billSentToFormGroup: esri.FieldGroupConfig;
  billSiteAddressFormGroup: esri.FieldGroupConfig;
  communicationFormGroup: esri.FieldGroupConfig;
  commSentToFormGroup: esri.FieldGroupConfig;
  paymentFormGroup: esri.FieldGroupConfig;
  commentsFormGroup: esri.FieldGroupConfig;
  contractFormGroup: esri.FieldGroupConfig;
  rollFormGroup: esri.FieldGroupConfig;
  confResFormGroup: esri.FieldGroupConfig;
  dirResFormGroup: esri.FieldGroupConfig;
  corrResFormGroup: esri.FieldGroupConfig;
  altBillingFormGroup: esri.FieldGroupConfig;
  constructor() {
    loadModules(['esri/widgets/FeatureForm/FieldGroupConfig', 'esri/layers/support/CodedValueDomain']).then(
      ([FieldGroupConfig, CodedValueDomain]) => {
        this.assessmentFormGroup = new FieldGroupConfig({
          label: "Assessment",
          description: "Assessment information",
          fieldConfig: [
            {
              editable: false,
              label: 'Account ID',
              name: "AccountID"
            },
            {
              editable: false,
              label: 'Account Date',
              name: "AccountDate"
            },
            {
              editable: false,
              label: 'Real Estate ID',
              name: "REID",
              maxLength: 7
            },
            {
              editable: false,
              label: 'Complete Subaddress ID',
              name: "CSAID",
            },
            {
              editable: false,
              label: 'PIN #',
              name: "NCPIN",
              maxLength: 10
            },
            {
              editable: true,
              label: 'Billing Type Code',
              name: "BillingTypeCode",
              required: true, 
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Assessment",
                    code: "AS"
                  },
                  {
                    name: "Joint Venture",
                    code: "JV"
                  },
                  {
                    name: "Stormwater",
                    code: "SW"
                  }
                ]
              })
            },
            {
              editable: true,
              label: 'Category Type Code',
              name: "CategoryTypeCode",
              required: true, 
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Water",
                    code: "01"
                  },
                  {
                    name: "Sewer",
                    code: "02"
                  },
                  {
                    name: "Sidewalk",
                    code: "04"
                  },
                  {
                    name: "Paving",
                    code: "07"
                  },
                  {
                    name: "Stormwater",
                    code: "71"
                  },                  
                  {
                    name: "Multiple Flagged",
                    code: "99"
                  }
                ]
              })
            },
            {
              editable: true,
              label: 'Roll #',
              name: "RollNum",
              required: false,
              maxLength: 9             
            },
            {
              editable: true,
              label: 'Roll Lot',
              name: "RollLotNum",
              required: false,
              maxLength: 3              
            },            
            {
              editable: true,
              label: 'Roll # In/Out',
              name: "RollNumInOut",
              required: true,
              maxLength: 1,
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Inside City Limits",
                    code: "A"
                  },
                  {
                    name: "Outside City Limits",
                    code: ""
                  }
                ]})
            },
            {
              editable: true,
              required: true,
              label: 'Directing Resolution Number',
              name: "DirResNum",
            },
            {
              editable: true,
              required: true,
              label: 'Directing Resolution Date',
              name: "DirResDate",
            },
            {
              editable: true,
              label: 'Confirming Resolution Number',
              name: "ConfResNum",
              maxLength:9
            },
            {
              editable: true,
              label: 'Confirming Resolution Date',
              name: "ConfResDate",
            },
            {
              editable: true,
              label: 'Advertise Date',
              name: "AdvertiseDate",
            },
            {
              editable: true,
              label: 'Advertise Fee',
              name: "AdvertiseFee",
            },              
            {
              editable: true,
              label: 'Assessment Fee ID',
              name: "AssmntFeeID",
            }
          ]
        });
        this.abatementFormGroup = new FieldGroupConfig({
          label: "Abatements",
          description: "Abatement information",
          fieldConfig: [
            {
              editable: false,
              label: 'Account ID',
              name: "AccountID"
            },
            {
              editable: false,
              label: 'Account Date',
              name: "AccountDate"
            },
            {
              editable: false,
              label: 'Real Estate ID',
              name: "REID",
              maxLength: 7
            },
            {
              editable: false,
              label: 'Complete Subaddress ID',
              name: "CSAID",
            },
            {
              editable: false,
              label: 'PIN #',
              name: "NCPIN",
              maxLength: 10
            },
            {
              editable: true,
              required: true,
              label: 'Billing Type Code',
              name: "BillingTypeCode",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Abatement",
                    code: "AB"
                  }
                ]
              })
            },
            {
              editable: true,
              required: true,
              label: 'Category Type Code',
              name: "CategoryTypeCode",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Abatement",
                    code: "05"
                  }//,
                  // {
                  //   name: "Public Nuisance",
                  //   code: "51"
                  // },
                  // {
                  //   name: "Demolition",
                  //   code: "52"
                  // },
                  // {
                  //   name: "Asbestos Testing",
                  //   code: "53"
                  // },
                  // {
                  //   name: "Visual Obstruction",
                  //   code: "54"
                  // },
                  // {
                  //   name: "Multiple Flagged",
                  //   code: "99"
                  // }
                ]
              })
            },
            {
              editable: true,
              label: 'Adjustment Amount',
              name: "ABAdjustmentAmount",
            },
            {
              editable: true,
              label: 'Council Date',
              name: "ABCouncilDate",
            },
            {
              editable: false,
              label: 'Confirming Resolution Number',
              name: "ConfResNum",
              maxLength:9
            },
            {
              editable: false,
              label: 'Confirming Resolution Date',
              name: "ConfResDate",
            },
            {
              editable: true,
              label: 'Advertise Date',
              name: "AdvertiseDate",
            },
            {
              editable: true,
              label: 'Advertise Fee',
              name: "AdvertiseFee",
            },
            {
              editable: true,
              label: 'Housing Reference',
              name: "ABHousingRef",
              maxLength:9
            },
            {
              editable: true,
              required: true,
              label: 'Housing Letter 1 Sent On',
              name: "ABHousingLetter1",
            },
            {
              editable: true,
              label: 'Housing Letter 2 Sent On',
              name: "ABHousingLetter2",
            }
          ]
        });
        this.tapFeeFormGroup = new FieldGroupConfig({
          label: "Tap Fees",
          description: "Tap fee information",
          fieldConfig: [
            {
              editable: false,
              label: 'Account ID',
              name: "AccountID"
            },
            {
              editable: false,
              label: 'Account Date',
              name: "AccountDate"
            },
            {
              editable: false,
              label: 'Real Estate ID',
              name: "REID",
              maxLength: 7
            },
            {
              editable: false,
              label: 'Complete Subaddress ID',
              name: "CSAID",
            },
            {
              editable: false,
              label: 'PIN #',
              name: "NCPIN",
              maxLength: 10
            },
            {
              editable: true,
              required: true,
              label: 'Billing Type Code',
              name: "BillingTypeCode",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Tap Fee",
                    code: "TF"
                  }
                ]
              })
            },
            {
              editable: true,
              label: 'Category Type Code',
              name: "CategoryTypeCode",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "TF-Water",
                    code: "31"
                  },
                  {
                    name: "TF-Sewer",
                    code: "32"
                  },
                  {
                    name: "TF - Water/Sewer",
                    code: "33"
                  },
                  {
                    name: "TF - Contract Fee in Lieu",
                    code: "34"
                  }
                ]
              })
            },
            {
              editable: false,
              label: 'Contract #',
              name: "ContractNum",
              maxLength:9
            },
            {
              editable: true,
              required: true,
              label: 'Contract Date',
              name: "ContractDate",
            }
          ]
        });
        this.assessmentBillingFormGroup = new FieldGroupConfig({
          label: "Billing",
          description: "Billing information",
          fieldConfig: [
            {
              editable: true,
              label: 'Number of Years',
              name: "NumYears",
              required: false
            },
            {
              editable: true,
              label: 'Interest Rate',
              name: "InterestRate",
              required: false
            },
            {
              editable: true,
              label: 'Status',
              required: true,
              name: "StatusCode",

              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Pending",
                    code: "1"
                  },
                  {
                    name: "Active",
                    code: "2"
                  },
                  {
                    name: "Paid",
                    code: "3"
                  },
                  {
                    name: "Delinquent",
                    code: "4"
                  },
                  {
                    name: "Waived",
                    code: "5"
                  },
                  {
                    name: "Inactive",
                    code: "6"
                  },
                  {
                    name: "Write Off",
                    code: "7"
                  },
                  {
                    name: "Flagged",
                    code: "8"
                  }
                ]
              }),              
            },
            {
              editable: true,
              label: 'Action Type',
              name: "ActionTypeCode",
            },
            {
              editable: true,
              label: 'Total Lien Amount',
              name: "TotalLienAmount",
              required: false
            },
            {
              editable: true,
              required: false,
              label: 'Principal Balance',
              name: "PrincipalBalance",
            },
            {
              editable: true,
              label: 'Principal Past Due',
              name: "PrincipalPastDue",
            },
            {
              editable: true,
              label: 'Principal Pre-paid',
              name: "PrincipalPrePaid",
            },
            {
              editable: true,
              required: false,
              label: 'Interest Paid Thru',
              name: "InterestPaidThruDate",
            },
            {
              editable: true,
              required: false,
              label: 'Interest Start Date',
              name: "InterestStartDate",
            },
            {
              editable: true,
              required: false,
              label: 'Installment Amount',
              name: "InstallmentAmount",
            },
            {
              editable: true,
              label: 'Number of Installments Made',
              name: "NumInstallmentsMade",
            },
            {
              editable: true,
              label: 'Payment Plan',
              name: "PaymentPlanFlag",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })              
            },
            {
              editable: true,
              label: 'Payment Plan Description',
              name: "PaymentPlanDesc",
              maxLength: 35
            },
            {
              editable: true,
              label: 'Payment Plan Date',
              name: "PaymentPlanDate",
            },
            {
              editable: true,
              label: 'Bankrupt',
              name: "BankruptFlag",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })                 
            },

            {
              editable: true,
              label: 'Estate',
              name: "EstateFlag",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })                 
            },              
            {
              editable: true,
              label: 'Current Installment Due',
              name: "CurrentInstallmentDue",
            },
            {
              editable: true,
              label: 'Last Payment Date',
              name: "LastPaymentDate",
            }
          ]
        });
        this.abatementBillingFormGroup = new FieldGroupConfig({
          label: "Billing",
          description: "Billing information",
          fieldConfig: [
            {
              editable: true,
              label: 'Number of Years',
              name: "NumYears",
              required: false
            },
            {
              editable: true,
              label: 'Interest Rate',
              name: "InterestRate",
              required: false
            },
            {
              editable: true,
              label: 'Status',
              required: true,
              name: "StatusCode",

              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Pending",
                    code: "1"
                  },
                  {
                    name: "Active",
                    code: "2"
                  },
                  {
                    name: "Paid",
                    code: "3"
                  },
                  {
                    name: "Delinquent",
                    code: "4"
                  },
                  {
                    name: "Waived",
                    code: "5"
                  },
                  {
                    name: "Inactive",
                    code: "6"
                  },
                  {
                    name: "Write Off",
                    code: "7"
                  },
                  {
                    name: "Flagged",
                    code: "8"
                  }
                ]
              }),              
            },
            {
              editable: true,
              label: 'Action Type',
              name: "ActionTypeCode",
            },
            {
              editable: true,
              label: 'Total Lien Amount',
              name: "TotalLienAmount",
              required: true
            },
            {
              editable: true,
              required: true,
              label: 'Principal Balance',
              name: "PrincipalBalance",
            },
            {
              editable: true,
              label: 'Principal Past Due',
              name: "PrincipalPastDue",
            },
            {
              editable: true,
              label: 'Principal Pre-paid',
              name: "PrincipalPrePaid",
            },
            {
              editable: true,
              required: false,
              label: 'Interest Paid Thru',
              name: "InterestPaidThruDate",
            },
            {
              editable: true,
              required: false,
              label: 'Interest Start Date',
              name: "InterestStartDate",
            },
            {
              editable: true,
              required: false,
              label: 'Installment Amount',
              name: "InstallmentAmount",
            },
            {
              editable: true,
              label: 'Number of Installments Made',
              name: "NumInstallmentsMade",
            },
            {
              editable: true,
              label: 'Payment Plan',
              name: "PaymentPlanFlag",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })                 
            },
            {
              editable: true,
              label: 'Payment Plan Description',
              name: "PaymentPlanDesc",
            },
            {
              editable: true,
              label: 'Payment Plan Date',
              name: "PaymentPlanDate",
            },
            {
              editable: true,
              label: 'Bankrupt',
              name: "BankruptFlag",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })                 
            },

            {
              editable: true,
              label: 'Estate',
              name: "EstateFlag",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })                 
            },              
            {
              editable: true,
              label: 'Current Installment Due',
              name: "CurrentInstallmentDue",
            },
            {
              editable: true,
              label: 'Last Payment Date',
              name: "LastPaymentDate",
            }
          ]
        });
        this.tapFeeBillingFormGroup = new FieldGroupConfig({
          label: "Billing",
          description: "Billing information",
          fieldConfig: [
            {
              editable: true,
              label: 'Number of Years',
              name: "NumYears",
              required: true
            },
            {
              editable: true,
              label: 'Interest Rate',
              name: "InterestRate",
              required: true
            },
            {
              editable: true,
              label: 'Status',
              required: true,
              name: "StatusCode",

              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Pending",
                    code: "1"
                  },
                  {
                    name: "Active",
                    code: "2"
                  },
                  {
                    name: "Paid",
                    code: "3"
                  },
                  {
                    name: "Delinquent",
                    code: "4"
                  },
                  {
                    name: "Waived",
                    code: "5"
                  },
                  {
                    name: "Inactive",
                    code: "6"
                  },
                  {
                    name: "Write Off",
                    code: "7"
                  },
                  {
                    name: "Flagged",
                    code: "8"
                  }
                ]
              }),              
            },
            {
              editable: true,
              label: 'Action Type',
              name: "ActionTypeCode",
            },
            {
              editable: true,
              label: 'Total Lien Amount',
              name: "TotalLienAmount",
              required: true
            },
            {
              editable: true,
              required: true,
              label: 'Principal Balance',
              name: "PrincipalBalance",
            },
            {
              editable: true,
              label: 'Principal Past Due',
              name: "PrincipalPastDue",
            },
            {
              editable: true,
              label: 'Principal Pre-paid',
              name: "PrincipalPrePaid",
            },
            {
              editable: true,
              required: true,
              label: 'Interest Paid Thru',
              name: "InterestPaidThruDate",
            },
            {
              editable: true,
              required: true,
              label: 'Interest Start Date',
              name: "InterestStartDate",
            },
            {
              editable: true,
              required: true,
              label: 'Installment Amount',
              name: "InstallmentAmount",
            },
            {
              editable: true,
              label: 'Number of Installments Made',
              name: "NumInstallmentsMade",
            },
            {
              editable: true,
              label: 'Payment Plan',
              name: "PaymentPlanFlag",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })                 
            },
            {
              editable: true,
              label: 'Payment Plan Description',
              name: "PaymentPlanDesc",
            },
            {
              editable: true,
              label: 'Payment Plan Date',
              name: "PaymentPlanDate",
            },
            {
              editable: true,
              label: 'Bankrupt',
              name: "BankruptFlag",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })                 
            },
            {
              editable: true,
              label: 'Estate',
              name: "EstateFlag",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })                 
            },            
            {
              editable: true,
              label: 'Current Installment Due',
              name: "CurrentInstallmentDue",
            },
            {
              editable: true,
              label: 'Last Payment Date',
              name: "LastPaymentDate",
            }
          ]
        });                
        this.billingDataFormGroup = new FieldGroupConfig({
          label: "Billing Data",
          description: 'Billing information',
          fieldConfig: [{
            name: 'AccountID',
            label: 'Billing Account ID',
            editable: false
          },
          {
            name: 'REID',
            label: 'Real Estate ID',
            editable: false,
            maxLength: 7
          },
          {
            name: 'NCPIN',
            label: 'NCPIN',
            editable: false,
            maxLength: 10
          },
          {
            name: 'NCPIN_Ext',
            label: 'NCPIN Extension',
            editable: false,
            maxLength: 3
          },
          {
            name: 'BillingTypeCode',
            label: 'Billing Type Code',
            domain: new CodedValueDomain({
              codedValues: [
                {
                  name: 'Abatement',
                  code: 'AB'
                },
                {
                  name: 'Assessment',
                  code: 'AS'
                },
                {
                  name: 'Joint Venture',
                  code: 'JV'
                },
                {
                  name: 'Tap Fee',
                  code: 'TF'
                },
                {
                  name: 'Stormwater',
                  code: 'SW'
                }
              ]
            }),
            editable: false
          },
          {
            name: 'CategoryTypeCode',
            label: 'Category Type Code',
            domain: new CodedValueDomain({
              codedValues: [
                {
                  name: 'Water',
                  code: '01'
                },
                {
                  name: 'Sewer',
                  code: '02'
                },
                {
                  name: 'Sidewalk',
                  code: '04'
                },
                {
                  name: 'Abatement',
                  code: '05'
                },
                {
                  name: 'Paving',
                  code: '07'
                },
                {
                  name: 'TF-Water',
                  code: '31'
                },
                {
                  name: 'TF-Sewer',
                  code: '32'
                },
                {
                  name: 'TF - Water/Sewer',
                  code: '33'
                },
                {
                  name: 'TF - Contract Fee in Lieu',
                  code: '34'
                },
                {
                  name: 'Public Nuisance',
                  code: '51'
                },
                {
                  name: 'Demolition',
                  code: '52'
                },
                {
                  name: 'Asbestos Testing',
                  code: '53'
                },
                {
                  name: 'Visual Obstruction',
                  code: '54'
                },
                {
                  name: 'Multiple Flagged',
                  code: '99'
                }]
            }),
            editable: false
          },
          {
            name: 'RollNum',
            label: 'Roll Number',
            editable: false,
            maxLength:9
          },
          {
            name: 'RollNumInOut',
            label: 'Roll Number In Out',
            editable: false,
            maxLength:1,
            domain: new CodedValueDomain({
              codedValues: [
                {
                  name: "Inside City Limits",
                  code: "A"
                },
                {
                  name: "Outside City Limits",
                  code: ""
                }
              ]})
          },
          {
            name: 'RollLotNum',
            label: 'Roll Lot Number',
            editable: false,
            maxLength:3
          },
          {
            name: 'NoticeDate',
            label: 'NoticeDate',
            editable: true
          },
          {
            name: 'NoticeNum',
            label: 'NoticeNum',
            editable: true
          },
          {
            name: 'PrincipalBal',
            label: 'PrincipalBal',
            editable: true
          },
          {
            name: 'InterestFromDate',
            label: 'InterestFromDate',
            editable: true
          },
          {
            name: 'InterestThruDate',
            label: 'InterestThruDate',
            editable: true
          },
          {
            name: 'ProjInterestAmount',
            label: 'ProjInterestAmount',
            editable: true
          },
          {
            name: 'ProjDuePrincipal',
            label: 'ProjDuePrincipal',
            editable: true
          },
          {
            name: 'PrincipalPastDue',
            label: 'PrincipalPastDue',
            editable: true
          },
          {
            name: 'TotalDue',
            label: 'TotalDue',
            editable: true
          },
          {
            name: 'NumberOfDays',
            label: 'NumberOfDays',
            editable: true
          },
          {
            name: 'InstallmentAmount',
            label: 'InstallmentAmount',
            editable: true
          },
          {
            name: 'PayoffAmount',
            label: 'PayoffAmount',
            editable: true
          },
          {
            name: 'NoticeYear',
            label: 'NoticeYear',
            editable: true,
            maxLength: 4
          }]
        });
      
        this.billSentToFormGroup = new FieldGroupConfig({
          label: "Bill Sent To",
          description: 'Billee information',
          fieldConfig: [
            {
              name: 'BillSentToName1',
              label: 'BillSentToName1',
              editable: true
            },
            {
              name: 'BillSentToName2',
              label: 'BillSentToName2',
              editable: true
            },
            {
              name: 'BillSentToAddr1',
              label: 'BillSentToAddr1',
              editable: true
            },
            {
              name: 'BillSentToAddr2',
              label: 'BillSentToAddr2',
              editable: true
            },
            {
              name: 'BillSentToAddr3',
              label: 'BillSentToAddr3',
              editable: true
            },
            {
              name: 'BillSentToZipCode',
              label: 'BillSentToZipCode',
              editable: true
            },
            {
              name: 'BillSentToZipPlus',
              label: 'BillSentToZipPlus',
              editable: true
            }
          ]
        });
        this.billSiteAddressFormGroup = new FieldGroupConfig({
          label: "Bill Site Address",
          description: 'Bill site address information',
          fieldConfig: [
            {
              name: 'SiteStreetNum',
              label: 'SiteStreetNum',
              editable: true
            },
            {
              name: 'SiteStreetSuite',
              label: 'SiteStreetSuite',
              editable: true
            },
            {
              name: 'SiteStreetName',
              label: 'SiteStreetName',
              editable: true
            },
            {
              name: 'SiteStreetType',
              label: 'SiteStreetType',
              editable: true
            },
            {
              name: 'SiteStreetDirPre',
              label: 'SiteStreetDirPre',
              editable: true
            },
            {
              name: 'SiteStreetDirSuf',
              label: 'SiteStreetDirSuf',
              editable: true
            },
            {
              name: 'SiteStreetCity',
              label: 'SiteStreetCity',
              editable: true
            },
            {
              name: 'SiteStreetState',
              label: 'SiteStreetState',
              editable: true
            },
            {
              name: 'SiteStreetZip',
              label: 'SiteStreetZip',
              editable: true
            },
            {
              name: 'SiteStreetCounty',
              label: 'SiteStreetCounty',
              editable: true
            }
          ]
        });
        this.communicationFormGroup = new FieldGroupConfig({
          label: "Communication",
          description: 'Communication information',
          fieldConfig: [
            {
              name: 'AccountID',
              label: 'Billing Account ID',
              editable: true
            },
            {
              name: 'CommDate',
              label: 'Communication Date',
              editable: true
            },
            {
              name: 'CommTypeCode',
              label: 'Communication Type Code',
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: 'Annexation Advertisement',
                    code: 'AA'
                  },
                  {
                    name: 'Abatement Advertisement',
                    code: 'AB'
                  },
                  {
                    name: 'Assessment Advertisement',
                    code: 'AD'
                  },
                  {
                    name: 'ASMT Installment 1st',
                    code: 'AI1'
                  },
                  {
                    name: 'ASMT Installment 2nd',
                    code: 'AI2'
                  },
                  {
                    name: 'ASMT Installment 3rd',
                    code: 'AI3'
                  },
                  {
                    name: 'Annexation Letter',
                    code: 'AX'
                  },
                  {
                    name: 'Confirming Abate Letter',
                    code: 'CA'
                  },
                  {
                    name: 'Abatement Final Letter',
                    code: 'CF'
                  },
                  {
                    name: 'Confirming ASMT Letter',
                    code: 'CL'
                  },
                  {
                    name: 'Deferred Tap Fee Letter',
                    code: 'CL2'
                  },
                  {
                    name: 'Ownership Change',
                    code: 'OC'
                  },
                  {
                    name: 'TF Installment 1st',
                    code: 'TI1'
                  },
                  {
                    name: 'TF Installment 2nd',
                    code: 'TI2'
                  },
                  {
                    name: 'TF Installment 3rd',
                    code: 'TI3'
                  }
                ]
              }),
              editable: true
            },
            {
              name: 'CommCompletedDate',
              label: 'Communication Completed Date',
              editable: true
            },
            {
              name: 'CommRtrnRcptRcvdDate',
              label: 'Communication Return Receipt Received Date',
              editable: true
            }]
        });
        this.commSentToFormGroup = new FieldGroupConfig({
          label: "Communication Sent To",
          description: 'Communication sent to information',
          fieldConfig: [
            {
              name: 'SentToName1',
              label: 'Sent To Name 1',
              editable: true,
              maxLength: 35
            },
            {
              name: 'SentToName2',
              label: 'Sent To Name 2',
              editable: true,
              maxLength: 35
            },
            {
              name: 'SentToAddr1',
              label: 'Sent To Address 1',
              editable: true,
              maxLength: 35
            },
            {
              name: 'SentToAddr2',
              label: 'Sent To Address 2',
              editable: true,
              maxLength: 35
            },
            {
              name: 'SentToAddr3',
              label: 'Sent To Address 3',
              editable: true,
              maxLength: 35
            },
            {
              name: 'SentToZipCode',
              label: 'Sent To Zip Code',
              editable: true,
              maxLength: 5
            },
            {
              name: 'SentToZipPlus',
              label: 'Sent To Zip Plus',
              editable: true,
              maxLength: 4
            }
          ]
        });
        this.paymentFormGroup = new FieldGroupConfig({
          label: "Payments",
          description: 'Payment information',
          fieldConfig: [
            {
              name: "AccountID",
              label: "Billing Account ID",
              editable: false
            },
            {
              name: "TransactionTypeCode",
              required: true,
              label: "Transaction Type Codes",
              domain:
                new CodedValueDomain({
                  codedValues: [
                    {
                      name: "Principal adjustment",
                      code: "ADM"
                    },
                    {
                      name: "Advanced Payment",
                      code: "APT"
                    },
                    {
                      name: "City owned adjustment",
                      code: "CIT"
                    },
                    {
                      name: "Paid In Permits",
                      code: "PIP"
                    },
                    {
                      name: "Payment",
                      code: "PMT"
                    },
                    {
                      name: "Payment - Pending Account",
                      code: "PNP"
                    },
                    {
                      name: "Refund",
                      code: "REF"
                    },
                    {
                      name: "Reversal",
                      code: "REV"
                    },
                    {
                      name: "Waived",
                      code: "WAV"
                    },
                    {
                      name: "Write off",
                      code: "WRO"
                    }
                  ]
                }),
              editable: true
            },
            {
              name: "PaymentDate",
              label: "PaymentDate",
              editable: true,
              required: true
            },
            {
              name: "PaymentClassCode",
              label: "Payment Class Code",
              editable: true
            },
            {
              name: "PaymentAmount",
              label: "Payment Amount",
              editable: true,
              required: true
            },
            {
              name: "PrincipalAmount",
              label: "Principal Amount",
              editable: true,
              required: true
            },
            {
              name: "InterestAmount",
              label: "Interest Amount",
              editable: true,
              required: true
            },                        
            {
              name: "PaymentReceiptNumber",
              label: "Payment Receipt Number",
              editable: true,
              maxLength: 8,
              required: false
            },
            {
              name: "PaymentPostingDate",
              label: "Payment Posting Date",
              editable: true,
              required: false
            },
            {
              name: "PaymentInterestPaidThruDate",
              label: "Payment Interest Paid Thru Date",
              editable: true,
              required: false
            },
            {
              name: "PaymentSource",
              label: "Payment Source",
              editable: true,
              maxLength: 3
            },
            {
              name: "PaymentMethod",
              label: "Payment Method",
              editable: true,
              maxLength: 3
            },
            {
              name: "PaymentJournalVoucherNum",
              label: "Payment Journal Voucher Number",
              editable: true,
              maxLength: 8
            },
            {
              name: "PaymentDescription",
              label: "Payment Description",
              editable: true,
              maxLength: 25
            },
            {
              name: "PaymentReversedFlag",
              label: "Payment Reversed Flag",
              editable: true,
              maxLength: 1,
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })   
            },
            {
              name: "PaymentHoldingFlag",
              label: "Payment Holding Flag",
              editable: true,
              maxLength: 1,
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })   
            },
            {
              name: "PaymentTransactionNum",
              label: "PaymentTransactionNum",
              editable: true
            },
            {
              name: "PaymentPrepayTransferFlag",
              label: "Payment Prepay Transfer Flag",
              editable: true,
              maxLength: 1,
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Yes",
                    code: "Y"
                  },
                  {
                    name: "No",
                    code: "N"
                  }
                ]
              })   
            },
            {
              name: "BillingTypeCode",
              label: "Billing Type Code",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Abatement",
                    code: "AB"
                  },
                  {
                    name: "Assessment",
                    code: "AS"
                  },
                  {
                    name: "Joint Venture",
                    code: "JV"
                  },
                  {
                    name: "Tap Fee",
                    code: "TF"
                  },
                  {
                    name: "Stormwater",
                    code: "SW"
                  }
                ]
              }),
              editable: false
            },
            {
              name: "CategoryTypeCode",
              label: "Category Type Code",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Water",
                    code: "01"
                  },
                  {
                    name: "Sewer",
                    code: "02"
                  },
                  {
                    name: "Sidewalk",
                    code: "04"
                  },
                  {
                    name: "Abatement",
                    code: "05"
                  },
                  {
                    name: "Paving",
                    code: "07"
                  },
                  {
                    name: "TF-Water",
                    code: "31"
                  },
                  {
                    name: "TF-Sewer",
                    code: "32"
                  },
                  {
                    name: "TF - Water/Sewer",
                    code: "33"
                  },
                  {
                    name: "TF - Contract Fee in Lieu",
                    code: "34"
                  },
                  {
                    name: "Public Nuisance",
                    code: "51"
                  },
                  {
                    name: "Demolition",
                    code: "52"
                  },
                  {
                    name: "Asbestos Testing",
                    code: "53"
                  },
                  {
                    name: "Visual Obstruction",
                    code: "54"
                  },
                  {
                    name: "Multiple Flagged",
                    code: "99"
                  }
                ]
              }),
              editable: false
            },
            {
              name: "StatusCode",
              label: "Status Code",
              domain: new CodedValueDomain({
                codedValues: [
                  {
                    name: "Pending",
                    code: "1"
                  },
                  {
                    name: "Active",
                    code: "2"
                  },
                  {
                    name: "Paid",
                    code: "3"
                  },
                  {
                    name: "Delinquent",
                    code: "4"
                  },
                  {
                    name: "Waived",
                    code: "5"
                  },
                  {
                    name: "Inactive",
                    code: "6"
                  },
                  {
                    name: "Write Off",
                    code: "7"
                  },
                  {
                    name: "Flagged",
                    code: "8"
                  }
                ]
              }),
              editable: true
            },
            {
              name: "CashieringTransactionNum",
              label: "Cashiering Transaction Number",
              editable: true,
              maxLength: 6
            },
            {
              name: "CashieringUserID",
              label: "Cashiering User ID",
              editable: true,
              maxLength: 20
            },
            {
              name: "CashieringLocationCode",
              label: "Cashiering Location Code",
              editable: true,
              maxLength: 4
            },
            {
              name: "CashieringWorkstationNum",
              label: "Cashiering Workstation Number",
              editable: true,
              maxLength: 10
            }
          ]
        });
        this.commentsFormGroup = new FieldGroupConfig({
        label: "Comments",
        description: 'Comment information',
        fieldConfig: [
          {
            name: "AccountID",
            label: "Billing Account ID",
            editable: false
          },
          {
            name: "CommentCode",
            label: "Comment Code",
            editable: true
          },          
          {
            name: "CommentDate",
            label: "Comment Date",
            editable: true
          },
          {
            name: "Comment",
            label: "Comment",
            editable: true
          }
        ]
      });  
      this.contractFormGroup = new FieldGroupConfig({
        label: "Contracts",
        description: '',
        fieldConfig: [
          {
            name: "ContractNum",
            label: "Contract Number",
            editable: true,
            maxLength:9
          },
          {
            name: "ContractDate",
            label: "Contract Date",
            editable: true
          },     
          {
            name: "ContractDescription",
            label: "Contract Description",
            editable: true,
            maxLength: 100
          },     
          {
            name: "ContractDeedBook",
            label: "Deed Book",
            editable: true,
            maxLength: 4
          },     
          {
            name: "ContractDeedPage",
            label: "Deed Page",
            editable: true,
            maxLength: 4
          }    
        ]
      });      
      this.rollFormGroup = new FieldGroupConfig({
        label: "Rolls",
        description: '',
        fieldConfig: [
          {
            name: "RollNum",
            label: "Roll Number",
            editable: true,
            maxLength: 9
          },
          {
            name: "RollNumInOut",
            label: "Roll Number In/Out",
            editable: true,
            domain: new CodedValueDomain({
              codedValues: [
                {
                  name: "Inside City Limits",
                  code: "A"
                },
                {
                  name: "Outside City Limits",
                  code: ""
                }
              ]})            
          },     
          {
            name: "ConfResNum",
            label: "Confirming Resolution Number",
            editable: true,
            maxLength:9
          },     
          {
            name: "ConfResDate",
            label: "Confirming Resolution Date",
            editable: true
          },     
          {
            name: "DirResNum",
            label: "Directing Resolution Number",
            editable: true,
            maxLength: 9
          },     
          {
            name: "DirResDate",
            label: "Directing Resolution Date",
            editable: true
          },     
        ]
      });                    
      this.confResFormGroup = new FieldGroupConfig({
        label: "Confirming Resolution",
        description: '',
        fieldConfig: [
          {
            name: "ConfResNum",
            label: "Resolution Number",
            editable: true,
            maxLength:9
          },
          {
            name: "ConfResDate",
            label: "Resolution Date",
            editable: true
          },     
          {
            name: "ConfResDesc",
            label: "Resolution Description",
            editable: true,
            maxLength: 100
          }
        ]
      });    
      
      this.dirResFormGroup = new FieldGroupConfig({
        label: "Directing Resolution",
        description: '',
        fieldConfig: [
          {
            name: "DirResNum",
            label: "Resolution Number",
            editable: true,
            maxLength: 9
          },
          {
            name: "DirResDate",
            label: "Resolution Date",
            editable: true
          },     
          {
            name: "ConditionCode",
            label: "Condition Code",
            editable: true,
            maxLength: 2
          }
        ]
      });  
      this.corrResFormGroup = new FieldGroupConfig({
        label: "Correcting Resolution",
        description: '',
        fieldConfig: [
          {
            name: "CorrResNum",
            label: "Resolution Number",
            editable: true,
            maxLength: 9
          },
          {
            name: "CorrResDate",
            label: "Resolution Date",
            editable: true
          },     
          {
            name: "CorrResDesc",
            label: "Description",
            editable: true,
            maxLength: 100
          },
          {
            name: "ConfResNum",
            label: "Confirming Resolution Number",
            editable: true,
            maxLength:9
          },
          {
            name: "ConfResDate",
            label: "Confirming Resolution Date",
            editable: true
          },           
        ]
      });             
        this.altBillingFormGroup = new FieldGroupConfig({
          label: "Alternate Billing",
          description: "Alternate Billing information",
          fieldConfig: [
            {
              editable: true,
              label: 'Alternate Bill To Name 1',
              name: "AltBillToName1",
              maxLength: 35
            },
            {
              editable: true,
              label: 'Alternate Bill To Name 2',
              name: "AltBillToName2",
              maxLength: 35
            },
            {
              editable: true,
              label: 'Alternate Bill To Address 1',
              name: "AltBillToAddr1",
              maxLength: 35
            },
            {
              editable: true,
              label: 'Alternate Bill To Address 2',
              name: "AltBillToAddr2",
              maxLength: 35
            },
            {
              editable: true,
              label: 'Alternate Bill To Address 3',
              name: "AltBillToAddr3",
              maxLength: 35
            },
            {
              editable: true,
              label: 'Alternate Bill To Zip Code',
              name: "AltBillToZipCode",
              maxLength: 5
            },
            {
              editable: true,
              label: 'Alternate Bill To Zip Plus',
              name: "AltBillToZipPlus",
              maxLength: 4
            }
          ]
        });
      }
    )
  }
}
