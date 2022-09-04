import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentsModule } from '../components/components.module';
import { ProyectosComponent } from './proyectos/proyectos.component';


@NgModule({
  declarations: [NavbarComponent, DashboardComponent, PageNotFoundComponent, ProyectosComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    MaterialModule,
    ComponentsModule
  ], exports: [
    NavbarComponent,
    DashboardComponent
  ]
})
export class PagesModule { }
