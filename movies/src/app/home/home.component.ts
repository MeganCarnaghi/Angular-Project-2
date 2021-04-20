import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movieResults: any;
  watchlist: any[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {}

  onSearchSubmit(form: NgForm) {
    this.movieService
      .searchMovies(form.form.value.searchTerm)
      .subscribe((response: any) => {
        this.movieResults = response;
      });
  }
}
