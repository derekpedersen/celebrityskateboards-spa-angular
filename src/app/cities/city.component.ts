import { Component, OnInit, Input } from '@angular/core';
import { Cities } from './city.model';
import { SkateparkService } from '../skateparks/skatepark.service';
import { ActivatedRoute } from '@angular/router';
import { Skatepark } from '../skateparks/skatepark.model';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

    @Input() city: string;
    @Input() state: string;
    @Input() skateparks: Skatepark[];

    public isLoading: boolean;
    public errorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private service: SkateparkService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(routeParams => {
            if (routeParams.state !== undefined && routeParams.state !== null) {
                this.state = routeParams.state;
            }
            if (routeParams.city !== undefined && routeParams.city !== null) {
                this.city = routeParams.city;
            }
            if (this.city === undefined || this.city === null) {
                this.loadCity(this.state, this.city);
            }
        });
    }

    public loadCity(state: string, city: string) {
        this.isLoading = true;
        this.service.getSkateparksByStateAndCity(state, city)
            .subscribe(result => {
                this.skateparks = result;
                this.isLoading = false;
            }, error => {
                this.errorMessage = <any>error;
                this.isLoading = false;
            });
    }

    public open(city: string): boolean {
        if ((this.city !== undefined && city !== undefined) && (this.city.toLowerCase() === city.toLowerCase())) {
            return true;
        }
        return false;
    }
}
