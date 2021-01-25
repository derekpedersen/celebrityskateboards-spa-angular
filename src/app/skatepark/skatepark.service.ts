import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Skatepark } from './skatepark.model';

import { ApiService } from '../api/api.service';
import { States } from '../states/state.model';
import { Cities } from '../cities/city.model';

@Injectable({
    providedIn: 'root',
})
export class SkateparkService {

    private skateparkUrl = 'skateparks';

    public skateparks: Skatepark[];
    public cities: Cities;
    public states: States;
    public skatepark: Skatepark;
    public isLoading: boolean;
    public errorMessage: string;

    constructor(
        private apiService: ApiService
    ) { }

    getSkateparks(): Observable<Skatepark[]> {
        const resourceUrl = this.skateparkUrl;

        return this.apiService.get(resourceUrl);
    }

    getSkateparksGroupedByState(): Observable<States> {
        const resourceUrl = this.skateparkUrl + '';

        return this.apiService.get(resourceUrl);
    }

    getSkateparksGroupedByCityWithinState(state: string): Observable<Cities> {
        const resourceUrl = this.skateparkUrl + '/' + state;

        return this.apiService.get(resourceUrl);
    }

    getSkateparksByStateAndCity(state: string, city: string): Observable<Skatepark[]> {
        const resourceUrl = this.skateparkUrl + '/' + state + '/' + city;

        return this.apiService.get(resourceUrl);
    }

    getSkateparkByName(state: string, city: string, name: string) {
        const resourceUrl = this.skateparkUrl + '/' + state + '/' + city + '/' + name;

        return this.apiService.get(resourceUrl);
    }
}
