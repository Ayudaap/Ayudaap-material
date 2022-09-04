import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';
import { ProyectosComponent } from './proyectos.component';

const routes: Routes = [
  { path: '', component: ProyectosComponent },
  { path: ':id', component: DetalleProyectoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
