import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotograficaComponent } from './fotografica.component';

describe('FotograficaComponent', () => {
  let component: FotograficaComponent;
  let fixture: ComponentFixture<FotograficaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotograficaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotograficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
