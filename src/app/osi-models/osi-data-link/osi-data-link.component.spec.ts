import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiDataLinkComponent } from './osi-data-link.component';

describe('OsiDataLinkComponent', () => {
  let component: OsiDataLinkComponent;
  let fixture: ComponentFixture<OsiDataLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsiDataLinkComponent]
    });
    fixture = TestBed.createComponent(OsiDataLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
