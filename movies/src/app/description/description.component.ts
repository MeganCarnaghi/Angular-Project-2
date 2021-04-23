import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  movie: Observable<any> | null = null;

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
     this.route.paramMap.pipe(switchMap(p => this.movieService.getDescription(p.get('id'))))
      .subscribe((movie) => (this.movie = movie));
  }
}