import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Skatepark } from './skateparks/skatepark.model';
import { SkateparkService } from './skateparks/skatepark.service';
import { States } from './states/state.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'celebrityskateboards',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
     this.service.getSkateparksGroupedByState()
       .subscribe(result => {
         this.states = result;
         this.isLoading = false;
       }, error => {
         this.errorMessage = <any>error;
         this.isLoading = false;
       });
   }
}
