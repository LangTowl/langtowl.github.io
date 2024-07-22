import { Component, OnInit } from '@angular/core';
import { ViewControllerService } from '../../../services/view-controler/view-controller.service';
import { AboutMePost, AboutMeService } from '../../../services/about-me/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

  constructor(
    private view_controller_service: ViewControllerService,
    private about_me_service: AboutMeService
  ) { }

  ngOnInit() {
    // Ensures that if reload happens on non home screen, nav bar is showing
    this.view_controller_service.updateNavBarState(true);
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
}
