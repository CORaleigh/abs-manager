import { Injectable } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
@Injectable({
  providedIn: 'root'
})
export class ConfirmedFormgroupsService {
  assessmentFormGroup: esri.FieldGroupConfig;
  abatementFormGroup: esri.FieldGroupConfig;
  tapFeeFormGroup: esri.FieldGroupConfig;
  assessmentBillingFormGroup: esri.FieldGroupConfig;
  abatementBillingFormGroup: esri.FieldGroupConfig;
  tapFeeBillingFormGroup: esri.FieldGroupConfig;

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
              required: true               
            },
            {
              editable: true,
              label: 'Roll Lot',
              name: "RollLotNum",
              required: true               
            },            
            {
              editable: true,
              label: 'Roll # In/Out',
              name: "RollNumInOut",
              required: true,
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
              editable: false,
              required: true,
              label: 'Directing Resolution Number',
              name: "DirResNum",
            },
            {
              editable: false,
              required: true,
              label: 'Directing Resolution Date',
              name: "DirResDate",
            },
            {
              editable: false,
              label: 'Confirming Resolution Number',
              name: "ConfResNum",
            },
            {
              editable: false,
              label: 'Confirming Resolution Date',
              name: "ConfResDate",
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
        
      }
    )
  }
}
