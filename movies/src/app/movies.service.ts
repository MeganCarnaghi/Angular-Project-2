import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = 'c92a26a58678fac95ac049b1e5e1d7e4';
  searchUrl: string = 'https://api.themoviedb.org/3/search/movie';

  constructor(private http: HttpClient) {}
}
