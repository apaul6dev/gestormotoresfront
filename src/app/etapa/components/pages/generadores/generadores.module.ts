import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneradoresRoutingModule } from './generadores-routing.module';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { ReportesComponent } from './reportes/reportes.component';

@NgModule({
    imports: [
        CommonModule,
        GeneradoresRoutingModule
    ],
    declarations: [SeguimientoComponent,ReportesComponent]
})
export class GeneradoresModule { }
