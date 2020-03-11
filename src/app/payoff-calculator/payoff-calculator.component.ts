import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import esri = __esri;

@Component({
  selector: 'app-payoff-calculator',
  templateUrl: './payoff-calculator.component.html',
  styleUrls: ['./payoff-calculator.component.scss']
})
export class PayoffCalculatorComponent implements OnInit, OnChanges {

  constructor() { }
  @Input('feature') feature: esri.Graphic = null;
  @ViewChild('payoffInfo', null) private payoffDiv: ElementRef;

  payoffDate:string = new Date().toISOString().slice(0,10);
  principalDue: number = 0;
  interestDue: number = 0;
  fromDate: Date = null;
  fromDateLabel: string = "";
  totalDue: number = 0;
  @Output() payoffCalculated = new EventEmitter<any>();

  ngOnInit() {
  }
  calculatePayoff() {
    let days = 0;
    
    if (this.feature.attributes['InterestPaidThruDate']) {      
      days = Math.round((new Date(this.payoffDate).getTime() - new Date(new Date(this.feature.attributes['InterestPaidThruDate']).toDateString()).getTime())/(1000*60*60*24));
    } else if (this.feature.attributes['ConfResDate']){
      days = Math.round((new Date(this.payoffDate).getTime() - new Date(new Date(this.feature.attributes['ConfResDate']).toDateString()).getTime())/(1000*60*60*24));
    } else if (this.feature.attributes['ContractDate']){
      days = Math.round((new Date(this.payoffDate).getTime() - new Date(new Date(this.feature.attributes['ContractDate']).toDateString()).getTime())/(1000*60*60*24));

    }
    this.principalDue = this.feature.attributes['PrincipalBalance'];
    this.interestDue = ((this.feature.attributes['InterestRate']/100)/365 * days) * this.feature.attributes['PrincipalBalance'];
    this.totalDue = this.principalDue + this.interestDue;

    this.payoffCalculated.emit({total: this.totalDue, principal: this.principalDue, interest: this.interestDue});
  }

  isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0);
  }

  exportPayoff() {
    const printWindow = window.open();
    printWindow.document.open('text/html');
    printWindow.document.writeln(this.payoffDiv.nativeElement.outerHTML);
    //printWindow.document.write('Principal Due: $'+this.totalDue.toString()+'\n'+'Interest Due: $'+this.interestDue.toString()+'\n'+'Total Due: $'+this.totalDue.toString());
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    //printWindow.close();
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
