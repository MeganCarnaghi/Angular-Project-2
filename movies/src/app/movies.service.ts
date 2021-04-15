import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = 'c92a26a58678fac95ac049b1e5e1d7e4';
  searchMoviesUrl: string = 'https://api.themoviedb.org/3/search/movie';
  latestMoviesUrl: string = 'https://api.themoviedb.org/3/search/movie/latest';
  popularMoviesUrl: string =
    'https://api.themoviedb.org/3/search/movie/popular';
  upcomingMoviesUrl: string =
    'https://api.themoviedb.org/3/search/movie/upcoming';

  constructor(private http: HttpClient) {}
}
