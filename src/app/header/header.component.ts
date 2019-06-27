import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name;
  constructor( private router: Router) { }

  ngOnInit() {
  }


    searchByName() {
        this.router.navigateByUrl('/details/' + this.name);
    }
}
