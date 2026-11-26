import { Component, OnInit, inject } from '@angular/core'; 
import { ListaVideojuegosComponent } from './lista-videojuegos/lista-videojuegos';
import { DetalleVideojuegoComponent } from './detalle-videojuego/detalle-videojuego'; 
import { FormularioVideojuegoComponent } from './formulario-videojuego/formulario-videojuego';
import { VideojuegosService } from './videojuegos.service'; 
import { Videojuego } from '../../videojuego.model';


@Component({
  selector: 'app-root', 
  standalone: true, 
  imports: [
    ListaVideojuegosComponent, 
    DetalleVideojuegoComponent,
    FormularioVideojuegoComponent
  ],
  templateUrl: './app.html', 
  styleUrl: './app.css'
})
export class App implements OnInit { 
  videojuegos: Videojuego[] = [];
  videojuegoSeleccionado: Videojuego | null = null; 

  private videojuegosService = inject(VideojuegosService);

  ngOnInit() {
    this.cargarVideojuegos();
  }

  cargarVideojuegos() {
    this.videojuegosService.getVideojuegos().subscribe((videojuegos: Videojuego[]) => {
      this.videojuegos = videojuegos;
    });
  }

  onSeleccionarVideojuego(videojuego: Videojuego) {
    this.videojuegosService.getVideojuegoPorId(videojuego.id).subscribe((videojuegoCompleto: Videojuego) => {
      this.videojuegoSeleccionado = videojuegoCompleto;
    });
  }

  onAgregarVideojuego(nuevoVideojuego: Videojuego) {
    this.videojuegosService.agregarVideojuego(nuevoVideojuego).subscribe(() => {
      this.cargarVideojuegos();
    });
  }
}