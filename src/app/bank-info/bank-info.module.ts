import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankInfoRoutingModule } from './bank-info-routing.module';
import { BankInfoComponent } from './bank-info.component';
import { CurrencyConvertFormComponent } from './currency-convert-form/currency-convert-form.component';
import { CurrencyCardListComponent } from './currency-card-list/currency-card-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardSummaryComponent } from './currency-card-list/card-summary/card-summary.component';
import { ListOfCardComponent } from './currency-card-list/list-of-card/list-of-card.component';

@NgModule({
  declarations: [BankInfoComponent, CurrencyConvertFormComponent, CurrencyCardListComponent, CardSummaryComponent, ListOfCardComponent],
  imports: [
    CommonModule,
    BankInfoRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class BankInfoModule { }
