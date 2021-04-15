import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
})
export class SearchCriteriaComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<NgForm>();

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {}

  emitSearchEvent = (form: NgForm) => {
    this.searchEvent.emit(form);
  };
}
