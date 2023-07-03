import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiNetworkComponent } from './osi-network.component';

describe('OsiNetworkComponent', () => {
  let component: OsiNetworkComponent;
  let fixture: ComponentFixture<OsiNetworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsiNetworkComponent]
    });
    fixture = TestBed.createComponent(OsiNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
