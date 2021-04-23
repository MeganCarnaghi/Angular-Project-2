import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit {
  movie: Observable<any> | any | null = null;
  p: Movie | null = null;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((p) => this.movieService.getMovieWithId(p.get('id'))))
      .subscribe((movie) => (this.movie = movie));
  }

  openDescription() {
    this.movieService.getDescription();
  }
}
