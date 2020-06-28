import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologycomponentComponent } from './radiologycomponent.component';

describe('RadiologycomponentComponent', () => {
  let component: RadiologycomponentComponent;
  let fixture: ComponentFixture<RadiologycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiologycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
