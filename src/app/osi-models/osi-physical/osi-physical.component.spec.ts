import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiPhysicalComponent } from './osi-physical.component';

describe('OsiPhysicalComponent', () => {
  let component: OsiPhysicalComponent;
  let fixture: ComponentFixture<OsiPhysicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsiPhysicalComponent]
    });
    fixture = TestBed.createComponent(OsiPhysicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
