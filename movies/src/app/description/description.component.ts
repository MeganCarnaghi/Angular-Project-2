import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  popup: boolean = false;

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    
  }

  openDescription() {
    this.movieService.getDescription();
  }


}
