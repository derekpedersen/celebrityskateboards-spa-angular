import { Component, OnInit, Input } from '@angular/core';
import { City } from './city.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  @Input() cities: City[];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.city);
  }

}
