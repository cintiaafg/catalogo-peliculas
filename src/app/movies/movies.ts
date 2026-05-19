/*import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movies.html',
  styleUrls: ['./movies.css']
})
export class MoviesComponent implements OnInit {

  movies: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
   this.http.get<any[]>('http://localhost:8000/api/movies')
      .subscribe(data => {
        console.log(data);
        this.movies = data;
      });
  }
}*/



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
    this.movieService.getMovies().subscribe((data:any) => {
      console.log(data);  
      this.movies = data;
    });
  }
}