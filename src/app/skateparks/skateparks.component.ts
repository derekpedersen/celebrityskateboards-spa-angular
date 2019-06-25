import { Component, ViewChild, Pipe } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';

import { Skatepark } from '../skatepark/skatepark.model';
import { SkateparkState } from './skatepark-state.model'

import { SkateparksService } from './skateparks.service';

@Component({
  selector: 'skateparks',
  templateUrl: './skateparks.template.html',
  styleUrls: ['./skateparks.style.css']
})

export class SkateparksComponent {

    @ViewChild('snav') snav: MatSidenav;

    public isLoading: boolean = true;
    public isSelected: boolean = false;
    public states: SkateparkState[];
    public selectedSkatepark: Skatepark;
    public errorMessage: string;

    constructor(private service: SkateparksService) {
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