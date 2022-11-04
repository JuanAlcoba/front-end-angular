import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = '/educacion/';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL + 'traer');
  }

  public createEducacion(educacion:Educacion) {
    return this.http.post<Educacion>(this.URL + 'crear', educacion);
  }

  public getEducacionId(id:number) {
    return this.http.get<Educacion>(this.URL+""+id);
  }

  public updateEducacion(educacion:Educacion) {
    return this.http.put<Educacion>(this.URL+"editar/"+educacion.id,educacion)
  }

  public deleteEducacion(educacion: Educacion) {
    return this.http.delete<Educacion>(this.URL + 'eliminar/' +educacion.id);
  }
}
