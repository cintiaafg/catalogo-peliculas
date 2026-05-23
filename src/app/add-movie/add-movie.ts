/*import { Component } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  imports: [],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css',
})
export class AddMovie {}*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})

export class AddMovie {

  movie = {
    title: '',
    synopsis: '',
    year: '',
    cover: ''
  };

  constructor(private movieService: MovieService) {}

  saveMovie() {
    this.movieService.addMovie(this.movie).subscribe({
      next: (data) => {
        console.log('Película agregada', data);
        alert('Película agregada correctamente');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
