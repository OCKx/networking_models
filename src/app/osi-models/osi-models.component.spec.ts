import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiModelsComponent } from './osi-models.component';

describe('OsiModelsComponent', () => {
  let component: OsiModelsComponent;
  let fixture: ComponentFixture<OsiModelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsiModelsComponent]
    });
    fixture = TestBed.createComponent(OsiModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
