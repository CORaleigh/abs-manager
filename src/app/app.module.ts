import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AccountPanelComponent } from './account-panel/account-panel.component';
import { DetailPanelComponent } from './detail-panel/detail-panel.component';
import { FormComponent } from './form/form.component';
import { PaymentButtonComponent } from './payment-button/payment-button.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { PayoffCalculatorComponent } from './payoff-calculator/payoff-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AccountPanelComponent,
    DetailPanelComponent,
    FormComponent,
    PaymentButtonComponent,
    MainComponent,
    PayoffCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
