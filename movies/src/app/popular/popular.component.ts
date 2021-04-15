import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieListComponent } from '../movie-list/movie-list.component';
import {MoviesService} from '../movies.service';
import {Movie} from '../Interfaces/Movie'

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  popularMovies: Movie [] | null = null;

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.service.getPopularMovies()
    .subscribe((response: any) => {
      console.log(response.results)
      this.popularMovies = response.results;
    });
  }

}
