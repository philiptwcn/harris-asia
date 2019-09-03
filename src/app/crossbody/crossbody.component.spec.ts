import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossbodyComponent } from './crossbody.component';

describe('CrossbodyComponent', () => {
  let component: CrossbodyComponent;
  let fixture: ComponentFixture<CrossbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
