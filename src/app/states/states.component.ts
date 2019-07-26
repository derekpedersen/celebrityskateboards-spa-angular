import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { State } from './state.model';
import { SkateparksService } from '../skateparks/skateparks.service';

@Component({
  selector: 'states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  public isLoading: boolean = true;
  public isSelected: boolean = false;
  public states: State[];
  public state: String;
  public errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private service: SkateparksService
  ) { }

  ngOnInit() {
    this.state = this.route.snapshot.params.state;
    console.log(this.route.snapshot.params.state);
    this.loadstates();
  }

  public loadstates() {
    this.isLoading = true;
    this.service.getSkateparkStates()
      .subscribe(result => {
        this.states = result;
        this.isLoading = false;
      }, error => {
        this.errorMessage = <any>error;
        this.isLoading = false;
      });
  }

  public open(state: State): boolean {
    // TODO: clean this up
    if ((this.state !== undefined && state !== undefined) && (this.state.toLowerCase() === state.state.toLowerCase())) {
      return true;
    }
    return false;
  }
}
