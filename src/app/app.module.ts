import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from '../modules/landing-page/landing-page.module';
import { AboutMeModule } from '../modules/about-me/about-me.module';
import { NavBarModule } from '../modules/nav-bar/nav-bar.module';
import { ProjectsModule } from '../modules/projects/projects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    AboutMeModule,
    NavBarModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
