import { Component, OnInit, Input } from '@angular/core';
import { Cities } from './city.model';
//import { ActivatedRoute } from '@angular/router';
import { SkateparkService } from '../skatepark/skatepark.service';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  @Input() cities: Cities;
  @Input() state: string;
  public city: string;
  public isLoading: boolean;
  public errorMessage: string;

  constructor(
    //private route: ActivatedRoute,
    private service: SkateparkService
  ) { }

  ngOnInit() {
    if (this.state === undefined || this.state === null || (this.state.length === 0)) {
      //this.state = this.route.snapshot.params.state;
    }
    console.log(this.state)
    //this.city = this.route.snapshot.params.city;
    console.log(this.city);
    if (this.cities === undefined || this.cities === null || this.cities.size === 0) {
      this.loadCities(this.state)
    }
  }

  public loadCities(state: string) {
    this.isLoading = true;
    // TODO: this should make a call to get the cities for a specific state
    //       it will require an update to the skatepark-api for states/:state to return only the cities
    this.service.getSkateparkCities(state)
      .subscribe(result => {
        this.cities = result;
        this.isLoading = false;
      }, error => {
        this.errorMessage = <any>error;
        this.isLoading = false;
      });
  }
}
