import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoModel } from 'src/app/models/proyectoModel';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.component.html',
  styleUrls: ['./detalle-proyecto.component.css']
})
export class DetalleProyectoComponent implements OnInit {

  id: string = '';
  loading: boolean = true;
  proyecto: ProyectoModel;
  
  constructor(private activatedRoute: ActivatedRoute, private proyectoServices: ProyectosService) { }


  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getProyecto(this.id);
  }


  private getProyecto(id: string) {
    if (this.id) {
      this.proyectoServices.findById(this.id).subscribe({
        next: (proyecto: ProyectoModel) => this.proyecto = proyecto,
        error: (error: any) => console.error({ error }),
        complete: () => this.loading = false
      });
    }
  }
}
