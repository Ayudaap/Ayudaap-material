import { Component, OnInit } from '@angular/core';
import { OrganizacionModel } from 'src/app/models/organizacionModel';
import { OrganizacionService } from '../../services/organizacion.service';

@Component({
  selector: 'app-organizacion',
  templateUrl: './organizacion.component.html',
  styleUrls: ['./organizacion.component.css']
})
export class OrganizacionComponent implements OnInit {

  organizaciones: Array<OrganizacionModel> = [];

  /**
   * Muestra si el componente se sigue cargando
   */
  loading: boolean = true;

  constructor(private _orgServices: OrganizacionService) { }

  ngOnInit(): void {
    this._orgServices.getOrganizaciones().subscribe({
      next: (organizaciones: OrganizacionModel[]) => this.organizaciones = organizaciones,
      error: (error: any) => console.error({ error }),
      complete: () => this.loading = false
    });
  }

}
