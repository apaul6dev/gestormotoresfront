import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parametro } from '../api/parametro';
import { HOST, HTTP_OPTIONS } from '../shared/constants';

@Injectable({
    providedIn: 'root',
})
export class ParametroService {

    url = `${HOST}/parametros`;
    httpOptions = HTTP_OPTIONS

    constructor(private http: HttpClient) { }

    getParametros() {
        return this.http.get<Parametro[]>(`${this.url}`);
      }


}
