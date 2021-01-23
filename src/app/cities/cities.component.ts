import { Component, OnInit, Input } from '@angular/core';
import { Cities } from './city.model';
import { SkateparkService } from '../skatepark/skatepark.service';

@Component({
  // tslint:disable-next-line: component-selector
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
    // private route: ActivatedRoute,
    private service: SkateparkService
  ) { }

  ngOnInit() {
    if (this.state === undefined || this.state === null || (this.state.length === 0)) {
      // this.state = this.route.snapshot.params.state;
    }
    console.log(this.state);
    // this.city = this.route.snapshot.params.city;
    console.log(this.city);
    if (this.cities === undefined || this.cities === null || this.cities.size === 0) {
      this.loadCities(this.state);
    }
  }

  public loadCities(state: string) {
    this.isLoading = true;
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
