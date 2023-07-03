import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiSessionComponent } from './osi-session.component';

describe('OsiSessionComponent', () => {
  let component: OsiSessionComponent;
  let fixture: ComponentFixture<OsiSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsiSessionComponent]
    });
    fixture = TestBed.createComponent(OsiSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
