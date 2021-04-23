import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = 'fb4b364d4422884cdbd5d864fb8cafa0';
  searchMoviesUrl: string = 'https://api.themoviedb.org/3/search/movie';
  discoverMoviesUrl: string = 'https://api.themoviedb.org/3/discover/movie';
  latestMoviesUrl: string = 'https://api.themoviedb.org/3/movie/latest';
  popularMoviesUrl: string = 'https://api.themoviedb.org/3/movie/popular';
  popularPeopleUrl: string = 'https://api.themoviedb.org/3/person/popular';
  movieGenreUrl: string = 'https://api.themoviedb.org/3/genre/movie/list';
  nowPlayingMoviesUrl: string =
    'https://api.themoviedb.org/3/movie/now_playing';
  



  watchlist: any[] = [];

  constructor(private http: HttpClient) {}

  searchMovies(searchTerm: string, genre: number | null, rating: number | null, year: string | null): any {
    let searchParams: any = {
      api_key: this.apiKey
    }

    if (searchTerm){
      searchParams.query = searchTerm;
      return this.http.get(this.searchMoviesUrl, {
        params: searchParams
      });
    } else {
      if(genre){
        searchParams.with_genres =  genre.toString();
      }
  
      if(rating){
        searchParams['vote_average.gte'] = rating.toString();
      }
  
      if(year){
        searchParams.year = year;
      }
  
      return this.http.get(this.discoverMoviesUrl, {
        params: searchParams
      });
    }
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



