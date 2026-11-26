import { Component, Output, EventEmitter } from '@angular/core';
import { Videojuego } from '../../../videojuego.model';
import {FormsModule} from "@angular/forms";

@Component({
  imports: [FormsModule],
  standalone: true,
  selector: 'app-formulario-videojuego',
  styleUrl: './formulario-videojuego.css',
  templateUrl: './formulario-videojuego.html',
})
export class FormularioVideojuegoComponent {
  @Output() agregarVideojuego = new EventEmitter<Videojuego>();

  nuevoVideojuego: Videojuego = {
    id: 0,
    nombre: '',
    desarrollador: '',
    anio: 0,
    genero: '',
    descripcion: ''
  };

  onAgregarVideojuego() {
    this.agregarVideojuego.emit(this.nuevoVideojuego);
    this.nuevoVideojuego = { id: 0, nombre: '', desarrollador: '', anio: 0, genero: '', descripcion: '' };
  }
}


