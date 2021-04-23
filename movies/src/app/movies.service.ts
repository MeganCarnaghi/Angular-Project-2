import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = 'fb4b364d4422884cdbd5d864fb8cafa0';
  searchMoviesUrl: string = 'https://api.themoviedb.org/3/discover/movie';
  latestMoviesUrl: string = 'https://api.themoviedb.org/3/movie/latest';
  popularMoviesUrl: string = 'https://api.themoviedb.org/3/movie/popular';
  popularPeopleUrl: string = 'https://api.themoviedb.org/3/person/popular';
  movieGenreUrl: string = 'https://api.themoviedb.org/3/genre/movie/list';
  nowPlayingMoviesUrl: string =
    'https://api.themoviedb.org/3/movie/now_playing';



  watchlist: any[] = [];

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string, genre: number | null): any {
    if(!genre){
      return this.http.get(this.searchMoviesUrl, {
        params: {
          api_key: this.apiKey,
          query: searchTerm,

  
        },
      });
    }
    return this.http.get(this.searchMoviesUrl, {
      params: {
        api_key: this.apiKey,
        query: searchTerm,
       with_genres: genre.toString()

      },
    });
  }

  getPopularMovies(): any {
    return this.http.get(this.popularMoviesUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  }

  getNowPlayingMovies(): any {
    return this.http.get(this.nowPlayingMoviesUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  }

  getPopularPeople(): any {
    return this.http.get(this.popularPeopleUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  }

  getDescription = (): any => {
    console.log('description should pop up here');
    return this.http.get(this.searchMoviesUrl, {
      params: {
        api_key: this.apiKey,
      },
    });
  };

  addMovieToWatchlist(movie: any): void {
    this.watchlist.push(movie);
  }

  retrieveWatchList(): any[] {
    return this.watchlist;
  }

  checkWatchlist(movie: any): boolean {
    return this.watchlist.includes(movie);
  }
  getMovieWithId(id: string | null): any {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fb4b364d4422884cdbd5d864fb8cafa0`
    );
  }
  getPeopleWithId(id: string | null): any {
    return this.http.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=fb4b364d4422884cdbd5d864fb8cafa0`
    );
  }

  getMovieGenre(){
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=fb4b364d4422884cdbd5d864fb8cafa0').pipe(map((response:any) => response.genres))
  }
}
