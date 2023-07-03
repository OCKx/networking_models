import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  displayOSIModels = true;
  displayTCPModels = true;
  showNav = true;

  showOSIModels () {
    if (this.displayOSIModels === true) {
      this.displayOSIModels = false;
      this.displayTCPModels = true;
    } else {
      this.displayOSIModels = true;
    }
  }

  showTCPModels () {
    if (this.displayTCPModels === true) {
      this.displayTCPModels = false;
      this.displayOSIModels = true;
    } else {
      this.displayTCPModels = true;
    }
  }

  toggleNav() {
    if (this.showNav === true) {
      this.showNav = false
    } else {
      this.showNav = true
    }
  }
 
}
