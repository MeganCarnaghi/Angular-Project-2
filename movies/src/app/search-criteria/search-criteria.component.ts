import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<NgForm>();
  @Input() movie: any | null;
  movieResults: any;
  genres: Observable<any> | null = null;
  selectedGenre: number | null = null;
  ratings: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  selectedRating: number | null = null;

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.genres = this.movieService.getMovieGenre();
  }

  emitSearchEvent(form: NgForm) {
    this.searchEvent.emit(form);
    console.log(this.selectedGenre);
  }
}
