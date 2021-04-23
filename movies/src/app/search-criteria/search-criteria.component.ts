import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {}

  emitSearchEvent(form: NgForm) {
    this.searchEvent.emit(form);
  }
}
