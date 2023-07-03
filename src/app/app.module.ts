import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { OsiModelsComponent } from './osi-models/osi-models.component';
import { TcpIpModelsComponent } from './tcp-ip-models/tcp-ip-models.component';
import { OsiApplicationComponent } from './osi-models/osi-application/osi-application.component';
import { OsiPresentationComponent } from './osi-models/osi-presentation/osi-presentation.component';
import { OsiSessionComponent } from './osi-models/osi-session/osi-session.component';
import { OsiTransportComponent } from './osi-models/osi-transport/osi-transport.component';
import { OsiNetworkComponent } from './osi-models/osi-network/osi-network.component';
import { OsiDataLinkComponent } from './osi-models/osi-data-link/osi-data-link.component';
import { OsiPhysicalComponent } from './osi-models/osi-physical/osi-physical.component';
import { TcpIpApplicationComponent } from './tcp-ip-models/tcp-ip-application/tcp-ip-application.component';
import { TcpIpTransportComponent } from './tcp-ip-models/tcp-ip-transport/tcp-ip-transport.component';
import { TcpIpInternetComponent } from './tcp-ip-models/tcp-ip-internet/tcp-ip-internet.component';
import { TcpIpNetworkInterfaceComponent } from './tcp-ip-models/tcp-ip-network-interface/tcp-ip-network-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    OsiModelsComponent,
    TcpIpModelsComponent,
    OsiApplicationComponent,
    OsiPresentationComponent,
    OsiSessionComponent,
    OsiTransportComponent,
    OsiNetworkComponent,
    OsiDataLinkComponent,
    OsiPhysicalComponent,
    TcpIpApplicationComponent,
    TcpIpTransportComponent,
    TcpIpInternetComponent,
    TcpIpNetworkInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},

      {path: "osi-models", component: OsiModelsComponent},
      {path: "osi-application", component: OsiApplicationComponent},
      {path: "osi-presentation", component: OsiPresentationComponent},
      {path: "osi-session", component: OsiSessionComponent},
      {path: "osi-transport", component: OsiTransportComponent},
      {path: "osi-network", component: OsiNetworkComponent},
      {path: "osi-data-link", component: OsiDataLinkComponent},
      {path: "osi-physical", component: OsiPhysicalComponent},

      {path: "tcp-ip-models", component: TcpIpModelsComponent},
      {path: "tcp-ip-application", component: TcpIpApplicationComponent},
      {path: "tcp-ip-transport", component: TcpIpTransportComponent},
      {path: "tcp-ip-internet", component: TcpIpInternetComponent},
      {path: "tcp-ip-network-interface", component: TcpIpNetworkInterfaceComponent},

      {path: "header", component: HeaderComponent},
      {path: "nav", component: NavComponent} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
