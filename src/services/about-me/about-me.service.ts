import { Injectable } from '@angular/core';

export interface AboutMePost {
  title: string,
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  // Class fields
  private about_me_posts: AboutMePost[] = [
    {
      title: 'Langs Bio', 
      content: 'Langs Bio Placeholder'
    },
    {
      title: 'Career Objective', 
      content: 'Career Objective Placeholder'
    },
    {
      title: 'Work Experience', 
      content: 'Work Experience Placeholder'
    },
    {
      title: 'Education', 
      content: 'Education Placeholder'
    }
  ];
  private current_post: number = 0;
  

  constructor() { }

  /* Class Methods */

  // Fetches all post
  fetchAboutMePosts(): AboutMePost[] {
    return this.about_me_posts;
  }

  // Fetches current post being viewed by index
  fetchCurrentPost(): number {
    return this.current_post;
  }

  // Update current post being viewed by index
  updateCurrentPost(index: number): void {
    this.current_post = index;

    console.log("Navigating to:", this.about_me_posts[this.current_post].title, this.current_post);
  }
}
