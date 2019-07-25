import { Component, OnInit } from '@angular/core';
import { City } from './city.model';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  public cities: City[];

  constructor() { }

  ngOnInit() {
  }

}
