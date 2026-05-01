import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
imports: [CommonModule, RouterModule]

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
    this.http.get('http://127.0.0.1:8000/api/movies')
      .subscribe((data: any) => {
        console.log(data); // 👈 IMPORTANTE
        this.movies = data;
      });
  }
}