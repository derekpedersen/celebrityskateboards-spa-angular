import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Skatepark } from './skatepark/skatepark.model';
import { SkateparkService } from './skatepark/skatepark.service';
import { States } from './states/state.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'celebrityskateboards',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('snav', { static: true }) snav: MatSidenav;

  public isLoading = false;
  public skateparks: Skatepark[];
  public states: States;
  public errorMessage: string;

  constructor(
    private service: SkateparkService
  ) { }

  ngOnInit() {
    this.loadStates();
   }

   public loadStates() {
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
}
