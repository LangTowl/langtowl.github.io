import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../modules/landing-page/landing-page/landing-page.component';
import { AboutMeComponent } from '../modules/about-me/about-me/about-me.component';
import { ProjectsComponent } from '../modules/projects/projects/projects.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'about-me', component: AboutMeComponent
  },
  {
    path: 'projects', component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
