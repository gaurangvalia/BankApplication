import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BankInfo, convertData } from '../model/bank-info.model';

@Injectable({
  providedIn: 'root'
})
export class BankInfoService {

  /** Base url of bank info service */
  public baseUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }
  /**
   * get The converted data base on baseCurrency value and targetCurrency value 
   */
  public getConvertedPrice(baseCurrency: string, targertCurrency: string): Observable<convertData> {
    return this.http.get<convertData>('https://free.currencyconverterapi.com/api/v6/convert?q=' +
      baseCurrency + '_' + targertCurrency + '&compact=ultra&apiKey=3560f10ff71a8a75abbb');
  }

  /**
   * Adds bank record
   * @param bankInfo : add model
   * @returns bank record 
   */
  public addBankRecord(data:{[key:string]:number|string}): Observable<BankInfo> {
    return this.http.post<BankInfo>(this.baseUrl+'/bank', data);
  }

  public getUserBankDataLists(): Observable<BankInfo[]> {
    return this.http.get<BankInfo[]>(this.baseUrl + '/bank');
  }
}
