import { Component, OnInit } from '@angular/core';
import { ProyectoModel } from 'src/app/models/proyectoModel';
import { ProyectosService } from 'src/app/services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Array<ProyectoModel> = [];

  /**
 * Muestra si el componente se sigue cargando
 */
  loading: boolean = true;

  constructor(private _proyectoService: ProyectosService) { }

  ngOnInit(): void {
    this._proyectoService.getProyectos().subscribe({
      next: (proyectos: ProyectoModel[]) => this.proyectos = proyectos,
      error: (error: any) => console.error({ error }),
      complete: () => this.loading = false
    });
  }

}
