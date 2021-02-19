import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionRoutingModule } from './organizacion-routing.module';
import { OrganizacionComponent } from './organizacion.component';
import { MaterialModule } from '../../material.module';
import { DetalleOranizacionComponent } from './detalle-oranizacion/detalle-oranizacion.component';


@NgModule({
  declarations: [OrganizacionComponent, DetalleOranizacionComponent],
  imports: [
    CommonModule,
    OrganizacionRoutingModule,
    MaterialModule
  ]
})
export class OrganizacionModule { }
