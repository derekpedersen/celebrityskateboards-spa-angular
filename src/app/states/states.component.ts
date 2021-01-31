import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkateparkService } from '../skatepark/skatepark.service';
import { States } from './state.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  @Input() states: States;

  public isSelected = false;
  public state: String;
  public isLoading: boolean;
  public errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private service: SkateparkService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      if (routeParams.state !== undefined
        && routeParams.state !== null
        && (this.states === undefined || this.states === null)) {
        this.loadState(routeParams.state);
        this.state = routeParams.state;
      }
    });
  }

  public loadState(state: string) {
    this.isLoading = true;
    this.service.getSkateparksGroupedByCityWithinState(state)
      .subscribe(result => {
        this.states = new Map();
        this.states.set(state, result);
        this.isLoading = false;
      }, error => {
        this.errorMessage = <any>error;
        this.isLoading = false;
      });
  }

  public open(state: string): boolean {
    if ((this.state !== undefined && state !== undefined) && (this.state.toLowerCase() === state.toLowerCase())) {
      return true;
    }
    return false;
  }
}
