import { Injectable } from '@angular/core';
import { NavBarItems, ViewControllerService } from '../view-controler/view-controller.service';

@Injectable({
  providedIn: 'root'
})
export class NavControllerService {

  constructor(
    private view_controller_service: ViewControllerService
  ) { }

  /* Class Methods */

  // Hides nav bar
  homeButtonPressed() {
    this.view_controller_service.updateNavBarState(false);
  }

  // Updates view controller with new tab
  navButtonPressed(tab: NavBarItems): void {
    this.view_controller_service.updateNavBarItem(tab);
  }
}
