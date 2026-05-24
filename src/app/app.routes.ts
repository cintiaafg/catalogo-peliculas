import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Movies } from './movies/movies';
import { Movie } from './movie/movie';
import { AddMovie } from './add-movie/add-movie';
import { EditMovie } from './edit-movie/edit-movie';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'movies', component: Movies },
  { path: 'movie/:id', component: Movie },
  { path: 'add-movie', component: AddMovie },
  { path: 'edit-movie/:id', component: EditMovie }
];