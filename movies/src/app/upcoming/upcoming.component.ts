import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../interfaces/movie';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {
  upcomingMovies: Movie[] | null = null;

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.getUpcomingMovies().subscribe((response: any) => {
      console.log(response.results);
      this.upcomingMovies = response.results;
    });
  }
}
