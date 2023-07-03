import { NavComponent } from './../nav/nav.component';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  @ViewChild(NavComponent) navComponent!: NavComponent;

  onMenuIconClick() {
    this.navComponent.toggleNav()
  } 
}
