import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-movie.html',
  styleUrl: './edit-movie.css'
})
export class EditMovie {

  movie: any = {};

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

  updateMovie() {
    this.movieService.updateMovie(this.movie.id, this.movie).subscribe(() => {
      alert('Película actualizada correctamente');
      this.router.navigate(['/movie', this.movie.id]);
    });
  }
}