import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers } from '../model/headers.model';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  URL = 'https://portfolioapp-argprograma.herokuapp.com/headers/';

  constructor(private http: HttpClient) { }

  public getHeaders(): Observable<Headers[]> {
    return this.http.get<Headers[]>(this.URL + 'traer');
  }

  public createHeaders(headers:Headers) {
    return this.http.post<Headers>(this.URL + 'crear', headers);
  }

  public getHeadersId(id:number) {
    return this.http.get<Headers>(this.URL+""+id);
  }

  public updateHeaders(headers:Headers) {
    return this.http.put<Headers>(this.URL+"editar/"+headers.id,headers)
  }

  public deleteHeaders(headers: Headers) {
    return this.http.delete<Headers>(this.URL + 'eliminar/' +headers.id);
  }
}
