import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule
  ], exports: [
    LoadingComponent
  ]
})
export class ComponentsModule { }
