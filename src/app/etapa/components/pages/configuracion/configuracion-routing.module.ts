import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeneradoresComponent } from './generadores/generadores.component';
import { MaterialesComponent } from './materiales/materiales.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { ParametrosMantenimientoComponent } from './parametrosMantenimiento/parametrosMantenimiento.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'generadores', component: GeneradoresComponent },
        { path: 'materiales', component: MaterialesComponent },
        { path: 'parametros', component: ParametrosComponent },
        { path: 'parametrosMantenimiento', component: ParametrosMantenimientoComponent },
        { path: 'usuarios', component: UsuariosComponent },
    ])],
    exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
