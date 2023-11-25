import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Evento from '../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private readonly _http: HttpClient) { }

  public obterTodos(): Observable<Evento[]> {
    return this._http.get<Evento[]>('/api/eventos');
  }

  public getEventoById(id: number): Observable<Evento> {
    return this._http.get<Evento>(`/api/eventos/${id}`);
  }

  public getEventosByTema(tema: string): Observable<Evento[]> {
    return this._http.get<Evento[]>(`/api/eventos/tema?tema=${tema}`);
  }
}
