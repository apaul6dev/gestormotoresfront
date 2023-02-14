import { HttpHeaders } from "@angular/common/http";

export const HOST = 'http://192.168.18.52:9091/api/v1';
export const TOKEN_AUTH_USERNAME = 'useretapa';
export const TOKEN_AUTH_PASSWORD = 'passetapa';
export const TOKEN_NAME = 'access_token';
export const INTENTS = 3;

export const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};
