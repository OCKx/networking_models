import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcpIpInternetComponent } from './tcp-ip-internet.component';

describe('TcpIpInternetComponent', () => {
  let component: TcpIpInternetComponent;
  let fixture: ComponentFixture<TcpIpInternetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TcpIpInternetComponent]
    });
    fixture = TestBed.createComponent(TcpIpInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
