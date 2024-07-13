import { Component } from '@angular/core';
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
  ) {}

  /* Class methods */

  // Fetches current nav bar state
  fetchNavBarState(): boolean {
    return this.view_controller_service.fetchNavBarState();
  }
}
