import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Videojuego } from "../../videojuego.model";

@Injectable({
    providedIn: 'root'
})
export class VideojuegosService {
    private apiUrl = 'http://localhost:3000/videojuegos';

private http= inject (HttpClient);

getVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<Videojuego[]>(this.apiUrl);
}

getVideojuegoById(id: number): Observable<Videojuego> {
    return this.http.get<Videojuego>(`${this.apiUrl}/${id}`);
}

agregarVideojuego(videojuego: Videojuego): Observable<Videojuego> {
    return this.http.post<Videojuego>(this.apiUrl, videojuego);
}
}
