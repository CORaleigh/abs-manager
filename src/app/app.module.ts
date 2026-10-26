import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { AttributeLookupComponent } from './attribute-lookup/attribute-lookup.component';
import './calcite-components';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AccountPanelComponent,
    DetailPanelComponent,
    FormComponent,
    PaymentButtonComponent,
    MainComponent,
    PayoffCalculatorComponent,
    AttributeLookupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // allows the ArcGIS map components (<arcgis-*>) and Calcite components (<calcite-*>) in templates
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
