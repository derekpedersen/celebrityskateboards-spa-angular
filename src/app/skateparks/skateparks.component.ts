import { Component, Input, Pipe } from '@angular/core';

import { DomSanitizer } from "@angular/platform-browser";

import { Skatepark } from './skatepark.model';
import { SkateparkCity } from './skatepark-city.model'
import { SkateparkState } from './skatepark-state.model'

import { SkateparksService } from './skateparks.service';

@Component({
  selector: 'skateparks',
  templateUrl: './skateparks.template.html',
  styleUrls: ['./skateparks.style.css']
})

export class SkateparksComponent {

    public isLoading: boolean = false;
    public isSelected: boolean = false;
    public skateparks: Skatepark[];
    public skateparkStates: SkateparkState[];
    public selectedSkatepark: Skatepark;
    public errorMessage: string;

    constructor(private service: SkateparksService) {
        this.selectedSkatepark = new Skatepark();
        this.skateparks = new Array<Skatepark>();
    }

    ngOnInit() {
        this.loadSkateparkStates();
    }

    public loadSkateparks() {
        this.isLoading = true;
        this.service.getSkateparks()
            .subscribe(result => {
                this.skateparks = result;
                this.isLoading = false;
            }, error => {
                this.errorMessage = <any>error;
                this.isLoading = false;
            });
    }

    public loadSkateparkStates() {
        this.isLoading = true;
        this.service.getSkateparkStates()
            .subscribe(result => {
                this.skateparkStates = result;
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

@Pipe({ name: 'safeHtml' })
export class Safe {
    constructor(private sanitizer: DomSanitizer) { }

    transform(style: string) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    }
}