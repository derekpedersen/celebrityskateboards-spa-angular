import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Jsonp } from '@angular/http/src/http';

@Injectable()
export class ApiService {

    private _headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private _baseUrl = '/api/';

    public errorMessage: string;

    constructor(private _http: HttpClient) {

    }

    ngOnInit() {

    }

    get(resourceUrl: string): Observable<any> {
        this.setHeaders();
        let url = this._baseUrl + resourceUrl;
        return this._http
            .get(url, { headers: this._headers })
            .catch(this.handleError);
    }

    delete(resourceUrl: string): Observable<any> {
        this.setHeaders();
        let url = this._baseUrl + resourceUrl;
        return this._http
            .delete(url, { headers: this._headers })
            .catch(this.handleError);
    }

    post(resource: any, resourceUrl: string): Observable<any> {
        this.setHeaders();
        let url = this._baseUrl + resourceUrl;
        return this._http
            .post(url, JSON.stringify(resource), { headers: this._headers })
            .catch(this.handleError);
    }

    put(resource: any, resourceUrl: string): Observable<any> {
        this.setHeaders();
        let url = this._baseUrl + resourceUrl;
        return this._http
            .put(url, JSON.stringify(resource), { headers: this._headers })
            .catch(this.handleError);
    }

    private setHeaders() {
        this._headers.append('Content-Type', 'application/json');
    }

    private handleError(error: Response | any) {
        if (error instanceof Response) {
            const body = error.json() || '';
            // TODO: use to be body.error but that no longer is working?
            const err = body || JSON.stringify(body);
            this.errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            this.errorMessage = error.message ? error.message : error.toString();
        }
        console.error(this.errorMessage);

        return Observable.throw(this.errorMessage);
    }
}
