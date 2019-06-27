import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { ContentComponent } from './core/content/content.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { MoviesComponent } from './movies/movies.component';
import { ItemsComponent } from './items/items.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { LocationsComponent } from './locations/locations.component';
import { TypechartsComponent } from './typecharts/typecharts.component';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    PokedexComponent,
    MoviesComponent,
    ItemsComponent,
    AbilitiesComponent,
    LocationsComponent,
    TypechartsComponent,
    DetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
