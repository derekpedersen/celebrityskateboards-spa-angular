import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { States } from './state.model';
import { SkateparkService } from '../skatepark/skatepark.service';
import { Cities } from '../cities/city.model';

@Component({
  selector: 'states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  public isLoading: boolean = true;
  public isSelected: boolean = false;
  public states: States;
  public state: String;
  public errorMessage: string;

  constructor(
    //private route: ActivatedRoute,
    private service: SkateparkService
  ) {
    this.states = this.service.states;
   }

  ngOnInit() {
    //this.state = this.route.snapshot.params.state;
    //console.log(this.route.snapshot.params.state);
    // this.states = this.service.states;
    this.loadstates();
  }

  public loadstates() {
    // this.isLoading = true;
    // this.service.getSkateparkStates()
    //   .subscribe(result => {
    //     this.states = result;
    //     this.isLoading = false;
    //   }, error => {
    //     this.errorMessage = <any>error;
    //     this.isLoading = false;
    //   });
    this.states = this.service.states;
  }

  public open(state: string): boolean {
    // TODO: clean this up
    if ((this.state !== undefined && state !== undefined) && (this.state.toLowerCase() === state.toLowerCase())) {
      return true;
    }
    return false;
  }
}
