import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleOranizacionComponent } from './detalle-oranizacion/detalle-oranizacion.component';
import { OrganizacionComponent } from './organizacion.component';

const routes: Routes = [
  { path: '', component: OrganizacionComponent},
  { path: ':id', component: DetalleOranizacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizacionRoutingModule { }
