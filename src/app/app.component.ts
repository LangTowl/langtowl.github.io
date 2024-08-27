import { Component, OnInit, HostListener } from '@angular/core';
import { ViewControllerService } from '../services/view-controler/view-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Class fields
  title = 'langtowl.github.io';

  constructor(
    private view_controller_service: ViewControllerService
  ) { }

  ngOnInit(): void { }

  /* Class methods */

  // Fetches current nav bar state
  fetchNavBarState(): boolean {
    return this.view_controller_service.fetchNavBarState();
  }

  // Updates the visibility of the nav bar
  updateNavBarVisibility(state: boolean): void {
    this.view_controller_service.updateNavBarState(state);
  }
}
