import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { MantenimientosRoutingModule } from './mantenimiento-routing.module';
import { OrdenTrabajoComponent } from './ordenTrabajo/ordenTrabajo.component';


@NgModule({
    imports: [
        CommonModule,
        MantenimientosRoutingModule
    ],
    declarations: [MantenimientoComponent,OrdenTrabajoComponent]
})
export class MantenimientoModule { }
