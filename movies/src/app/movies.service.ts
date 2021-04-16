import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = 'fb4b364d4422884cdbd5d864fb8cafa0';
  searchMoviesUrl: string = 'https://api.themoviedb.org/3/search/movie';
  movieGenreUrl: string = 'https://api.themoviedb.org/3/genre/movie/list';
  nowPlayingMoviesUrl: string =
    'https://api.themoviedb.org/3/movie/now_playing';
  popularMoviesUrl: string = 'https://api.themoviedb.org/3/movie/popular';
  upcomingMoviesUrl: string = 'https://api.themoviedb.org/3/movie/upcoming';

  constructor(private http: HttpClient) {}

  searchMovies = (searchTerm: string): any => {
    return this.http.get(this.searchMoviesUrl, {
      params: {
        api_key: this.apiKey,
        query: searchTerm,
      },
    });
  };

  getPopularMovies = (): any => {
    console.log('I heard this');
    return this.http.get(this.popularMoviesUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  };

  getNowPlayingMovies = (): any => {
    console.log('this is upcoming movies');
    return this.http.get(this.upcomingMoviesUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  };

  getUpcomingMovies = (): any => {
    console.log('this is now playing movies');
    return this.http.get(this.nowPlayingMoviesUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  };
}
