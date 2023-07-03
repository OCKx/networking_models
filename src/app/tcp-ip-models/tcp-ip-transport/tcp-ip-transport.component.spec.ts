import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcpIpTransportComponent } from './tcp-ip-transport.component';

describe('TcpIpTransportComponent', () => {
  let component: TcpIpTransportComponent;
  let fixture: ComponentFixture<TcpIpTransportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TcpIpTransportComponent]
    });
    fixture = TestBed.createComponent(TcpIpTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
