import { Injectable } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
@Injectable({
  providedIn: 'root'
})
export class FormgroupsService {
  assessmentFormGroup: esri.GroupElement;
  abatementFormGroup: esri.GroupElement;
  tapFeeFormGroup: esri.GroupElement;
  assessmentBillingFormGroup: esri.GroupElement;
  abatementBillingFormGroup: esri.GroupElement;
  tapFeeBillingFormGroup: esri.GroupElement;
  billingDataFormGroup: esri.GroupElement;
  billSentToFormGroup: esri.GroupElement;
  billSiteAddressFormGroup: esri.GroupElement;
  communicationFormGroup: esri.GroupElement;
  commSentToFormGroup: esri.GroupElement;
  paymentFormGroup: esri.GroupElement;
  commentsFormGroup: esri.GroupElement;
  contractFormGroup: esri.GroupElement;
  rollFormGroup: esri.GroupElement;
  confResFormGroup: esri.GroupElement;
  dirResFormGroup: esri.GroupElement;
  corrResFormGroup: esri.GroupElement;
  altBillingFormGroup: esri.GroupElement;
  constructor() {
    loadModules(['esri/form/elements/GroupElement', 'esri/layers/support/CodedValueDomain']).then(
      ([GroupElement, CodedValueDomain]) => {
        this.assessmentFormGroup = new GroupElement({
          label: "Assessment",
          description: "Assessment information",
          elements: [
            {
              type: 'field',
              editable: false,
              label: 'Account ID',
              fieldName: "AccountID"
            },
            {
              type: 'field',
              editable: false,
              label: 'Account Date',
              fieldName: "AccountDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: false,
              label: 'Real Estate ID',
              fieldName: "REID",
              maxLength: 7
            },
            {
              type: 'field',
              editable: false,
              label: 'Complete Subaddress ID',
              fieldName: "CSAID",
            },
            {
              type: 'field',
              editable: false,
              label: 'PIN #',
              fieldName: "NCPIN",
              maxLength: 10
            },
            {
              type: 'field',
              editable: true,
              label: 'Billing Type Code',
              fieldName: "BillingTypeCode",
              requiredExpression: 'required', 
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
              type: 'field',
              editable: true,
              label: 'Category Type Code',
              fieldName: "CategoryTypeCode",
              requiredExpression: 'required', 
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
              type: 'field',
              editable: false,
              label: 'Roll #',
              fieldName: "RollNum",
              required: false,
              maxLength: 9             
            },
            {
              type: 'field',
              editable: true,
              label: 'Roll Lot',
              fieldName: "RollLotNum",
              required: false,
              maxLength: 3              
            },            
            {
              type: 'field',
              editable: true,
              label: 'Roll # In/Out',
              fieldName: "RollNumInOut",
              requiredExpression: 'required',
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
              label: 'Directing Resolution Number',
              
              type: 'field',fieldName: "DirResNum",
              editable: true,
              requiredExpression: 'required'           
            },
            {
              label: 'Directing Resolution Date',
              
              type: 'field',fieldName: "DirResDate",
              editable: true,
              requiredExpression: 'required',
              input: { type: "datetime-picker"}        
            },
            {
              type: 'field',
              editable: false,
              label: 'Confirming Resolution Number',
              fieldName: "ConfResNum",
              maxLength:9
            },
            {
              type: 'field',
              editable: false,
              label: 'Confirming Resolution Date',
              fieldName: "ConfResDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: false,
              label: 'Advertise Date',
              fieldName: "AdvertiseDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: true,
              label: 'Advertise Fee',
              fieldName: "AdvertiseFee",
            },              
            {
              type: 'field',
              editable: true,
              label: 'Assessment Fee ID',
              fieldName: "AssmntFeeID",
            }
          ]
        });
        this.abatementFormGroup = new GroupElement({
          label: "Abatements",
          description: "Abatement information",
          elements: [
            {
              type: 'field',
              editable: false,
              label: 'Account ID',
              fieldName: "AccountID"
            },
            {
              type: 'field',
              editable: false,
              label: 'Account Date',
              fieldName: "AccountDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: false,
              label: 'Real Estate ID',
              fieldName: "REID",
              maxLength: 7
            },
            {
              type: 'field',
              editable: false,
              label: 'Complete Subaddress ID',
              fieldName: "CSAID",
            },
            {
              type: 'field',
              editable: false,
              label: 'PIN #',
              fieldName: "NCPIN",
              maxLength: 10
            },
            {
              type: 'field',
              editable: true,
              requiredExpression: 'required',
              label: 'Billing Type Code',
              fieldName: "BillingTypeCode",
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
              type: 'field',
              editable: true,
              requiredExpression: 'required',
              label: 'Category Type Code',
              fieldName: "CategoryTypeCode",
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
              type: 'field',
              editable: true,
              label: 'Adjustment Amount',
              fieldName: "ABAdjustmentAmount",
            },
            {
              type: 'field',
              editable: true,
              label: 'Council Date',
              fieldName: "ABCouncilDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: false,
              label: 'Confirming Resolution Number',
              fieldName: "ConfResNum",
              maxLength:9
            },
            {
              type: 'field',
              editable: false,
              label: 'Confirming Resolution Date',
              fieldName: "ConfResDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: false,
              label: 'Advertise Date',
              fieldName: "AdvertiseDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: true,
              label: 'Advertise Fee',
              fieldName: "AdvertiseFee",
            },
            {
              type: 'field',
              editable: true,
              label: 'Housing Reference',
              fieldName: "ABHousingRef",
              maxLength:9
            },
            {
              type: 'field',
              editable: true,
              requiredExpression: 'required',
              label: 'Housing Letter 1 Sent On',
              fieldName: "ABHousingLetter1",
            },
            {
              type: 'field',
              editable: true,
              label: 'Housing Letter 2 Sent On',
              fieldName: "ABHousingLetter2",
            }
          ]
        });
        this.tapFeeFormGroup = new GroupElement({
          label: "Tap Fees",
          description: "Tap fee information",
          elements: [
            {
              type: 'field',
              editable: false,
              label: 'Account ID',
              fieldName: "AccountID"
            },
            {
              type: 'field',
              editable: false,
              label: 'Account Date',
              fieldName: "AccountDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: false,
              label: 'Real Estate ID',
              fieldName: "REID",
              maxLength: 7
            },
            {
              type: 'field',
              editable: false,
              label: 'Complete Subaddress ID',
              fieldName: "CSAID",
            },
            {
              type: 'field',
              editable: false,
              label: 'PIN #',
              fieldName: "NCPIN",
              maxLength: 10
            },
            {
              type: 'field',
              editable: true,
              requiredExpression: 'required',
              label: 'Billing Type Code',
              fieldName: "BillingTypeCode",
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
              type: 'field',
              editable: true,
              label: 'Category Type Code',
              fieldName: "CategoryTypeCode",
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
              type: 'field',
              editable: false,
              requiredExpression: 'required',
              label: 'Contract #',
              fieldName: "ContractNum",
              maxLength:9
            },
            {
              type: 'field',
              editable: false,
              requiredExpression: 'required',
              label: 'Contract Date',
              fieldName: "ContractDate",
              input: { type: "datetime-picker"}
            }
          ]
        });
        this.assessmentBillingFormGroup = new GroupElement({
          label: "Billing",
          description: "Billing information",
          elements: [
            {
              type: 'field',
              editable: true,
              label: 'Number of Years',
              fieldName: "NumYears",
              required: false
            },
            {
              type: 'field',
              editable: true,
              label: 'Interest Rate',
              fieldName: "InterestRate",
              required: false
            },
            {
              type: 'field',
              editable: true,
              label: 'Status',
              requiredExpression: 'required',
              fieldName: "StatusCode",

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
              type: 'field',
              editable: true,
              label: 'Action Type',
              fieldName: "ActionTypeCode",
              domain: new CodedValueDomain({
                codedValues: [
                {
                name: "No Action",
                code: 0
                },
                {
                name: "Heirs/Trusts",
                code: 1
                },
                {
                name: "Uncollectible-Age",
                code: 2
                },
                {
                name: "See Cheri",
                code: 3
                },
                {
                name: "Row Abatement",
                code: 4
                },
                {
                name: "Held In Abeyance",
                code: 5
                },
                {
                name: "Garnishment",
                code: 6
                },
                {
                name: "Bankruptcy",
                code: 7
                },
                {
                name: "Payment Plan",
                code: 8
                },
                {
                name: "NCDSOP",
                code: 9
                },
                {
                name: "Stormwater",
                code: 10
                }
                ]
              })    
            },
            {
              type: 'field',
              editable: false,
              label: 'Total Lien Amount',
              fieldName: "TotalLienAmount",
              required: false
            },
            {
              type: 'field',
              editable: false,
              required: false,
              label: 'Principal Balance',
              fieldName: "PrincipalBalance",
            },
            {
              type: 'field',
              editable: true,
              label: 'Principal Past Due',
              fieldName: "PrincipalPastDue",
            },
            {
              type: 'field',
              editable: false,
              label: 'Principal Pre-paid',
              fieldName: "PrincipalPrePaid",
            },
            {
              type: 'field',
              editable: false,
              required: false,
              label: 'Interest Paid Thru',
              fieldName: "InterestPaidThruDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: false,
              required: false,
              label: 'Interest Start Date',
              fieldName: "InterestStartDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: true,
              required: false,
              label: 'Installment Amount',
              fieldName: "InstallmentAmount",
            },
            {
              type: 'field',
              editable: true,
              label: 'Number of Installments Made',
              fieldName: "NumInstallmentsMade",
            },
            {
              type: 'field',
              editable: true,
              label: 'Payment Plan',
              fieldName: "PaymentPlanFlag",
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
              type: 'field',
              editable: true,
              label: 'Payment Plan Description',
              fieldName: "PaymentPlanDesc",
              maxLength: 35,
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"
            },
            {
              type: 'field',
              editable: true,
              label: 'Payment Plan Date',
              fieldName: "PaymentPlanDate",
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: true,
              label: 'Bankrupt',
              fieldName: "BankruptFlag",
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
              }),
              visibilityExpression: "($feature.StatusCode != '1')"
              
            },

            {
              type: 'field',
              editable: true,
              label: 'Estate',
              fieldName: "EstateFlag",
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
              type: 'field',
              editable: true,
              label: 'Current Installment Due',
              fieldName: "CurrentInstallmentDue",
            },
            {
              type: 'field',
              editable: false,
              label: 'Last Payment Date',
              fieldName: "LastPaymentDate",
              input: { type: "datetime-picker"}
            }
          ]
        });
        this.abatementBillingFormGroup = new GroupElement({
          label: "Billing",
          description: "Billing information",
          elements: [
            {
              type: 'field',
              editable: true,
              label: 'Number of Years',
              fieldName: "NumYears",
              required: false
            },
            {
              type: 'field',
              editable: true,
              label: 'Interest Rate',
              fieldName: "InterestRate",
              required: false
            },
            {
              type: 'field',
              editable: true,
              label: 'Status',
              requiredExpression: 'required',
              fieldName: "StatusCode",

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
              type: 'field',
              editable: true,
              label: 'Action Type',
              fieldName: "ActionTypeCode",
              domain: new CodedValueDomain({
                codedValues: [
                {
                name: "No Action",
                code: 0
                },
                {
                name: "Heirs/Trusts",
                code: 1
                },
                {
                name: "Uncollectible-Age",
                code: 2
                },
                {
                name: "See Cheri",
                code: 3
                },
                {
                name: "Row Abatement",
                code: 4
                },
                {
                name: "Held In Abeyance",
                code: 5
                },
                {
                name: "Garnishment",
                code: 6
                },
                {
                name: "Bankruptcy",
                code: 7
                },
                {
                name: "Payment Plan",
                code: 8
                },
                {
                name: "NCDSOP",
                code: 9
                },
                {
                name: "Stormwater",
                code: 10
                }
                ]   
              })     
            },
            {
              type: 'field',
              editable: true,
              label: 'Total Lien Amount',
              fieldName: "TotalLienAmount",
              requiredExpression: 'required'
            },
            {
              type: 'field',
              editable: false,
              requiredExpression: 'required',
              label: 'Principal Balance',
              fieldName: "PrincipalBalance",
            },
            {
              type: 'field',
              editable: true,
              label: 'Principal Past Due',
              fieldName: "PrincipalPastDue",
            },
            {
              type: 'field',
              editable: false,
              label: 'Principal Pre-paid',
              fieldName: "PrincipalPrePaid",
            },
            {
              type: 'field',
              editable: false,
              required: false,
              label: 'Interest Paid Thru',
              fieldName: "InterestPaidThruDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: false,
              required: false,
              label: 'Interest Start Date',
              fieldName: "InterestStartDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: true,
              required: false,
              label: 'Installment Amount',
              fieldName: "InstallmentAmount",
            },
            {
              type: 'field',
              editable: true,
              label: 'Number of Installments Made',
              fieldName: "NumInstallmentsMade",
            },
            {
              type: 'field',
              editable: true,
              label: 'Payment Plan',
              fieldName: "PaymentPlanFlag",
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
              type: 'field',
              editable: true,
              label: 'Payment Plan Description',
              fieldName: "PaymentPlanDesc",
              maxLength: 35,
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"

            },
            {
              type: 'field',
              editable: true,
              label: 'Payment Plan Date',
              fieldName: "PaymentPlanDate",
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')",
              input: { type: "datetime-picker"}

            },
            {
              type: 'field',
              editable: true,
              label: 'Bankrupt',
              fieldName: "BankruptFlag",
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
              }),
              visibilityExpression: "($feature.StatusCode != '1')"                        
            },

            {
              type: 'field',
              editable: true,
              label: 'Estate',
              fieldName: "EstateFlag",
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
              type: 'field',
              editable: true,
              label: 'Current Installment Due',
              fieldName: "CurrentInstallmentDue",
            },
            {
              type: 'field',
              editable: false,
              label: 'Last Payment Date',
              fieldName: "LastPaymentDate",
              input: { type: "datetime-picker"}
            }
          ]
        });
        this.tapFeeBillingFormGroup = new GroupElement({
          label: "Billing",
          description: "Billing information",
          elements: [
            {
              type: 'field',
              editable: true,
              label: 'Number of Years',
              fieldName: "NumYears",
              requiredExpression: 'required'
            },
            {
              type: 'field',
              editable: true,
              label: 'Interest Rate',
              fieldName: "InterestRate",
              requiredExpression: 'required'
            },
            {
              type: 'field',
              editable: true,
              label: 'Status',
              requiredExpression: 'required',
              fieldName: "StatusCode",

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
              type: 'field',
              editable: true,
              label: 'Action Type',
              fieldName: "ActionTypeCode",
              domain: new CodedValueDomain({
                codedValues: [
                {
                name: "No Action",
                code: 0
                },
                {
                name: "Heirs/Trusts",
                code: 1
                },
                {
                name: "Uncollectible-Age",
                code: 2
                },
                {
                name: "See Cheri",
                code: 3
                },
                {
                name: "Row Abatement",
                code: 4
                },
                {
                name: "Held In Abeyance",
                code: 5
                },
                {
                name: "Garnishment",
                code: 6
                },
                {
                name: "Bankruptcy",
                code: 7
                },
                {
                name: "Payment Plan",
                code: 8
                },
                {
                name: "NCDSOP",
                code: 9
                },
                {
                name: "Stormwater",
                code: 10
                }
                ]  
              })     
            },
            {
              type: 'field',
              editable: true,
              label: 'Total Lien Amount',
              fieldName: "TotalLienAmount",
              requiredExpression: 'required'
            },
            {
              type: 'field',
              editable: false,
              requiredExpression: 'required',
              label: 'Principal Balance',
              fieldName: "PrincipalBalance",
            },
            {
              type: 'field',
              editable: true,
              label: 'Principal Past Due',
              fieldName: "PrincipalPastDue",
            },
            {
              type: 'field',
              editable: true,
              label: 'Principal Pre-paid',
              fieldName: "PrincipalPrePaid",
            },
            {
              type: 'field',
              editable: false,
              required: false,
              label: 'Interest Paid Thru',
              fieldName: "InterestPaidThruDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: false,
              required: false,
              label: 'Interest Start Date',
              fieldName: "InterestStartDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              editable: true,
              requiredExpression: 'required',
              label: 'Installment Amount',
              fieldName: "InstallmentAmount",
            },
            {
              type: 'field',
              editable: true,
              label: 'Number of Installments Made',
              fieldName: "NumInstallmentsMade",
            },
            {
              type: 'field',
              editable: true,
              label: 'Payment Plan',
              fieldName: "PaymentPlanFlag",
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
              type: 'field',
              editable: true,
              label: 'Payment Plan Description',
              fieldName: "PaymentPlanDesc",
              maxLength: 35,
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"

            },
            {
              type: 'field',
              editable: true,
              label: 'Payment Plan Date',
              fieldName: "PaymentPlanDate",
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')",
              input: { type: "datetime-picker"}

            },
            {
              type: 'field',
              editable: true,
              label: 'Bankrupt',
              fieldName: "BankruptFlag",
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
              }),
              visibilityExpression: "($feature.StatusCode != '1')"          
            },
            {
              type: 'field',
              editable: true,
              label: 'Estate',
              fieldName: "EstateFlag",
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
              type: 'field',
              editable: true,
              label: 'Current Installment Due',
              fieldName: "CurrentInstallmentDue",
            },
            {
              type: 'field',
              editable: false,
              label: 'Last Payment Date',
              fieldName: "LastPaymentDate",
              input: { type: "datetime-picker"}
            }
          ]
        });                
        this.billingDataFormGroup = new GroupElement({
          label: "Billing Data",
          description: 'Billing information',
          elements: [{
            fieldName: 'AccountID',
            
            type: 'field',label: 'Billing Account ID',
            editable: false
          },
          {
            fieldName: 'REID',
            
            type: 'field',label: 'Real Estate ID',
            editable: false,
            maxLength: 7
          },
          {
            fieldName: 'NCPIN',
            
            type: 'field',label: 'NCPIN',
            editable: false,
            maxLength: 10
          },
          {
            fieldName: 'NCPIN_Ext',
            
            type: 'field',label: 'NCPIN Extension',
            editable: false,
            maxLength: 3
          },
          {
            fieldName: 'BillingTypeCode',
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
            
            }),type: 'field',
            editable: false
          },
          {
            fieldName: 'CategoryTypeCode',
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
            
             }),type: 'field', 
            editable: false
          },
          {
            fieldName: 'RollNum',
            
            type: 'field',label: 'Roll #',
            editable: false,
            maxLength:9
          },
          {
            fieldName: 'RollNumInOut',
            
            type: 'field',label: 'Roll Number In Out',
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
            fieldName: 'RollLotNum',
            
            type: 'field',label: 'Roll Lot Number',
            editable: false,
            maxLength:3
          },
          {
            fieldName: 'NoticeDate',
            
            type: 'field',label: 'NoticeDate',
            editable: true,
            input: { type: "datetime-picker"}
          },
          {
            fieldName: 'NoticeNum',
            
            type: 'field',label: 'NoticeNum',
            editable: true
          },
          {
            fieldName: 'PrincipalBal',
            
            type: 'field',label: 'PrincipalBal',
            editable: true
          },
          {
            fieldName: 'InterestFromDate',
            
            type: 'field',label: 'InterestFromDate',
            editable: true,
            input: { type: "datetime-picker"}
          },
          {
            fieldName: 'InterestThruDate',
            
            type: 'field',label: 'InterestThruDate',
            editable: true,
            input: { type: "datetime-picker"}
          },
          {
            fieldName: 'ProjInterestAmount',
            
            type: 'field',label: 'ProjInterestAmount',
            editable: true
          },
          {
            fieldName: 'ProjDuePrincipal',
            
            type: 'field',label: 'ProjDuePrincipal',
            editable: true
          },
          {
            fieldName: 'PrincipalPastDue',
            
            type: 'field',label: 'PrincipalPastDue',
            editable: true
          },
          {
            fieldName: 'TotalDue',
            
            type: 'field',label: 'TotalDue',
            editable: true
          },
          {
            fieldName: 'NumberOfDays',
            
            type: 'field',label: 'NumberOfDays',
            editable: true
          },
          {
            fieldName: 'InstallmentAmount',
            
            type: 'field',label: 'InstallmentAmount',
            editable: true
          },
          {
            fieldName: 'PayoffAmount',
            
            type: 'field',label: 'PayoffAmount',
            editable: true
          },
          {
            fieldName: 'NoticeYear',
            
            type: 'field',label: 'NoticeYear',
            editable: true,
            maxLength: 4
          }]
        });
      
        this.billSentToFormGroup = new GroupElement({
          label: "Bill Sent To",
          description: 'Billee information',
          elements: [
            {
              fieldName: 'BillSentToName1',
              
              type: 'field',label: 'BillSentToName1',
              editable: true
            },
            {
              fieldName: 'BillSentToName2',
              
              type: 'field',label: 'BillSentToName2',
              editable: true
            },
            {
              fieldName: 'BillSentToAddr1',
              
              type: 'field',label: 'BillSentToAddr1',
              editable: true
            },
            {
              fieldName: 'BillSentToAddr2',
              
              type: 'field',label: 'BillSentToAddr2',
              editable: true
            },
            {
              fieldName: 'BillSentToAddr3',
              
              type: 'field',label: 'BillSentToAddr3',
              editable: true
            },
            {
              fieldName: 'BillSentToZipCode',
              
              type: 'field',label: 'BillSentToZipCode',
              editable: true
            },
            {
              fieldName: 'BillSentToZipPlus',
              
              type: 'field',label: 'BillSentToZipPlus',
              editable: true
            }
          ]
        });
        this.billSiteAddressFormGroup = new GroupElement({
          label: "Bill Site Address",
          description: 'Bill site address information',
          elements: [
            {
              fieldName: 'SiteStreetNum',
              
              type: 'field',label: 'SiteStreetNum',
              editable: true
            },
            {
              fieldName: 'SiteStreetSuite',
              
              type: 'field',label: 'SiteStreetSuite',
              editable: true
            },
            {
              fieldName: 'SiteStreetName',
              
              type: 'field',label: 'SiteStreetName',
              editable: true
            },
            {
              fieldName: 'SiteStreetType',
              
              type: 'field',label: 'SiteStreetType',
              editable: true
            },
            {
              fieldName: 'SiteStreetDirPre',
              
              type: 'field',label: 'SiteStreetDirPre',
              editable: true
            },
            {
              fieldName: 'SiteStreetDirSuf',
              
              type: 'field',label: 'SiteStreetDirSuf',
              editable: true
            },
            {
              fieldName: 'SiteStreetCity',
              
              type: 'field',label: 'SiteStreetCity',
              editable: true
            },
            {
              fieldName: 'SiteStreetState',
              
              type: 'field',label: 'SiteStreetState',
              editable: true
            },
            {
              fieldName: 'SiteStreetZip',
              
              type: 'field',label: 'SiteStreetZip',
              editable: true
            },
            {
              fieldName: 'SiteStreetCounty',
              
              type: 'field',label: 'SiteStreetCounty',
              editable: true
            }
          ]
        });
        this.communicationFormGroup = new GroupElement({
          label: "Communication",
          description: 'Communication information',
          elements: [
            {
              fieldName: 'AccountID',
              
              type: 'field',label: 'Billing Account ID',
              editable: true
            },
            {
              fieldName: 'CommDate',
              
              type: 'field',label: 'Communication Date',
              editable: true,
              input: { type: "datetime-picker"}
            },
            {
              fieldName: 'CommTypeCode',
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
              
              }),type: 'field',
              editable: true
            },
            {
              fieldName: 'CommCompletedDate',
              
              type: 'field',label: 'Communication Completed Date',
              editable: true,
              input: { type: "datetime-picker"}
            },
            {
              fieldName: 'CommRtrnRcptRcvdDate',
              
              type: 'field',label: 'Communication Return Receipt Received Date',
              editable: true,
              input: { type: "datetime-picker"}
            }]
        });
        this.commSentToFormGroup = new GroupElement({
          label: "Communication Sent To",
          description: 'Communication sent to information',
          elements: [
            {
              fieldName: 'SentToName1',
              
              type: 'field',label: 'Sent To Name 1',
              editable: true,
              maxLength: 35
            },
            {
              fieldName: 'SentToName2',
              
              type: 'field',label: 'Sent To Name 2',
              editable: true,
              maxLength: 35
            },
            {
              fieldName: 'SentToAddr1',
              
              type: 'field',label: 'Sent To Address 1',
              editable: true,
              maxLength: 35
            },
            {
              fieldName: 'SentToAddr2',
              
              type: 'field',label: 'Sent To Address 2',
              editable: true,
              maxLength: 35
            },
            {
              fieldName: 'SentToAddr3',
              
              type: 'field',label: 'Sent To Address 3',
              editable: true,
              maxLength: 35
            },
            {
              fieldName: 'SentToZipCode',
              
              type: 'field',label: 'Sent To Zip Code',
              editable: true,
              maxLength: 5
            },
            {
              fieldName: 'SentToZipPlus',
              
              type: 'field',label: 'Sent To Zip Plus',
              editable: true,
              maxLength: 4
            }
          ]
        });
        this.paymentFormGroup = new GroupElement({
          label: "Payments",
          description: 'Payment information',
          elements: [
            {
              fieldName: "AccountID",
              type: 'field',
              label: "Billing Account ID",
              editable: false
            },
            {
              fieldName: "TransactionTypeCode",
              requiredExpression: 'required',
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
              
              })
              ,type: 'field',  
              editable: true
            },
            {
              fieldName: "PaymentDate",
              
              type: 'field',label: "PaymentDate",
              editable: true,
              requiredExpression: 'required',
              input: { type: "datetime-picker"}
            },
            {
              fieldName: "PaymentClassCode",
              
              type: 'field',label: "Payment Class Code",
              editable: true,
              domain: new CodedValueDomain({
                codedValues: [
                {
                name: "Principal",
                code: "0039"
                },
                {
                name: "Interest",
                code: "0040"
                },
                {
                name: "Principal - Advanced",
                code: "0100"
                },
                {
                name: "Principal - ADV Out",
                code: "0101"
                },
                {
                name: "Principal - Advanced",
                code: "0102"
                },
                {
                name: "Principal - ADV Out",
                code: "0103"
                },
                {
                name: "Principal - Advanced",
                code: "0104"
                },
                {
                name: "Principal - ADV Out",
                code: "0105"
                },
                {
                name: "Principal - Advanced",
                code: "0106"
                },
                {
                name: "Principal - ADV FL",
                code: "0107"
                },
                {
                name: "Principal - ADV FL",
                code: "0108"
                },
                {
                name: "Principal - ADV FL",
                code: "0109"
                },
                {
                name: "Principal - Adv ETJ",
                code: "0112"
                },
                {
                name: "Principal - Adv ETJ",
                code: "0113"
                },
                {
                name: "Principal - Adv ETJ",
                code: "0114"
                },
                {
                name: "Principal - Adv ETJ",
                code: "0115"
                },
                {
                name: "Principal - Adv ETJ",
                code: "0116"
                },
                {
                name: "Principal - Adv ETJ",
                code: "0117"
                },
                {
                name: "Principal - Adv ETJ",
                code: "0118"
                },
                {
                name: "Principal - Adv ETJ",
                code: "0119"
                },
                {
                name: "Principal",
                code: "0120"
                },
                {
                name: "Principal - Out",
                code: "0121"
                },
                {
                name: "Interest - ETJ",
                code: "0122"
                },
                {
                name: "Interest - Out",
                code: "0123"
                },
                {
                name: "Principal - ETJ",
                code: "0124"
                },
                {
                name: "Principal - Out",
                code: "0125"
                },
                {
                name: "Interest - ETJ",
                code: "0126"
                },
                {
                name: "Interest - Out",
                code: "0127"
                },
                {
                name: "Principal",
                code: "0339"
                },
                {
                name: "Interest",
                code: "0340"
                },
                {
                name: "Principal",
                code: "0439"
                },
                {
                name: "Interest",
                code: "0440"
                },
                {
                name: "Principal",
                code: "0539"
                },
                {
                name: "Interest",
                code: "0540"
                },
                {
                name: "Principal",
                code: "0739"
                },
                {
                name: "Interest",
                code: "0740"
                }
                ]
                })              
            },
            {
              fieldName: "PaymentAmount",
              
              type: 'field',label: "Payment Amount",
              editable: true,
              requiredExpression: 'required'
            },
            {
              fieldName: "PrincipalAmount",
              
              type: 'field',label: "Principal Amount",
              editable: true,
              requiredExpression: 'required'
            },
            {
              fieldName: "InterestAmount",
              
              type: 'field',label: "Interest Amount",
              editable: true,
              requiredExpression: 'required'
            },                        
            {
              fieldName: "PaymentReceiptNumber",
              
              type: 'field',label: "Payment Receipt Number",
              editable: true,
              maxLength: 8,
              requiredExpression: 'required'
            },
            {
              fieldName: "PaymentPostingDate",
              
              type: 'field',label: "Payment Posting Date",
              editable: true,
              required: false,
              input: { type: "datetime-picker"}
            },
            {
              fieldName: "PaymentInterestPaidThruDate",
              
              type: 'field',label: "Payment Interest Paid Thru Date",
              editable: false,
              required: false,
              input: { type: "datetime-picker"}
            },
            {
              fieldName: "PaymentSource",
              
              type: 'field',label: "Payment Source",
              editable: true,
              maxLength: 3
            },
            {
              fieldName: "PaymentMethod",
              
              type: 'field',label: "Payment Method",
              editable: true,
              maxLength: 3
            },
            {
              fieldName: "PaymentJournalVoucherNum",
              
              type: 'field',label: "Payment Journal Voucher Number",
              editable: true,
              maxLength: 8
            },
            {
              fieldName: "PaymentDescription",
              
              type: 'field',label: "Payment Description",
              editable: true,
              maxLength: 25
            },
            {
              fieldName: "PaymentReversedFlag",
              
              type: 'field',label: "Payment Reversed Flag",
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
              fieldName: "PaymentHoldingFlag",
              
              type: 'field',label: "Payment Holding Flag",
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
              fieldName: "PaymentTransactionNum",
              
              type: 'field',label: "PaymentTransactionNum",
              editable: false,
              description: "Set when payment submitted"
            },
            {
              fieldName: "PaymentPrepayTransferFlag",
              
              type: 'field',label: "Payment Prepay Transfer Flag",
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
              fieldName: "BillingTypeCode",
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
              
             }) ,type: 'field',
              editable: false
            },
            {
              fieldName: "CategoryTypeCode",
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
              
              }),type: 'field',
              editable: false
            },
            {
              fieldName: "StatusCode",
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
              type: 'field',
              editable: true
            },
            {
              fieldName: "CashieringTransactionNum",
              
              type: 'field',label: "Cashiering Transaction Number",
              editable: true,
              maxLength: 6
            },
            {
              fieldName: "CashieringUserID",
              
              type: 'field',label: "Cashiering User ID",
              editable: true,
              maxLength: 20
            },
            {
              fieldName: "CashieringLocationCode",
              
              type: 'field',label: "Cashiering Location Code",
              editable: true,
              maxLength: 4
            },
            {
              fieldName: "CashieringWorkstationNum",
              
              type: 'field',label: "Cashiering Workstation Number",
              editable: true,
              maxLength: 10
            }
          ]
        });
        this.commentsFormGroup = new GroupElement({
        label: "Comments",
        description: 'Comment information',
        elements: [
          {
            fieldName: "AccountID",
            
            type: 'field',label: "Billing Account ID",
            editable: false
          },
          {
            fieldName: "CommentCode",
            
            type: 'field',label: "Comment Code",
            editable: true
          },          
          {
            fieldName: "CommentDate",
            
            type: 'field',label: "Comment Date",
            editable: true,
            input: { type: "datetime-picker"}
          },
          {
            fieldName: "Comment",
            
            type: 'field',label: "Comment",
            editable: true
          }
        ]
      });  
      this.contractFormGroup = new GroupElement({
        label: "Contracts",
        description: '',
        elements: [
          {
            fieldName: "ContractDate",
            
            type: 'field',label: "Contract Date",
            editable: true,
            requiredExpression: 'required',
            input: { type: "datetime-picker"}       
          },            
          {
            fieldName: "ContractNum",
            
            type: 'field',label: "Contract Number",
            editable: false,
            requiredExpression: 'required',
            maxLength:9,
            description: "Set after entering contract date"
          },
          {
            fieldName: "ContractDescription",
            
            type: 'field',label: "Contract Description",
            editable: true,
            requiredExpression: 'required',            
            maxLength: 100
          },     
          {
            fieldName: "ContractDeedBook",
            
            type: 'field',label: "Deed Book",
            editable: true,
            maxLength: 4
          },     
          {
            fieldName: "ContractDeedPage",
            
            type: 'field',label: "Deed Page",
            editable: true,
            maxLength: 4
          }    
        ]
      });      
      this.rollFormGroup = new GroupElement({
        label: "Rolls",
        description: '',
        elements: [
          {
            fieldName: "RollNum",
            
            type: 'field',label: "Roll Number",
            editable: true,
            maxLength: 9
          },
          {
            fieldName: "RollNumInOut",
            
            type: 'field',label: "Roll Number In/Out",
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
            fieldName: "ConfResNum",
            
            type: 'field',label: "Confirming Resolution Number",
            editable: true,
            maxLength:9
          },     
          {
            fieldName: "ConfResDate",
            
            type: 'field',label: "Confirming Resolution Date",
            editable: true,
            input: { type: "datetime-picker"}
          },     
          {
            fieldName: "DirResNum",
            
            type: 'field',label: "Directing Resolution Number",
            editable: true,
            maxLength: 9
          },     
          {
            fieldName: "DirResDate",
            
            type: 'field',label: "Directing Resolution Date",
            editable: true,
            input: { type: "datetime-picker"}
          },     
        ]
      });                    
      this.confResFormGroup = new GroupElement({
        label: "Confirming Resolution",
        description: '',
        elements: [
          {
            fieldName: "ConfResNum",
            
            type: 'field',label: "Resolution Number",
            editable: true,
            maxLength:9
          },
          {
            fieldName: "ConfResDate",
            
            type: 'field',label: "Resolution Date",
            editable: true,
            input: { type: "datetime-picker"}
          },     
          {
            fieldName: "ConfResDesc",
            
            type: 'field',label: "Resolution Description",
            editable: true,
            maxLength: 100
          }
        ]
      });    
      
      this.dirResFormGroup = new GroupElement({
        label: "Directing Resolution",
        description: '',
        elements: [
          {
            fieldName: "DirResNum",
            
            type: 'field',label: "Resolution Number",
            editable: true,
            maxLength: 9
          },
          {
            fieldName: "DirResDate",
            
            type: 'field',label: "Resolution Date",
            editable: true,
            input: { type: "datetime-picker"}
          },     
          {
            fieldName: "ConditionCode",
            
            type: 'field',label: "Condition Code",
            editable: true,
            maxLength: 2
          }
        ]
      });  
      this.corrResFormGroup = new GroupElement({
        label: "Correcting Resolution",
        description: '',
        elements: [
          {
            fieldName: "CorrResNum",
            
            type: 'field',label: "Resolution Number",
            editable: true,
            maxLength: 9
          },
          {
            fieldName: "CorrResDate",
            
            type: 'field',label: "Resolution Date",
            editable: true,
            input: { type: "datetime-picker"}
          },     
          {
            fieldName: "CorrResDesc",
            
            type: 'field',label: "Description",
            editable: true,
            maxLength: 100
          },
          {
            fieldName: "ConfResNum",
            
            type: 'field',label: "Confirming Resolution Number",
            editable: true,
            maxLength:9
          },
          {
            fieldName: "ConfResDate",
            
            type: 'field',label: "Confirming Resolution Date",
            editable: true,
            input: { type: "datetime-picker"}
          },           
        ]
      });             
        this.altBillingFormGroup = new GroupElement({
          label: "Alternate Billing",
          description: "Alternate Billing information",
          elements: [
            {
              type: 'field',
              editable: true,
              label: 'Alternate Bill To Name 1',
              fieldName: "AltBillToName1",
              maxLength: 35
            },
            {
              type: 'field',
              editable: true,
              label: 'Alternate Bill To Name 2',
              fieldName: "AltBillToName2",
              maxLength: 35
            },
            {
              type: 'field',
              editable: true,
              label: 'Alternate Bill To Address 1',
              fieldName: "AltBillToAddr1",
              maxLength: 35
            },
            {
              type: 'field',
              editable: true,
              label: 'Alternate Bill To Address 2',
              fieldName: "AltBillToAddr2",
              maxLength: 35
            },
            {
              type: 'field',
              editable: true,
              label: 'Alternate Bill To Address 3',
              fieldName: "AltBillToAddr3",
              maxLength: 35
            },
            {
              type: 'field',
              editable: true,
              label: 'Alternate Bill To Zip Code',
              fieldName: "AltBillToZipCode",
              maxLength: 5
            },
            {
              type: 'field',
              editable: true,
              label: 'Alternate Bill To Zip Plus',
              fieldName: "AltBillToZipPlus",
              maxLength: 4
            }
          ]
        });
      }
    )
  }
}
