import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Pokemon from 'pokemon-images';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  pokedexList;
  page = 1;
  name;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.next();
  }
  next(url?) {
      if (!url) {
          url = 'https://pokeapi.co/api/v2/pokemon/';
      }
      this.http.get(url)
          .pipe()
          .subscribe(
              (data) => {
                  this.pokedexList = data;
              }
          );
  }

  getImages(name) {
      return Pokemon.getSprite(name);
  }

  searchByName() {
      this.router.navigateByUrl('/details/' + this.name);
  }
}
