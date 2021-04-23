import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
  }

<<<<<<< HEAD


  
}
=======
  // FilterComponent.movielist(Rating, Genre, Length) {
  //   this.movieService.movielist();
  // }

  // checkWatchlistForMovie(movieRef: anyRating) {
  //   return this.movieService.checkWatchlist(movieRef);
  // }

  // checkWatchlistForMovie(movieRef: anyGenre) {
  //   return this.movieService.checkWatchlist(movieRef);
  // }

  // checkWatchlistForMovie(movieRef: anyLength) {
  //   return this.movieService.checkWatchlist(movieRef);
  // }

  // addToFilteredWatchList(movieRef: any) {
  //   this.movieService.addMovieToFilteredWatchlist(movieRef);
  //   console.log(movieRef);
  // }
}
>>>>>>> eecf56e8abf4e673df9743db0b6a51fab778e82b
