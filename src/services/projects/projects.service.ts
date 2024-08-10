import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface ProjectPost {
  title: string,
  images: string[],
  content: string,
  link_label: string,
  link: string
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  /* Class Fields */
  private project_posts: ProjectPost[] = [
    {
      title: 'A Prettier Wordle',
      images: [
        '../../../assets/images/prettier-1.png',
        '../../../assets/images/prettier-2.png',
        '../../../assets/images/prettier-3.png',
      ],
      content: 
      `A Prettier Wordle is a clone of the popular New York Times game Wordle. It functions in nearly the same way: one five letter word is chosen at random from a list of 2,317, users then have six guesses to determine what the word is. After each guess the game board and keyboard update to indicate which letters in their guess match the mystery word. This clone features a modern twist with a unique UI, while still preserving the core functionality of the game.
      
This clone was created using Apples Swift & SwiftUI framework. The complete project can be found using the GitHub link below.
      `,
      link_label: 'Link To GitHub Repository',
      link: '/'
    },
    {
      title: 'NXT SET',
      images: ['../../../assets/svg/debug-svg/person.circle.svg'],
      content: `In the process of developing an IOS app targeted at high level athletes as well as personal trainers in the fitness industry. The app allows users to build a library of workouts that can be used to design unique training programs. In addition to program building, the app will collect data on lift completion, workout consistency, and eventually biometrics to quantify lift efficiency. The app packages this information in a user friendly interface that helps users reach progressive overload and mitigate plateaus.

This project is nearing the stage of a minimum viable product, with plans of releasing a beta to a small group of testers.

This project was built using Apples Swift & SwiftUI framework. `,
      link_label: '',
      link: ''
    },
    {
      title: 'langtowl.com',
      images: ['../../../assets/svg/debug-svg/person.circle.svg'],
      content: `This website was made primary to serve as a companion to my resume, in addition to being an opportunity to improve my skills in web development. The front end of this site is written using Angular JS, TypeScript, HTML, and SCSS. It is hosted on GitHub pages, with plans of a migration to AWS *******.`,
      link_label: '',
      link: ''
    },
    {
      title: 'Verilog Stop Watch',
      images: ['../../../assets/svg/debug-svg/person.circle.svg'],
      content: 'This is the content for project 5.',
      link_label: '',
      link: ''
    },
    {
      title: 'Project T.Y.',
      images: ['../../../assets/svg/debug-svg/person.circle.svg'],
      content: 'This is the content for project 6.',
      link_label: '',
      link: ''
    },
    {
      title: 'Keyboard Design',
      images: ['../../../assets/svg/debug-svg/person.circle.svg'],
      content: 'This is the content for project 7.',
      link_label: '',
      link: ''
    },
    {
      title: 'Manta Fin Co.',
      images: ['../../../assets/svg/debug-svg/person.circle.svg'],
      content: 'This is the content for project 8.',
      link_label: '',
      link: ''
    },
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
