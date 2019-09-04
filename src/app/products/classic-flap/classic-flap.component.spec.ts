import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicFlapComponent } from './classic-flap.component';

describe('ClassicFlapComponent', () => {
  let component: ClassicFlapComponent;
  let fixture: ComponentFixture<ClassicFlapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicFlapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicFlapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
