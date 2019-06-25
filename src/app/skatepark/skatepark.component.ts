import { Component, Pipe, Input } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

import { Skatepark } from './skatepark.model';

@Component({
  selector: 'skatepark',
  templateUrl: './skatepark.template.html',
  styleUrls: ['./skatepark.style.css']
})

export class skateparkComponent {
    @Input() skatepark: Skatepark;

    ngOnInit() {
    }

    constructor() {
    }
}

@Pipe({ name: 'safeHtml' })
export class Safe {
    constructor(private sanitizer: DomSanitizer) { }

    transform(style: string) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    }
}