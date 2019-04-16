import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankInfoComponent } from './bank-info.component';
import { CurrencyConvertFormComponent } from './currency-convert-form/currency-convert-form.component';
import { CurrencyCardListComponent } from './currency-card-list/currency-card-list.component';

const routes: Routes = [
      {
        path: '',
        pathMatch:'full',
        redirectTo:'currency-convert-from'
      },
      {
        path: 'currency-convert-from',
        component: CurrencyConvertFormComponent
      },
      {
        path: 'currency-card-list',
        component: CurrencyCardListComponent
      }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankInfoRoutingModule { }
