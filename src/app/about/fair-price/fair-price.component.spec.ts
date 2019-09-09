import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairPriceComponent } from './fair-price.component';

describe('FairPriceComponent', () => {
  let component: FairPriceComponent;
  let fixture: ComponentFixture<FairPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
