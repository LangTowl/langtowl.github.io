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
      content: `I grew up surfing year-round in the frigid waters of Maine and New England. Living on this pristine coast fostered a deep respect for nature and the marine ecosystems on which our modern world depends. This connection to the ocean inspired me to pursue a STEM education to one day apply these skills to initiatives focused on environmental preservation. 
      
      While I still care deeply about the ocean, my interests have evolved into different STEM applications. I have always been fascinated by difficult technical problems and the bright minds who solve them. Few industries have to solve more complex problems than the aerospace and defense industry. I aspire to work within a team of engineers tackling such problems, allowing me to grow my skills in software development, hardware design, and sustainability.`
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
