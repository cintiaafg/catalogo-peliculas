/*import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies';
import { MovieComponent } from './movie/movie';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent }
];*/

import { Routes } from '@angular/router';
import { Movies } from './movies/movies';
import { Movie } from './movie/movie';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: Movies },
  { path: 'movie/:id', component: Movie }
];