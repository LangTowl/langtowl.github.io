import { Component, OnInit } from '@angular/core';
import { ViewControllerService } from '../../../services/view-controler/view-controller.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(
    private view_controller_service: ViewControllerService
  ) { }

  /* Class methods */
  updateNavBarState(new_state: boolean): void {
    this.view_controller_service.updateNavBarState(new_state);
  }
}
