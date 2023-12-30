import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProjectsComponent} from "./projects/projects.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {ToDoApplicationComponent} from "./to-do-application/to-do-application.component";
import {SniperListComponent} from "./sniper-list/sniper-list.component"
import {SoccermatchesComponent} from "./soccermatches/soccermatches.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'ToDoApplication', component: ToDoApplicationComponent },
  { path: 'sniperlist', component: SniperListComponent },
  { path: 'soccermatches', component: SoccermatchesComponent },

  { path: '', redirectTo: '/page1', pathMatch: 'full' }, // Redirect to page1 as the default route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
