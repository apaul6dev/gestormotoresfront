import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { OrdenTrabajoComponent } from './ordenTrabajo/ordenTrabajo.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'ordenTrabajo', component: OrdenTrabajoComponent },
        { path: 'mantenimiento', component: MantenimientoComponent },
    ])],
    exports: [RouterModule]
})
export class MantenimientosRoutingModule { }
