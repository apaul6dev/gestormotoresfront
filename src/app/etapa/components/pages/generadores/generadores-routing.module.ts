import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeguimientoComponent } from './seguimiento/seguimiento.component';
import { ReportesComponent } from './reportes/reportes.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'seguimiento', component: SeguimientoComponent },
        { path: 'reportes', component: ReportesComponent }
    ])],
    exports: [RouterModule]
})
export class GeneradoresRoutingModule { }
