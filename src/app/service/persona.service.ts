import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = '/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.URL + 'traer');
  }

  public createPersona(persona:Persona) {
    return this.http.post<Persona>(this.URL + 'crear', persona);
  }

  public getPersonaId(id:any) {
    return this.http.get<Persona>(this.URL+"traer/"+id);
  }

  public updatePersona(persona:Persona) {
    return this.http.put<Persona>(this.URL+"editar/"+persona.id,persona)
  }

  public deletePersona(persona: Persona) {
    return this.http.delete<Persona>(this.URL + 'eliminar/' +persona.id);
  }

}
