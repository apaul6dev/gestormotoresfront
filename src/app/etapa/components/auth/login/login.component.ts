import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/etapa/api/authentication';
import { LoginService } from 'src/app/etapa/service/login.service';
import { TOKEN_NAME } from 'src/app/etapa/shared/constants';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent implements OnInit {

    valCheck: string[] = ['remember'];

    username: string = 'paul';
    password: string = '1234';

    credentials: AuthenticationRequest = {};

    constructor(
        public layoutService: LayoutService,
        private loginService: LoginService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loginService.logout();
    }

    login() {
        
        this.credentials.username = this.username;
        this.credentials.password = this.password;

        this.loginService
            .authenticate(this.credentials)
            .subscribe((response) => {                
                sessionStorage.setItem(TOKEN_NAME, response.token!);
                this.router.navigate(['/']);
            });
    }
}
