import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './etapa/components/notfound/notfound.component';
import { ProductService } from './etapa/service/product.service';

import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { ParametroService } from './etapa/service/parametro.service';
import { JwtModule } from '@auth0/angular-jwt';
import { TOKEN_NAME } from './etapa/shared/constants';
import { ServerErrorsInterceptor } from './etapa/shared/server-errors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export function tokenGetter() {
    const token_session = sessionStorage.getItem(TOKEN_NAME);
    const tk = JSON.parse(token_session ? token_session : '');
    const token = tk != null ? tk.access_token : '';
    return token;
}

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ['localhost:9091'],
                disallowedRoutes: ['']
            }
        })
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ServerErrorsInterceptor,
        multi: true,
    },
        CountryService,
        CustomerService,
        EventService,
        IconService,
        NodeService,
        PhotoService,
        ProductService,
        ParametroService,
        ServerErrorsInterceptor,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
