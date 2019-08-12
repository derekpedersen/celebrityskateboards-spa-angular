import { Component, ViewChild, Pipe } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';

import { Skatepark } from '../skatepark/skatepark.model';

import { States } from '../states/state.model';
import { SkateparkService } from '../skatepark/skatepark.service';

@Component({
  selector: 'skateparks',
  templateUrl: './skateparks.template.html',
  styleUrls: ['./skateparks.style.css']
})

export class SkateparksComponent {

    @ViewChild('snav') snav: MatSidenav;

    public isLoading: boolean = true;
    public isSelected: boolean = false;
    public states: States;
    public selectedSkatepark: Skatepark;
    public errorMessage: string;

    constructor(private service: SkateparkService) {
        this.selectedSkatepark = new Skatepark();
    }

    ngOnInit() {
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

    public selectSkatepark(skatepark: Skatepark) {
        this.selectedSkatepark = skatepark;
        this.isSelected = true;
    }
}