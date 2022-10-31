import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'http://localhost:8080/proyectos/';

  constructor(private http: HttpClient) { }

  public getProyectos(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.URL + 'traer');
  }

  public createProyectos(proyectos:Proyectos) {
    return this.http.post<Proyectos>(this.URL + 'crear', proyectos);
  }

  public getProyectosId(id:number) {
    return this.http.get<Proyectos>(this.URL+""+id);
  }

  public updateProyectos(proyectos:Proyectos) {
    return this.http.put<Proyectos>(this.URL+"editar/"+proyectos.id,proyectos)
  }

  public deleteProyectos(proyectos: Proyectos) {
    return this.http.delete<Proyectos>(this.URL + 'eliminar/' +proyectos.id);
  }
}
