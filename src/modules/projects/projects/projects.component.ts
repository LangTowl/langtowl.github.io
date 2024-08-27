import { Component, OnInit, HostListener} from '@angular/core';
import { NavBarItems, ViewControllerService } from '../../../services/view-controler/view-controller.service';
import { ProjectPost, ProjectsService } from '../../../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  /* Class Fields */
  private screen_width: number = -1;

  constructor(
    private view_controller_service: ViewControllerService,
    private projects_service: ProjectsService 
  ) { 
    this.screen_width = window.innerWidth;
  }

  ngOnInit() {
    // Ensures that if reload happens on non home screen, nav bar is showing nav bar is showing and showing the correct tab
    this.view_controller_service.updateNavBarState(true);
    this.view_controller_service.updateNavBarItem(NavBarItems.Projects);
    this.updateScreenWidth();
  }

  /* Component Methods */
  get projectPosts(): ProjectPost[] {
    return this.projects_service.fetchProjectPosts();
  }

  get currentPost(): number {
    return this.projects_service.fetchCurrentPost();
  }

  updateCurrentPost(index: number): void {
    this.projects_service.updateCurrentPost(index);
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

    if (action == 'down' && this.currentPost < this.projectPosts.length - 1) {
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
