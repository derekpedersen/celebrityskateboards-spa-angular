import { Component, OnInit, Input } from '@angular/core';
import { City } from './city.model';
import { ActivatedRoute } from '@angular/router';
import { SkateparksService } from '../skateparks/skateparks.service';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  @Input() cities: City[];
  public state: string;
  public city: string;
  public isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private service: SkateparksService
  ) { }

  ngOnInit() {
    this.state = this.route.snapshot.params.state;
    console.log(this.state)
    this.city = this.route.snapshot.params.city;
    console.log(this.city);
  }

  public loadCities() {
    this.isLoading = true;
    // TODO: this should make a call to get the cities for a specific state
    //       it will require an update to the skatepark-api for states/:state to return only the cities
    this.service.getSkateparkStates()
      .subscribe(result => {
        //this.states = result;
        this.isLoading = false;
      }, error => {
        //this.errorMessage = <any>error;
        this.isLoading = false;
      });
  }
}
