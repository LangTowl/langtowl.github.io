import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface ProjectPost {
  title: string,
  images: string[],
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  /* Class Fields */
  private project_posts: ProjectPost[] = [
    {
      title: 'Project 1',
      images: ['../../../assets/svg/debug-svg/person.circle.svg'],
      content: 'This is the content for project 1.'
    }
  ]

  private current_post: number = 0;

  constructor() { }

  /* Class Methods */
  fetchProjectPosts(): ProjectPost[] {
    return this.project_posts;
  }

  fetchCurrentPost(): number {
    return this.current_post;
  }

  updateCurrentPost(index: number): void {
    this.current_post = index;

    console.log("Navigating to:", this.project_posts[this.current_post].title);
  }
}
