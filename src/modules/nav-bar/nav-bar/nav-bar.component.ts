import { Component, OnInit, HostListener } from '@angular/core';
import { NavBarItems, ViewControllerService } from '../../../services/view-controler/view-controller.service';
import { NavControllerService } from '../../../services/nav-controller/nav-controller.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  // Class fields
  nav_buttons: any;
  private screen_width: number = -1;

  constructor(
    private nav_controller_service: NavControllerService,
    private view_controller_service: ViewControllerService
  ) {
    this.screen_width = window.innerWidth;
  }

  ngOnInit(): void {
    this.nav_buttons = this.view_controller_service.fetchNavButtons();
    this.updateScreenWidth();
  }

  /* Class methods */

  // Hides nav bar
  homeButtonPressed(): void {
    if (this.screen_width > 1150) {
      this.nav_controller_service.homeButtonPressed();
    }
  }

  // Updates view controller with new tab
  navButtonPressed(tab: NavBarItems): void {
    this.nav_controller_service.navButtonPressed(tab);
  }

  // Updates ui for active post
  textColor(target: NavBarItems): string {
    if (this.view_controller_service.fetchCurrentActiveTab() == target) {
      return 'rgba(255, 255, 255, 1)';
    }

    return 'rgba(255, 255, 255, 0.5)';
  }

  // Update screen width
  updateScreenWidth() {
    this.screen_width = window.innerWidth;
    // console.log(this.screen_width);
  }

  // Calls update screen width upon window reshape
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateScreenWidth();
  }

  // Fetch screen width
  fetchScreenWidth(): number {
    return this.screen_width;
  }

  // Determines home button route
  homeButtonRout(): string | null {
    return this.screen_width > 1150 ? '' : null;
  }
}
