import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { SniperListComponent } from './sniper-list/sniper-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ToDoApplicationComponent } from './to-do-application/to-do-application.component';
import { SoccermatchesComponent } from './soccermatches/soccermatches.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SniperListComponent,
    ProjectsComponent,
    GalleryComponent,
    ToDoApplicationComponent,
    SoccermatchesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgOptimizedImage,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



