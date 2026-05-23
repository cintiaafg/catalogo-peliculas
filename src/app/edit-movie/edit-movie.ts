import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie';

@Component({
  selector: 'app-edit-movie',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-movie.html',
  styleUrl: './edit-movie.css'
})

export class EditMovie {

  movie:any = {};

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {

    const id = this.route.snapshot.params['id'];

    this.movieService.getMovie(id).subscribe((data) => {
      this.movie = data;
    });

  }

  updateMovie() {

this.movieService.updateMovie(this.movie.id, this.movie)
  .subscribe({
    next: (response: any) => {
      console.log(response);
      alert('Película actualizada');
    },

    error: (err: any) => {
      console.log(err);
    }
  });

  }
}