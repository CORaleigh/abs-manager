import { Injectable } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
@Injectable({
  providedIn: 'root'
})
export class ConfirmedFormgroupsService {
  assessmentFormGroup: esri.GroupElement;
  abatementFormGroup: esri.GroupElement;
  tapFeeFormGroup: esri.GroupElement;
  assessmentBillingFormGroup: esri.GroupElement;
  abatementBillingFormGroup: esri.GroupElement;
  tapFeeBillingFormGroup: esri.GroupElement;

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

              editable: true,
              label: 'Roll #',
              fieldName: "RollNum",
              requiredExpression: 'required',
              maxLength:9          
            },
            {
              type: 'field',

              editable: true,
              label: 'Roll Lot',
              fieldName: "RollLotNum",
              requiredExpression: 'required',
              maxLength:3             
            },            
            {
              type: 'field',

              editable: true,
              label: 'Roll # In/Out',
              fieldName: "RollNumInOut",
              requiredExpression: 'required',
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
              type: 'field',

              editable: true,
              requiredExpression: 'required',
              label: 'Directing Resolution Number',
              fieldName: "DirResNum",
            },
            {
              type: 'field',

              editable: true,
              requiredExpression: 'required',
              label: 'Directing Resolution Date',
              fieldName: "DirResDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',
              requiredExpression: 'required',
              editable: true,
              label: 'Confirming Resolution Number',
              fieldName: "ConfResNum",
              maxLength:9
            },
            {
              
              type: 'field',
              requiredExpression: 'required',
              editable: true,
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
              requiredExpression: 'required',
              label: 'Council Date',
              fieldName: "ABCouncilDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',

              editable: false,
              requiredExpression: 'required',
              label: 'Confirming Resolution Number',
              fieldName: "ConfResNum",
              maxLength:9
            },
            {
              type: 'field',

              editable: false,
              requiredExpression: 'required',
              label: 'Confirming Resolution Date',
              fieldName: "ConfResDate",
              input: { type: "datetime-picker"}
            },
            {
              type: 'field',

              editable: false,
              required: false,
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
              requiredExpression: 'required',
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

              editable: true,
              requiredExpression: 'required',
              label: 'Contract #',
              fieldName: "ContractNum",
              maxLength:9
            },
            {
              type: 'field',

              editable: true,
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
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"    ,
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
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"    ,
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

              editable: false,
              label: 'Number of Years',
              fieldName: "NumYears",
              required: false
            },
            {
              type: 'field',

              editable: false,
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

              editable: false,
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
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"  ,
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
        
      }
    )
  }
}
