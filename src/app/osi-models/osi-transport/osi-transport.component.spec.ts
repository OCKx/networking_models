import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiTransportComponent } from './osi-transport.component';

describe('OsiTransportComponent', () => {
  let component: OsiTransportComponent;
  let fixture: ComponentFixture<OsiTransportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsiTransportComponent]
    });
    fixture = TestBed.createComponent(OsiTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
