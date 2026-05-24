import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {

  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data;
    });
  }

  deleteMovie(id: number) {
    if (confirm('¿Deseas eliminar esta película?')) {
      this.movieService.deleteMovie(id).subscribe({
        next: () => {
          alert('Película eliminada correctamente');
          this.getMovies();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }
  }
}