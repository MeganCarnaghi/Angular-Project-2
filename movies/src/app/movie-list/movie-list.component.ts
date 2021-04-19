import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Output() addToWatchlistEvent = new EventEmitter<any>();
  @Output() removeFromWatchlistEvent = new EventEmitter<void>();
  @Input() movieRef: any;
  @Input() watchlistRef!: any[];

  watchlist: any[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {}

  emitAddToWatchlistEvent(form: NgForm): void {
    this.addToWatchlistEvent.emit(form);
  }

  emitRemoveFromWatchlistEvent(movie: any): void {
    this.removeFromWatchlistEvent.emit(movie);
  }

  checkwatchList(movie: any): boolean {
    return this.movieRef.some((item: any) => {
      return item.id === movie.id;
    });
  }
}
