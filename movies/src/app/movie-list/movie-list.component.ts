import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Input() movieRef: any;
  watchlist: any[] = [];
  showInfo: boolean = false;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {}

  addToWatchList(movieRef: any) {
    this.movieService.addMovieToWatchlist(movieRef);
  }

  checkWatchlistForMovie(movieRef: any) {
    return this.movieService.checkWatchlist(movieRef);
  }

  showMovieInfo(): void {
    this.showInfo = !this.showInfo;
  }
}
