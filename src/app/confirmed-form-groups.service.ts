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
              required: true,
              maxLength:9          
            },
            {
              editable: true,
              label: 'Roll Lot',
              name: "RollLotNum",
              required: true,
              maxLength:3             
            },            
            {
              editable: true,
              label: 'Roll # In/Out',
              name: "RollNumInOut",
              required: true,
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
              required: true,
              editable: true,
              label: 'Confirming Resolution Number',
              name: "ConfResNum",
              maxLength:9
            },
            {
              required: true,
              editable: true,
              label: 'Confirming Resolution Date',
              name: "ConfResDate",
            },
            {
              editable: false,
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
              required: true,
              label: 'Council Date',
              name: "ABCouncilDate",
            },
            {
              editable: false,
              required: true,
              label: 'Confirming Resolution Number',
              name: "ConfResNum",
              maxLength:9
            },
            {
              editable: false,
              required: true,
              label: 'Confirming Resolution Date',
              name: "ConfResDate",
            },
            {
              editable: false,
              required: false,
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
              required: true,
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
              editable: true,
              required: true,
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
              editable: true,
              label: 'Total Lien Amount',
              name: "TotalLienAmount",
              required: true
            },
            {
              editable: false,
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
              editable: false,
              label: 'Principal Pre-paid',
              name: "PrincipalPrePaid",
            },
            {
              editable: false,
              required: false,
              label: 'Interest Paid Thru',
              name: "InterestPaidThruDate",
            },
            {
              editable: false,
              required: false,
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
              maxLength: 35,
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"    
            },
            {
              editable: true,
              label: 'Payment Plan Date',
              name: "PaymentPlanDate",
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"    

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
              }),
              visibilityExpression: "($feature.StatusCode != '1')"             
            },
            {
              editable: true,
              label: 'Current Installment Due',
              name: "CurrentInstallmentDue",
            },
            {
              editable: false,
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
              editable: true,
              label: 'Total Lien Amount',
              name: "TotalLienAmount",
              required: true
            },
            {
              editable: false,
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
              editable: false,
              required: false,
              label: 'Interest Paid Thru',
              name: "InterestPaidThruDate",
            },
            {
              editable: false,
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
              maxLength: 35,
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"              
            },
            {
              editable: true,
              label: 'Payment Plan Date',
              name: "PaymentPlanDate",
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"              

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
              }),
              visibilityExpression: "($feature.StatusCode != '1')"                 
            },
            {
              editable: true,
              label: 'Current Installment Due',
              name: "CurrentInstallmentDue",
            },
            {
              editable: false,
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
              editable: false,
              label: 'Number of Years',
              name: "NumYears",
              required: false
            },
            {
              editable: false,
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
              editable: true,
              label: 'Total Lien Amount',
              name: "TotalLienAmount",
              required: true
            },
            {
              editable: false,
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
              editable: false,
              label: 'Principal Pre-paid',
              name: "PrincipalPrePaid",
            },
            {
              editable: false,
              required: false,
              label: 'Interest Paid Thru',
              name: "InterestPaidThruDate",
            },
            {
              editable: false,
              required: false,
              label: 'Interest Start Date',
              name: "InterestStartDate",
            },
            {
              editable: false,
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
              maxLength: 35,
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"                  
            },
            {
              editable: true,
              label: 'Payment Plan Date',
              name: "PaymentPlanDate",
              visibilityExpression: "($feature.PaymentPlanFlag == 'Y')"    
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
              }),
              visibilityExpression: "($feature.StatusCode != '1')"                 
            },
            {
              editable: true,
              label: 'Current Installment Due',
              name: "CurrentInstallmentDue",
            },
            {
              editable: false,
              label: 'Last Payment Date',
              name: "LastPaymentDate",
            }
          ]
        });         
        
      }
    )
  }
}
