import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  popularMovies: Movie[] | null = null;

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.getPopularMovies().subscribe((response: any) => {
      this.popularMovies = response.results;
    });
  }
}
