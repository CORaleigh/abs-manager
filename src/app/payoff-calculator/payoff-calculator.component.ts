import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import esri = __esri;
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-payoff-calculator',
  templateUrl: './payoff-calculator.component.html',
  styleUrls: ['./payoff-calculator.component.scss']
})
export class PayoffCalculatorComponent implements OnInit, OnChanges {

  constructor(private shared:SharedService) { }
  @Input('feature') feature: esri.Graphic = null;
  @ViewChild('payoffInfo') private payoffDiv: ElementRef;

  payoffDate:string = new Date().toISOString().slice(0,10);
  principalDue: number = 0;
  interestDue: number = 0;
  fromDate: Date = null;
  fromDateLabel: string = "";
  totalDue: number = 0;
  dailyRate:number = 0;
  @Output() payoffCalculated = new EventEmitter<any>();

  ngOnInit() {
  }
  calculatePayoff() {
    debugger
    let days = 0;
    
    if (this.shared.account.getValue().attributes['InterestPaidThruDate']) {      
      days = Math.round((new Date(this.payoffDate).getTime() - new Date(new Date(this.shared.account.getValue().attributes['InterestPaidThruDate']).toDateString()).getTime())/(1000*60*60*24));
    } else if (this.shared.account.getValue().attributes['ConfResDate']){
      days = Math.round((new Date(this.payoffDate).getTime() - new Date(new Date(this.shared.account.getValue().attributes['ConfResDate']).toDateString()).getTime())/(1000*60*60*24));
    } else if (this.shared.account.getValue().attributes['ContractDate']){
      days = Math.round((new Date(this.payoffDate).getTime() - new Date(new Date(this.shared.account.getValue().attributes['ContractDate']).toDateString()).getTime())/(1000*60*60*24));

    }
    debugger
    this.principalDue = this.shared.account.getValue().attributes['PrincipalBalance'];
    this.interestDue = ((this.shared.account.getValue().attributes['InterestRate']/100)/365 * days) * this.shared.account.getValue().attributes['PrincipalBalance'];
    this.dailyRate = this.interestDue/days;
    if (this.shared.account.getValue().attributes['BillingTypeCode'] != 'TF' && ((new Date(this.payoffDate).getTime() - this.shared.account.getValue().attributes['AdvertiseDate']) / 86400000) <= 30) {
      this.interestDue = 0;
      this.dailyRate = 0;

    }
    this.totalDue = this.principalDue + this.interestDue;

    this.payoffCalculated.emit({total: this.totalDue, principal: this.principalDue, interest: this.interestDue});
  }

  isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0);
  }

  exportPayoff() {
    const printWindow = window.open();
    printWindow.document.open('text/html');
    printWindow.document.writeln('<h3>Account Information</h3>');
    printWindow.document.writeln('Account #: ' + this.feature.attributes.AccountID);
    printWindow.document.writeln('<br/>');    
    printWindow.document.writeln('Real Estate ID: ' + this.shared.selectedProperty.attributes.REID);
    printWindow.document.writeln('<br/>');       
    printWindow.document.writeln('Site Address: ' + this.shared.selectedProperty.attributes.SITE_ADDRESS);
    printWindow.document.writeln('<br/>');    
    printWindow.document.writeln('<h3>Customer Mailing Address</h3>');
    printWindow.document.writeln(this.shared.selectedProperty.attributes.OWNER);
    printWindow.document.writeln('<br/>');        
    printWindow.document.writeln(this.shared.selectedProperty.attributes.ADDR1);
    printWindow.document.writeln('<br/>');        
    printWindow.document.writeln(this.shared.selectedProperty.attributes.ADDR2);
    printWindow.document.writeln('<br/>');  
    if (this.shared.selectedProperty.attributes.ADDR3) {
      printWindow.document.writeln(this.shared.selectedProperty.attributes.ADDR3);
    }
    printWindow.document.writeln('<br/>');    
    printWindow.document.writeln('<h3>Mail In</h3>');
    printWindow.document.writeln('City of Raleigh<br/>');
    printWindow.document.writeln('Revenue Svcs-25<br/>');
    printWindow.document.writeln('PO Box 590<br/>');
    printWindow.document.writeln('Raleigh NC 27602<br/>')
    printWindow.document.writeln('<br/>');    
    printWindow.document.writeln('<h3>Overnight</h3>');
    printWindow.document.writeln('City of Raleigh<br/>');
    printWindow.document.writeln('Revenue Svcs-25<br/>');
    printWindow.document.writeln('222 W Hargett St<br/>');
    printWindow.document.writeln('Raleigh NC 27601<br/>'); 
    printWindow.document.writeln('<br/>');    
    printWindow.document.writeln('<h3>Payoff Information</h3>');    
    printWindow.document.writeln('Payoff Thru: ' + this.payoffDate+'<br/>');
    printWindow.document.writeln(this.payoffDiv.nativeElement.outerHTML);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

  ngOnChanges(changes:SimpleChanges) {
    if (changes.feature) {
      if (changes.feature.currentValue.attributes) {

           if (changes.feature.currentValue.attributes['InterestPaidThruDate']) {
            this.fromDate = new Date(changes.feature.currentValue.attributes['InterestPaidThruDate']);
            this.fromDateLabel = "Interest Paid Thru Date: ";
          } else if (changes.feature.currentValue.attributes['ConfResDate']) {
            this.fromDate = new Date(changes.feature.currentValue.attributes['ConfResDate']);
            this.fromDateLabel = "Confirming Resolution Date: ";
          } else if (changes.feature.currentValue.attributes['ContractDate']) {
            this.fromDate = new Date(changes.feature.currentValue.attributes['ContractDate']);
            this.fromDateLabel = "Contract Date: ";
          }         
      }
    }
  }
}
