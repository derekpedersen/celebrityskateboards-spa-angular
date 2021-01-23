import { Component, Input, OnInit } from '@angular/core';
import { States } from './state.model';
import { SkateparkService } from '../skatepark/skatepark.service';

@Component({
  selector: 'states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  @Input() states: States; 

  public isSelected: boolean = false;
  public state: String;
  public errorMessage: string;

  constructor() {}

  ngOnInit() {}

  public open(state: string): boolean {
    // TODO: clean this up
    if ((this.state !== undefined && state !== undefined) && (this.state.toLowerCase() === state.toLowerCase())) {
      return true;
    }
    return false;
  }
}
