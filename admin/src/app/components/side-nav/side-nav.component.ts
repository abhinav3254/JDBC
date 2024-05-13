import { Component } from '@angular/core';
import sideNavItemsJson from '../../../assets/json/sidenav-items.json'
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  constructor(private router: Router) { }

  sideNavItems: SideNavItems[] = sideNavItemsJson;

  navigateFunction(sideOptions: Option) {
    this.router.navigate([sideOptions.link]);
  }

}

export interface SideNavItems {
  name: string
  options: Option[]
}

export interface Option {
  icon: string
  name: string
  link: string
}