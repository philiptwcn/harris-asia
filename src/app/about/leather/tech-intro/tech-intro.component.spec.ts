import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIntroComponent } from './tech-intro.component';

describe('TechIntroComponent', () => {
  let component: TechIntroComponent;
  let fixture: ComponentFixture<TechIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
