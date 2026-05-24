import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
    cover: '',
    year: ''
  };

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {}

  saveMovie() {
    this.movieService.addMovie(this.movie).subscribe(() => {
      alert('Película agregada correctamente');
      this.router.navigate(['/movies']);
    });
  }
}