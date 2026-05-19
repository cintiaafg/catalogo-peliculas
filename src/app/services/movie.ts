/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Movie {}*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private apiURL = 'http://127.0.0.1:8000/api/movies';

  constructor(private http: HttpClient) {}

  // Obtener todas las películas
  getMovies(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  // Obtener película por ID
  getMovie(id: number): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`);
  }
}
