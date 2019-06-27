import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component'
import { PokedexComponent } from './pokedex/pokedex.component';
import { MoviesComponent } from './movies/movies.component';
import { ItemsComponent } from './items/items.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { LocationsComponent } from './locations/locations.component';
import { TypechartsComponent } from './typecharts/typecharts.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: PokedexComponent},
  {path: 'pokedex', component: PokedexComponent},
  // {path: 'movies', component: MoviesComponent},
  // {path: 'items', component: ItemsComponent},
  // {path: 'abilities', component: AbilitiesComponent},
  // {path: 'locations', component: LocationsComponent},
  // {path: 'typechart', component: TypechartsComponent},
  {path: 'details/:name', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
