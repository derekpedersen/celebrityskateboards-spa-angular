import { Component, Pipe, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

import { Skatepark } from './skatepark.model';
//import { ActivatedRoute } from '@angular/router';
import { SkateparkService } from './skatepark.service';

@Component({
  selector: 'skatepark',
  templateUrl: './skatepark.component.html',
  styleUrls: ['./skatepark.style.css']
})

export class SkateparkComponent {

    @Input() skatepark: Skatepark;
    public isLoading: boolean;
    public errorMessage: string;

    ngOnInit() {
    }

    constructor(
    //private route: ActivatedRoute,
    private service: SkateparkService
    ) { }

    public loadSkatepark(skatepark: string) {
        this.isLoading = true;

        // TODO: this should make a call to get the cities for a specific state
        //       it will require an update to the skatepark-api for states/:state to return only the cities
        this.service.getSkateparkByName(skatepark)
        .subscribe(result => {
            this.skatepark = result;
            this.isLoading = false;
        }, error => {
            this.errorMessage = <any>error;
            this.isLoading = false;
        });
    }
}

@Pipe({ name: 'safeHtml' })
export class Safe {
    constructor(private sanitizer: DomSanitizer) { }

    transform(style: string) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    }
}