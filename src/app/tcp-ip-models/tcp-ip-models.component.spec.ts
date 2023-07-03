import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcpIpModelsComponent } from './tcp-ip-models.component';

describe('TcpIpModelsComponent', () => {
  let component: TcpIpModelsComponent;
  let fixture: ComponentFixture<TcpIpModelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TcpIpModelsComponent]
    });
    fixture = TestBed.createComponent(TcpIpModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
