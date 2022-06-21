import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class ApiService {

    private _headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private _baseUrl = '/api/';

    public errorMessage: string;

    constructor(private _http: HttpClient) {

    }

    get(resourceUrl: string): Observable<any> {
        this.setHeaders();
        const url = this._baseUrl + resourceUrl;
        return this._http
            .get(url, { headers: this._headers })
            .pipe(catchError(this.handleError))
    }

    delete(resourceUrl: string): Observable<any> {
        this.setHeaders();
        const url = this._baseUrl + resourceUrl;
        return this._http
            .delete(url, { headers: this._headers })
            .pipe(catchError(this.handleError))
    }

    post(resource: any, resourceUrl: string): Observable<any> {
        this.setHeaders();
        const url = this._baseUrl + resourceUrl;
        return this._http
            .post(url, JSON.stringify(resource), { headers: this._headers })
            .pipe(catchError(this.handleError))
    }

    put(resource: any, resourceUrl: string): Observable<any> {
        this.setHeaders();
        const url = this._baseUrl + resourceUrl;
        return this._http
            .put(url, JSON.stringify(resource), { headers: this._headers })
            .pipe(catchError(this.handleError))
    }

    private setHeaders() {
        this._headers.append('Content-Type', 'application/json');
    }

    private handleError(error: Response | any) {
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body || JSON.stringify(body);
            this.errorMessage = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            this.errorMessage = error.message ? error.message : error.toString();
        }
        console.error(this.errorMessage);

        // tslint:disable-next-line: deprecation
        return throwError(() => new error(this.errorMessage));
    }
}
