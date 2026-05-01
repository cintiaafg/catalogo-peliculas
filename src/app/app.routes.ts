/*import { Routes } from '@angular/router';
export const routes: Routes = [];*/

import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies';
import { MovieComponent } from './movie/movie';

export const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' }
];