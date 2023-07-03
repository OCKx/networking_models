import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcpIpApplicationComponent } from './tcp-ip-application.component';

describe('TcpIpApplicationComponent', () => {
  let component: TcpIpApplicationComponent;
  let fixture: ComponentFixture<TcpIpApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TcpIpApplicationComponent]
    });
    fixture = TestBed.createComponent(TcpIpApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
