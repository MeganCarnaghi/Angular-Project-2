import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
  } 
}
