import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../modules/landing-page/landing-page/landing-page.component';
import { AboutMeComponent } from '../modules/about-me/about-me/about-me.component';
import { ProjectsComponent } from '../modules/projects/projects/projects.component';
import { WorkExperienceComponent } from '../modules/work-experience/work-experience/work-experience.component';
import { ResumeComponent } from '../modules/resume/resume/resume.component';
import { ContactComponent } from '../modules/contact/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'about-me', component: AboutMeComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  },
  {
    path: 'work-experience', component: WorkExperienceComponent
  },
  {
    path: 'resume', component: ResumeComponent
  },
  {
    path: 'contact-me', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
