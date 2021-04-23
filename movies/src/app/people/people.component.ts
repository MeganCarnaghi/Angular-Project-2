import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { People } from '../interfaces/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  popularPeople: People[] | null = null;

  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.service.getPopularPeople().subscribe((response: any) => {
      console.log(response.results);
      this.popularPeople = response.results;
    });
  }

}
