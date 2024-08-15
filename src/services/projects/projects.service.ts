import { Injectable } from '@angular/core';

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
      images: ['../../../assets/images/nxtset-screenshot.png'],
      content: `In the process of developing an IOS app targeted at high level athletes as well as personal trainers in the fitness industry. The app allows users to build a library of workouts that can be used to design unique training programs. In addition to program building, the app will collect data on lift completion, workout consistency, and eventually biometrics to quantify lift efficiency. The app packages this information in a user friendly interface that helps users reach progressive overload and mitigate plateaus.

This project is nearing the stage of a minimum viable product, with plans of releasing a beta to a small group of testers.

This project was built using Apples Swift & SwiftUI framework. `,
      link_label: '',
      link: ''
    },
    {
      title: 'langtowl.com',
      images: ['../../../assets/svg/angular-icon.svg'],
      content: `This website was made primary to serve as a companion to my resume, in addition to being an opportunity to improve my skills in web development. The front end of this site is written using Angular JS, TypeScript, HTML, and SCSS. It is hosted on GitHub pages, with plans of a migration to AWS Amplify.`,
      link_label: '',
      link: ''
    },
    {
      title: 'Verilog Stop Watch',
      images: ['../../../assets/svg/cpu-icon.svg'],
      content: `This Verilog project was conducted in parallel with my Digital Logic Design course at university. The goal was to program a functional military-style stop-watch entirely from Verilog. The code was written and compiled using Quartus Prime before being uploaded to an FPGA for testing. The watches functionality was limited to a start, stop, and restart controls. The watch could count anywhere from 1 minute to 1 hour.

The functionality of the watch was achieved by creating several Verilog modules such as a half and full adder, a ripple carry adder, a BCD controller, clock divider, D and T flip-flop, 4-bit register, and the LCD controller. The complete code can be found at the link to my GitHub below.`,
      link_label: '',
      link: ''
    },
    {
      title: 'Project T.Y.',
      images: ['../../../assets/svg/debug-svg/person.circle.svg'],
      content: `Project T.Y. (The Youth) was an initiative led by myself and several other youth ambassadors for Parley for the Oceans. Our goal was to produce a seven-episode documentary series that follows young athletes and activists from different indigenous communities around that Pacific. The series would pair exhilarating big wave surfing content, with actionable solutions to climate and pollution issues pioneered by these young activists.

Viewers at home would follow along as each episode is focused on a different community in the pacific, highlighting the impacts of climate change and pollution. Episodes would conclude with steps viewers can take at home to participate in cleaner living, and how they can get involved in their own communities.

Unfortunately, Project T.Y. was indefinetly put on hold due to the pandemic and travel restrictions in the region of interest.`,
      link_label: '',
      link: ''
    },
    {
      title: 'Keyboard Design',
      images: ['../../../assets/svg/keyboard-icon.svg'],
      content: `This project began when schools transitioned to online, and classes were being held virtually. When I found out I was going to be spending a lot more time at home, I decided to optimize my setup by designing a fully function mechanical keyboard using open-source components. The goal was to have different layers of functionality depending on the software or app being used.

The PCB was designed using Autodesk’s Eagle CAD. THT components like diodes, resistors, switches, and other components were soldered to the board by hand. The microprocessor used to control the PCB was an Arduino Micro driven by an ATMEGA32-U4 chip. The software was written in Arduino’s modified C++ language.`,
      link_label: '',
      link: ''
    },
    {
      title: 'Manta Fin Co.',
      images: ['../../../assets/svg/debug-svg/person.circle.svg'],
      content: `Manta Fin Co. was a small startup that I worked on creating. The goal was to design and manufacture high performance surfboard fins out of upcycled ocean plastics and distribute them to local shops in the Northeast. I had designed a fleet of several fins ranging from 3-fin thruster set ups, 4-fin quad setups, 2-fin twin setups, and a few longboard single fins.

Each design was calibrated using the National Advisory Committee for Aeronautics airfoil database. The fins were modeled using Fusion 360’s surface modeling before being tested in SolidWork’s simulation engine. They would then be prototyped using either 3D printing or CNC milling, before being tested in the ocean.

Manta Fin Co. was nearly ready for launch, we had begun the process of filing for an L.L.C and were working on setting up contracts with local surf shops. It was at this point when the cost of manufacturing using injection molding became inaccessible, so Manta Fin Co. had to be put on hold indefinetly.`,
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
