import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCardComponent } from './list-of-card.component';

describe('ListOfCardComponent', () => {
  let component: ListOfCardComponent;
  let fixture: ComponentFixture<ListOfCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
