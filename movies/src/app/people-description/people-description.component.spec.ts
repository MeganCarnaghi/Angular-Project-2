import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleDescriptionComponent } from './people-description.component';

describe('PeopleDescriptionComponent', () => {
  let component: PeopleDescriptionComponent;
  let fixture: ComponentFixture<PeopleDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
