import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathologycomponentComponent } from './pathologycomponent.component';

describe('PathologycomponentComponent', () => {
  let component: PathologycomponentComponent;
  let fixture: ComponentFixture<PathologycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathologycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathologycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
