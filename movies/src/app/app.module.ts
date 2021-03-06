import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PopularComponent } from './popular/popular.component';
import { FooterComponent } from './footer/footer.component';
import { TheatersComponent } from './theaters/theaters.component';
import { DescriptionComponent } from './description/description.component';
import { FilterComponent } from './filter/filter.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDescriptionComponent } from './people-description/people-description.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    MovieListComponent,
    WatchlistPageComponent,
    HomeComponent,
    HeaderComponent,
    PopularComponent,
    FooterComponent,
    TheatersComponent,
    DescriptionComponent,
    FilterComponent,
    PeopleComponent,
    PeopleDescriptionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
