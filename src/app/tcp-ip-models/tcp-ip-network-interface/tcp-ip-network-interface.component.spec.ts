import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcpIpNetworkInterfaceComponent } from './tcp-ip-network-interface.component';

describe('TcpIpNetworkInterfaceComponent', () => {
  let component: TcpIpNetworkInterfaceComponent;
  let fixture: ComponentFixture<TcpIpNetworkInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TcpIpNetworkInterfaceComponent]
    });
    fixture = TestBed.createComponent(TcpIpNetworkInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
