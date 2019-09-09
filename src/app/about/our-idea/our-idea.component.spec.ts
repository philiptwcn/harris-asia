import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurIdeaComponent } from './our-idea.component';

describe('OurIdeaComponent', () => {
  let component: OurIdeaComponent;
  let fixture: ComponentFixture<OurIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
