import { Component, OnInit } from '@angular/core';
import { ViewControllerService } from '../../../services/view-controler/view-controller.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(
    private view_controller_service: ViewControllerService
  ) { }

  ngOnInit() {
    // Ensures that if reload happens on non home screen, nav bar is showing
    this.view_controller_service.updateNavBarState(true);
  }
}
