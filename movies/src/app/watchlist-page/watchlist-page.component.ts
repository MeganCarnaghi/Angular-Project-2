import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
})
export class WatchlistPageComponent implements OnInit {
  watchlist: any[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getAndSetWatchList();
  }

  getAndSetWatchList() {
    this.watchlist = this.movieService.retrieveWatchList();
  }

  onRemoveFromWatchlist(movie: any) {
    this.movieService.toggleWatchList(movie);
    this.getAndSetWatchList();
  }
}
