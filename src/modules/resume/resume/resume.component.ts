import { Component, OnInit } from '@angular/core';
import { NavBarItems, ViewControllerService } from '../../../services/view-controler/view-controller.service';
import { NavControllerService } from '../../../services/nav-controller/nav-controller.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  // Class fields

  constructor(
    private view_controller_service: ViewControllerService
  ) { }

  ngOnInit() {
    this.view_controller_service.updateNavBarState(true);
    this.view_controller_service.updateNavBarItem(NavBarItems.Resume);
  }

  // Class methods
  openPDF(): void {
    console.log("Opening resume...");
    window.open('../../../assets/resume/Lang_Towl_Resume.pdf');
  }
}
