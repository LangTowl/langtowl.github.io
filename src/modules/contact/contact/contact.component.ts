import { Component, OnInit } from '@angular/core';
import { NavBarItems, ViewControllerService } from '../../../services/view-controler/view-controller.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  // Class fields
  email: string = 'langtowl@gmail.com';
  linkedin: string = 'linkedin.com/in/langtowl';
  github: string = 'github.com/langtowl';
  phone: string = '(207) 808-3344';
  location: string = '4700 Research Way, Lakeland, FL 33805';

  constructor(
    private view_controller_service: ViewControllerService
  ) { }

  ngOnInit() {
    this.view_controller_service.updateNavBarState(true);
    this.view_controller_service.updateNavBarItem(NavBarItems.ContactMe);
  }
}
