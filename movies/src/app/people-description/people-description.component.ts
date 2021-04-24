import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../movies.service';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-description',
  templateUrl: './people-description.component.html',
  styleUrls: ['./people-description.component.css'],
})
export class PeopleDescriptionComponent implements OnInit {
  people: Observable<any> | any | null = null;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((p) => this.movieService.getPeopleWithId(p.get('id'))))
      .subscribe((people) => {
        console.log(people);
        this.people = people;
      });
  }
}
