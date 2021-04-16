import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../Interfaces/Movie';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {

  nowPlayingMovies: Movie [] | null = null;

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.service.getNowPlayingMovies()
    .subscribe((response: any) => {
      console.log(response.results)
      this.nowPlayingMovies = response.results;
    });
  }

}
