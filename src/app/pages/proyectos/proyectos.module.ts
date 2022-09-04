import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';



@NgModule({
  declarations: [DetalleProyectoComponent],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    MaterialModule,
  ]
})
export class ProyectosModule { }
