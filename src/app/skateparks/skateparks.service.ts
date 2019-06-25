import { Injectable } from '@angular/core';
import { Observable, Operator } from 'rxjs';

import { Skatepark } from '../skatepark/skatepark.model';
import { SkateparkCity } from './skatepark-city.model';
import { SkateparkState } from './skatepark-state.model';

import { ApiService } from '../api/api.service';

@Injectable()
export class SkateparksService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private skateparkUrl = 'skatepark';  // URL to web api

    public skateparks: Skatepark[];
    public skatepark: Skatepark;

    constructor(private apiService: ApiService) { }

    getSkateparks(): Observable<Skatepark[]> {
        var resourceUrl = this.skateparkUrl;

        return this.apiService.get(resourceUrl);
    }

    getSkatepark(id: number) {
        var resourceUrl = this.skateparkUrl + "/" + id;

        return this.apiService.get(resourceUrl);
    }

    getSkateparkStates(): Observable<SkateparkState[]> {
        var resourceUrl = this.skateparkUrl + "/states";

        return this.apiService.get(resourceUrl);
    }
}