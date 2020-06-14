import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurologycomponentComponent } from './neurologycomponent.component';

describe('NeurologycomponentComponent', () => {
  let component: NeurologycomponentComponent;
  let fixture: ComponentFixture<NeurologycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeurologycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeurologycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
