import { Component, OnInit, Input } from '@angular/core';
import { BankInfo } from '../model/bank-info.model';
import { BankInfoService } from '../service/bank-info.service';

@Component({
  selector: 'app-currency-card-list',
  templateUrl: './currency-card-list.component.html',
  styleUrls: ['./currency-card-list.component.scss']
})
export class CurrencyCardListComponent implements OnInit {

  /** Input  of currency card list component */
  public currencyList:BankInfo[];
  constructor(private bankService: BankInfoService) { }

  /** Frist Time call on init */
  public ngOnInit():void {
    this.getUserDataCards();
  }

  /** Gets user data cards */
  public getUserDataCards(): void {
    this.bankService.getUserBankDataLists().subscribe((respone: BankInfo[]) => {
      this.currencyList = respone;
    });
  }
}
