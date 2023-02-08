import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/etapa/service/login.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) {}

    canActivate() {
        if (!this.loginService.isLoggedIn()) {
            this.router.navigate(['/auth']);
            return false;
        } else {
            return true;
        }
    }
}
