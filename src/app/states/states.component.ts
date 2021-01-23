import { Component, Input, OnInit } from '@angular/core';
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
  public errorMessage: string;

  constructor() {}

  ngOnInit() {}

  public open(state: string): boolean {
    if ((this.state !== undefined && state !== undefined) && (this.state.toLowerCase() === state.toLowerCase())) {
      return true;
    }
    return false;
  }
}
