import { Injectable } from '@angular/core';

export interface WorkExperiencePost {
  company: string,
  position: string,
  company_logo: string,
  employement_duration: string,
  content: string,
  images: string[],
  skills: string[]
}

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  /* Class Fields */
  private work_posts: WorkExperiencePost[] = [
    {
      company: 'Duke Energy',
      position: 'Front End Software Engineer',
      company_logo: '../../../assets/images/duke-logo.png',
      employement_duration: 'May 2024 - Aug. 2024',
      content: `During the summer between my Junior and Senior year of university, I worked as an intern for Duke Energy, a Fortune 150 utility company providing gas and electricity in over half a dozen states. 

I was initially hired as a Distributions Engineer, where my role was to assist engineers in creating designs for new grid extensions. However, a few weeks into my internship, I was in a meeting where a fellow engineer was expressing frustrations with an aspect of their work flow. They were not given the tools to electronically create an estimate for the customer while they were our in the field. Instead, they had to take lengthy field notes, and create the estimate once they returned to the office, which could add days to the design process. After hearing their frustration, I offered to use my app development skills to build a tool that allows engineers to complete this task while out in the field. 
      
After creating a pitch deck and getting approval from my manager, I spent 3 weeks building a minimum viable product iOS app that I would present to Duke Energy's R&D team called the Lighthouse. 
      
After presenting my work to the Lighthouse, they decided to hire me for the rest of my internship to implement this new product into an existing application called Design Lite. I spent the remainder of my internship refactoring my iOS prototype into a progressive web application using Angular JS. `,
      images: [
        '../../../assets/images/ciac-1.png',
        '../../../assets/images/ciac-2.png',
        '../../../assets/images/ciac-3.png',
        '../../../assets/images/ciac-4.png',
        '../../../assets/images/ciac-5.png',
        '../../../assets/images/ciac-6.png',
        '../../../assets/images/ciac-7.png',
        '../../../assets/images/ciac-8.png',
        '../../../assets/images/ciac-9.png',
        '../../../assets/images/ciac-10.png',
        '../../../assets/images/ciac-11.png',
        '../../../assets/images/ciac-12.png',
        '../../../assets/images/ciac-13.png',
        '../../../assets/images/ciac-14.png',
        '../../../assets/images/ciac-15.png',
        '../../../assets/images/ciac-16.png',
        '../../../assets/images/ciac-17.png',
        '../../../assets/images/ciac-18.png',
        '../../../assets/images/ciac-19.png',
        '../../../assets/images/ciac-20.png',
        '../../../assets/images/ciac-21.png'
      ],
      skills: [
        'Angular JS, TypeScript, SCSS, HTML',
        'Source control using Git',
        'Project management practices using Jira'
      ]
    }
  ]

  private current_post: number = 0;

  constructor() { }

  /* Class Methods */
  fetchWorkPosts(): WorkExperiencePost[] {
    return this.work_posts;
  }

  fetchCurrentPost(): number {
    return this.current_post;
  }

  updateCurrentPost(index: number): void {
    this.current_post = index;

    console.log("Navigating to: ", this.work_posts[this.current_post].position);
  }
}
