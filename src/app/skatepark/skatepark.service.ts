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

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private skateparkUrl = 'skateparks';

    public states: Observable<States>;
    public cities: Cities;
    public skateparks: Skatepark[];
    public skatepark: Skatepark;
    public loading: boolean;

    constructor(
        private apiService: ApiService
    ) {
        this.states = this.getSkateparkStates().share();
    }

    getSkateparks(): Observable<Skatepark[]> {
        const resourceUrl = this.skateparkUrl;

        return this.apiService.get(resourceUrl);
    }

    getSkateparkStates(): Observable<States> {
        const resourceUrl = this.skateparkUrl + '';

        return this.apiService.get(resourceUrl);
    }

    getSkateparkCities(state: string): Observable<Cities> {
        const resourceUrl = this.skateparkUrl + '/' + state;

        return this.apiService.get(resourceUrl);
    }

    // TODO: implement this yo!
    getSkateparkByName(state: string, city: string, name: string) {
        const resourceUrl = this.skateparkUrl + '/' + state + '/' + city + '/' + name;

        return this.apiService.get(resourceUrl);
    }
}
