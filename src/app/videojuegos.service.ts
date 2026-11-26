import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videojuego } from '../../videojuego.model';


@Injectable({
  providedIn: 'root'
})
export class VideojuegosService {
  private apiUrl = 'http://localhost:3000/videojuegos';
  private httpClient = inject(HttpClient);

  getVideojuegos(): Observable<Videojuego[]> {
    return this.httpClient.get<Videojuego[]>(this.apiUrl);
  }

  getVideojuegoPorId(id: number): Observable<Videojuego> {
    return this.httpClient.get<Videojuego>(`${this.apiUrl}/${id}`);
  }

  agregarVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this.httpClient.post<Videojuego>(this.apiUrl, videojuego);
  }
}