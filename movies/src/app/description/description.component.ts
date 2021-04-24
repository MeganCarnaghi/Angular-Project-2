import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  movie: Observable<any> | any | null = null;

  // movie: any;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.movieService.getDescription(param.id).subscribe((response) => {
        this.movie = response;
        console.log(response);
      });
    });
  }
}
