import { Component, OnInit, HostListener } from '@angular/core';
import { NavBarItems, ViewControllerService } from '../../../services/view-controler/view-controller.service';
import { WorkExperiencePost, WorkExperienceService } from '../../../services/work-experience/work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  /* Component Fields */
  private screen_width: number = -1;

  constructor(
    private view_controller_service: ViewControllerService,
    private work_experience_service: WorkExperienceService
  ) {
    this.screen_width = window.innerWidth;
  }

  ngOnInit() {
    this.view_controller_service.updateNavBarState(true);
    this.view_controller_service.updateNavBarItem(NavBarItems.WorkExperience);
  }

  /* Component Methods */
  get workPosts(): WorkExperiencePost[] {
    return this.work_experience_service.fetchWorkPosts();
  }

  get currentPost(): number {
    return this.work_experience_service.fetchCurrentPost();
  }

  updateCurrentPost(index: number): void {
    this.work_experience_service.updateCurrentPost(index);
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

    if (action == 'down' && this.currentPost < this.workPosts.length - 1) {
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
