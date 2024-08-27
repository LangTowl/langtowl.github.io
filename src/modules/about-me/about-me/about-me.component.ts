import { Component, OnInit, HostListener } from '@angular/core';
import { NavBarItems, ViewControllerService } from '../../../services/view-controler/view-controller.service';
import { AboutMePost, AboutMeService } from '../../../services/about-me/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  // Class fields
  private screen_width: number = -1;

  constructor(
    private view_controller_service: ViewControllerService,
    private about_me_service: AboutMeService
  ) {
    this.screen_width = window.innerWidth;
  }

  ngOnInit() {
    // Ensures that if reload happens on non home screen, nav bar is showing and showing the correct tab
    this.view_controller_service.updateNavBarState(true);
    this.view_controller_service.updateNavBarItem(NavBarItems.AboutMe);
    this.updateScreenWidth();
  }

  /* Component methods */

  // Returns all about me blog posts
  get aboutMePosts(): AboutMePost[] {
    return this.about_me_service.fetchAboutMePosts();
  }

  // Determines the current post being viewed
  get currentPost(): number {
    return this.about_me_service.fetchCurrentPost();
  }

  // Updates the current post being viewed by index
  updateCurrentPost(index: number): void {
    this.about_me_service.updateCurrentPost(index);
  }

  // Updates ui for active post
  textColor(target: number): string {
    if (this.currentPost == target) {
      return 'rgba(255, 255, 255, 1)';
    }

    return 'rgba(255, 255, 255, 0.5)'
  }

  // Ticker button
  tickerButton(action: string): void {
    var temp = this.currentPost;

    if (action == 'down' && this.currentPost < this.aboutMePosts.length - 1) {
      this.updateCurrentPost(temp += 1);
    } else if (action == 'up' && this.currentPost > 0) {
      this.updateCurrentPost(temp -= 1);
    }
  }

  // Update screen width
  updateScreenWidth() {
    this.screen_width = window.innerWidth;
    // console.log(this.screen_width);
  }

  // Calls update screen width upon window reshape
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateScreenWidth();
  }

  // Fetch screen width
  fetchScreenWidth(): number {
    return this.screen_width;
  }

  // Determines home button route
  homeButtonRout(): string | null {
    return this.screen_width > 1150 ? '' : null;
  }
}
