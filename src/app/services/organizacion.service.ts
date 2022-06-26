import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrganizacionModel } from '../models/organizacionModel';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {

  private baseUrl = 'http://ayudaap-api:88/api/v1/';
  organizaciones: Array<OrganizacionModel> = [];

  constructor(private _http: HttpClient) { }

  /**
   * Obtiene la lista de organizaciones
   */
  getOrganizaciones(): Observable<OrganizacionModel[]> {
    return this._http.get<OrganizacionModel[]>(`${this.baseUrl}organizaciones/`).pipe(
      tap((response: OrganizacionModel[]) => this.organizaciones = response)
    );
  }

  /**
   * Consulta una organizacion contra el servicio
   * @param id Id de la organizacion a consultar
   */
  findById(id: string): Observable<OrganizacionModel> {
    if (id.length <= 0) return of();
    // return this._http.get<OrganizacionModel>(`${this.baseUrl}organizaciones/${id}`).pipe(delay(3000));
    return this._http.get<OrganizacionModel>(`${this.baseUrl}organizaciones/${id}`);
  }

}
