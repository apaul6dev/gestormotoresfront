import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HOST, TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME, TOKEN_NAME } from "../shared/constants";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    
    url = `${HOST}/oauth/token`;

    constructor(private http: HttpClient, private router: Router) { }

    login(usuario: string, contrasena: string) {
        const body = `grant_type=password&username=${encodeURIComponent(usuario)}&password=${encodeURIComponent(contrasena)}`;

        return this.http.post(this.url, body, {
            headers: new HttpHeaders().set('Content-Type',
                'application/x-www-form-urlencoded; charset=UTF-8')
                .set('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD))
        });
    }

    estaLogeado() {
        const token = sessionStorage.getItem(TOKEN_NAME);
        return token != null;
    }

    cerrarSesion() {
        const token_session = sessionStorage.getItem(TOKEN_NAME);
        const access_token = JSON.parse(token_session ? token_session : '').access_token;
        this.http.get(`${HOST}/usuarios/anular/${access_token}`).subscribe(() => {
            sessionStorage.clear();
            this.router.navigate(['login']);
        });
    }

}