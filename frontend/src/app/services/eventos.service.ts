import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../models/eventos';


@Injectable({
  providedIn: 'root'
})
export class EventosService {
url_api = "http://localhost:4002/events"
  constructor(private http: HttpClient) {  }

  crearEvento(evento: Evento): Observable<any> {
    return this.http.post(this.url_api, evento);
  }
}
