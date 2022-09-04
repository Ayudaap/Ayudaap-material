import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { ProyectoModel } from '../models/proyectoModel';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private baseUrl = 'http://localhost:88/api/v1/';
  // organizaciones: Array<OrganizacionModel> = [];;
  proyectos: Array<ProyectoModel> = [];


  constructor(private _http: HttpClient) { }

  /**
   * Obtiene la lista de proyectos
   * @returns Lista de proyectos
   */
  getProyectos(): Observable<ProyectoModel[]> {
    return this._http.get<ProyectoModel[]>(`${this.baseUrl}proyectos/`).pipe(
      tap((response: ProyectoModel[]) => this.proyectos = response)
    )
  }

  /**
   * Proyecto a consultar
   * @param id Id del objeto a consultar
   * @returns Proyecto
   */
  findById(id: string): Observable<ProyectoModel> {
    if (id.length <= 0) return of();

    return this._http.get<ProyectoModel>(`${this.baseUrl}proyectos/${id}`);
  }
}
