import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  @Output() watchlistEvent = new EventEmitter<any>();
  @Input() movieRef: any;

  watchlist: any[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {}
}
