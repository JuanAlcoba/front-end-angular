import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from '../model/habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  URL = 'http://localhost:8080/habilidades/';

  constructor(private http: HttpClient) { }

  public getHabilidades(): Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(this.URL + 'traer');
  }

  public createHabilidades(habilidades:Habilidades) {
    return this.http.post<Habilidades>(this.URL + 'crear', habilidades);
  }

  public getHabilidadesId(id:number) {
    return this.http.get<Habilidades>(this.URL+""+id);
  }

  public updateHabilidades(habilidades:Habilidades) {
    return this.http.put<Habilidades>(this.URL+"editar/"+habilidades.id,habilidades)
  }

  public deleteHabilidades(habilidades: Habilidades) {
    return this.http.delete<Habilidades>(this.URL + 'eliminar/' +habilidades.id);
  }

}
