import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiPresentationComponent } from './osi-presentation.component';

describe('OsiPresentationComponent', () => {
  let component: OsiPresentationComponent;
  let fixture: ComponentFixture<OsiPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsiPresentationComponent]
    });
    fixture = TestBed.createComponent(OsiPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
