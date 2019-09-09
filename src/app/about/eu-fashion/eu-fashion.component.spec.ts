import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuFashionComponent } from './eu-fashion.component';

describe('EuFashionComponent', () => {
  let component: EuFashionComponent;
  let fixture: ComponentFixture<EuFashionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuFashionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
