import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizacionModel } from 'src/app/models/organizacionModel';
import { OrganizacionService } from 'src/app/services/organizacion.service';

@Component({
  selector: 'app-detalle-oranizacion',
  templateUrl: './detalle-oranizacion.component.html',
  styleUrls: ['./detalle-oranizacion.component.css']
})
export class DetalleOranizacionComponent implements OnInit {

  id: string = '';
  loading: boolean = true;
  organizacion: OrganizacionModel;

  constructor(private activatedRoute: ActivatedRoute, private orgServices: OrganizacionService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getOrganizacion(this.id);
  }


  private getOrganizacion(id: string) {
    if (this.id) {
      this.orgServices.findById(this.id).subscribe({
        next: (organizacion: OrganizacionModel) => this.organizacion = organizacion,
        error: (error: any) => console.error({ error }),
        complete: () => this.loading = false
      });
    }
  }

}
