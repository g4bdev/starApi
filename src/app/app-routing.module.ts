import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StarHomeComponent } from './star-home/star-home.component';
import { StarMovieComponent } from './star-movie/star-movie.component';
import { StarPlanetsComponent } from './star-planets/star-planets.component';
import { StarCharComponent } from './star-char/star-char.component';


const routes: Routes = [
  {path: '', component: StarHomeComponent},
  {path: 'home', component: StarHomeComponent},
  {path: 'movies', component: StarMovieComponent},
  {path: 'characters', component: StarCharComponent},
  {path: 'planets', component: StarPlanetsComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
