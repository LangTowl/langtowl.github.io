import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewControllerService {
  // Class fields
  private nav_bar_state: boolean = false;

  constructor() { }

  /* Class methods */

  // Update nav bar state with passed boolean
  updateNavBarState(new_state: boolean): void {
    this.nav_bar_state = new_state;

    console.log("Updated nav bar state: ", this.nav_bar_state);
  }

  // Fetch current nav bar state
  fetchNavBarState(): boolean {
    return this.nav_bar_state;
  }
}
