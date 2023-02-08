import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, retry, throwError } from 'rxjs';

import {
    AuthenticationRequest,
    AuthenticationResponse,
} from '../api/authentication';
import { HOST, TOKEN_NAME } from '../shared/constants';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    url = `${HOST}/auth`;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    constructor(private http: HttpClient, private router: Router) {}

    authenticate(
        credentials: AuthenticationRequest
    ): Observable<AuthenticationResponse> {
        return this.http
            .post(this.url + '/authenticate', credentials, this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    isLoggedIn() {
        return sessionStorage.getItem(TOKEN_NAME) != null;
    }

    logout() {
        sessionStorage.clear();
        this.router.navigate(['/auth']);
    }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                    `body was: ${error.error}`
            );
        }
        return throwError(
            () => new Error('Something bad happened; please try again later.')
        );
    }
}
