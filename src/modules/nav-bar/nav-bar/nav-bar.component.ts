import { Component, OnInit } from '@angular/core';
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

    constructor(
      private nav_controller_service: NavControllerService,
      private view_controller_service: ViewControllerService
    ) {}

    ngOnInit(): void {
      this.nav_buttons = this.view_controller_service.fetchNavButtons();
    }

    /* Class methods */

    // Hides nav bar
    homeButtonPressed(): void {
      this.nav_controller_service.homeButtonPressed();
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
}
