import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import Pokemon from 'pokemon-images';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }
  name;
  details;
  evolutions;
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap)
    this.name = this.activatedRoute.snapshot.paramMap.get("name");
    if (this.name) {
      this.getDetails();
    }

  }
    getImages() {
        return Pokemon.getSprite(this.name);
    }
  getDetails(){
     this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.name)
         .pipe()
         .subscribe(
             (data) => {
               this.details = data;
               console.log(data, 'hello world');
               this.getEvolution();
             }
         );
  }

  getEvolution() {
    this.http.get('https://pokeapi.co/api/v2/pokemon-species/1/')
        .pipe()
        .subscribe(
            (data) => {
                  console.log(data);
                  this.evolutions = data;
            }
        );
  }


}
