import { Component, OnInit, Input } from '@angular/core';
import { Cities } from './city.model';
import { SkateparkService } from '../skateparks/skatepark.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  @Input() cities: Cities;
  @Input() state: string;
  @Input() subnav = false;

  public city: string;
  public isLoading: boolean;
  public errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private service: SkateparkService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      if (routeParams.state !== undefined && routeParams.state !== null) {
        this.state = routeParams.state;
      }
      if (routeParams.city !== undefined && routeParams.city !== null) {
        this.city = routeParams.city;
      }
      if (this.cities === undefined || this.cities === null) {
        this.loadCity(this.state, this.city);
      }
    });
  }

  public loadCity(state: string, city: string) {
    this.isLoading = true;
    this.service.getSkateparksByStateAndCity(state, city)
      .subscribe(result => {
        this.cities = new Map();
        this.cities.set(city, result);
        this.isLoading = false;
      }, error => {
        this.errorMessage = <any>error;
        this.isLoading = false;
      });
  }

  public open(city: string): boolean {
    if ((this.city !== undefined && city !== undefined) && (this.city.toLowerCase() === city.toLowerCase())) {
      return true;
    }
    return false;
  }
}
