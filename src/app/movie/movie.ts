import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie.html',
  styleUrls: ['./movie.css']
})
export class MovieComponent implements OnInit {

  movie: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    console.log("ID:", id); // 👈 DEBUG

    this.http.get(`http://127.0.0.1:8000/api/movies/${id}`)
      .subscribe((data: any) => {
        console.log("DATA:", data); // 👈 DEBUG
        this.movie = data;
      });
  }
}