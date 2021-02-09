import { Component, OnInit, Input } from '@angular/core';
import { Cities } from './city.model';
import { SkateparkService } from '../skateparks/skatepark.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'cities-sidenav',
  templateUrl: './cities-sidenav.component.html',
  styleUrls: ['./cities-sidenav.component.scss']
})
export class CitiesSidenavComponent implements OnInit {

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
        this.loadCities(this.state, this.city);
      }
    });
  }

  public loadCities(state: string, city: string) {
    this.isLoading = true;
    this.service.getSkateparksGroupedByCityWithinState(state)
      .subscribe(result => {
        this.cities = new Map();
        this.cities = result;
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
