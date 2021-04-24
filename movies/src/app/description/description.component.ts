import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  movie: any;

  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.movieService.getDescription(param.id).subscribe(response => {
        this.movie = response;
         console.log(response)
       })
     })
  }
};