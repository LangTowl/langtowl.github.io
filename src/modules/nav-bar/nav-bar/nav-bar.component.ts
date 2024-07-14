import { Component } from '@angular/core';
import { ViewControllerService } from '../../../services/view-controler/view-controller.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

    constructor(
      private view_controller_service: ViewControllerService
    ) {}

    /* Class methods */

    // Routine to run when home button pressed
    homeButton() {
      console.log("Navigating to: home");
      this.view_controller_service.updateNavBarState(false);
    }

    // Routine to run when about me button pressed
    aboutMeButton() {
      console.log("Navigating to: about-me");
    }

    // Routine to run when projects button pressed
    projectsButton() {
      console.log("Navigating to: projects");
    }

    // Routine to run when work experience button pressed
    workExperienceButton() {
      console.log("Navigating to: work-experience");
    }

    // Routine to run when resume button pressed
    resumeButton() {
      console.log("Navigating to: resume");
    }

    // Routine to run when contact me button pressed
    contactmeButton() {
      console.log("Navigating to: contact-me");
    }
}
