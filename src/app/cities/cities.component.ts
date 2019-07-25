import { Component, OnInit, Input } from '@angular/core';
import { City } from './city.model';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  @Input() cities: City[];

  constructor() { }

  ngOnInit() {
  }

}
