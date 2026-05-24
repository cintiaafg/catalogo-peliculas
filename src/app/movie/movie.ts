import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})
export class Movie {

  movie: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getMovie(id).subscribe((data: any) => {
      this.movie = data;
    });
  }

  deleteMovie() {
    if (confirm('¿Deseas eliminar esta película?')) {
      this.movieService.deleteMovie(this.movie.id).subscribe(() => {
        alert('Película eliminada correctamente');
        this.router.navigate(['/movies']);
      });
    }
  }
}