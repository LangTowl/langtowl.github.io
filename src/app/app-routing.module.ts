import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../modules/landing-page/landing-page/landing-page.component';
import { AboutMeComponent } from '../modules/about-me/about-me/about-me.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'about-me', component: AboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
