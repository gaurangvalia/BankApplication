import { Component, OnInit, Input } from '@angular/core';
import { BankInfo } from '../../model/bank-info.model';

@Component({
  selector: 'app-list-of-card',
  templateUrl: './list-of-card.component.html',
  styleUrls: ['./list-of-card.component.scss']
})
export class ListOfCardComponent implements OnInit {

  /** Input  of list of card component Pass Data with currency-card-list */
  @Input() public userDataCard: BankInfo[];
  constructor() { }
  ngOnInit() {
  }
}
