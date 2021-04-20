import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
})
export class WatchlistPageComponent implements OnInit {
  @Input() movieRef: any;

  watchlist: any[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.watchlist = this.movieService.retrieveWatchList();
  }

  removeFromWatchlist(movieRef: any): void {
    this.movieService.removeMovieFromWatchlist(movieRef);
  }
}
