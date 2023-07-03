import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiApplicationComponent } from './osi-application.component';

describe('OsiApplicationComponent', () => {
  let component: OsiApplicationComponent;
  let fixture: ComponentFixture<OsiApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsiApplicationComponent]
    });
    fixture = TestBed.createComponent(OsiApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
