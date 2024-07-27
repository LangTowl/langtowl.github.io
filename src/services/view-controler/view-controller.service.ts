import { Injectable } from '@angular/core';

export enum NavBarItems {
  AboutMe = "About Me",
  Projects = "Projects",
  WorkExperience = "Work Experience",
  Resume = "Resume",
  ContactMe = "Contact Me"
}

@Injectable({
  providedIn: 'root'
})
export class ViewControllerService {
  // Class fields
  private nav_bar_state: boolean = false;
  private nav_buttons = [
    {label: NavBarItems.AboutMe, path: 'about-me'},
    {label: NavBarItems.Projects, path: 'projects'},
    {label: NavBarItems.WorkExperience, path: 'work-experience'},
    {label: NavBarItems.Resume, path: 'resume'},
    {label: NavBarItems.ContactMe, path: 'contact-me'}
  ];
  private active_tab: NavBarItems = NavBarItems.AboutMe;

  constructor() { }

  /* Class methods */

  // Update nav bar state with passed boolean
  updateNavBarState(new_state: boolean): void {
    this.nav_bar_state = new_state;

    // console.log("Showing nav bar: ", this.nav_bar_state);
    // console.log("Navigating to:", this.active_tab);
  }

  // Fetch current nav bar state
  fetchNavBarState(): boolean {
    return this.nav_bar_state;
  }

  // Fetch navigation button array
  fetchNavButtons() {
    return this.nav_buttons;
  }

  // Update current tab
  updateNavBarItem(tab: NavBarItems): void {
    this.active_tab = tab;
    
    console.log("Navigating to:", this.active_tab);
  }

  // Fetch current active tab 
  fetchCurrentActiveTab(): NavBarItems {
    return this.active_tab;
  }
}
