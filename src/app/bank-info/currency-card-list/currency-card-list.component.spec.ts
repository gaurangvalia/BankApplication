import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCardListComponent } from './currency-card-list.component';

describe('CurrencyCardListComponent', () => {
  let component: CurrencyCardListComponent;
  let fixture: ComponentFixture<CurrencyCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
