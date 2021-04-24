import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css'],
})
export class WatchlistPageComponent implements OnInit {
  @Input() movieRef: any;

  watchlist: any[] = [];

  movie: Observable<any> | any | null = null;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.watchlist = this.movieService.retrieveWatchList();

    this.route.paramMap
      .pipe(switchMap((p) => this.movieService.getMovieWithId(p.get('id'))))
      .subscribe((movie) => {
        this.movie = movie;
      });
  }

  removeMovieFromWatchlist(i: number): void {
    this.watchlist.splice(i, 1);
  }
}
