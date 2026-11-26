import { Component, Input } from '@angular/core';
import {Videojuego} from "../../../videojuego.model";
@Component({
  imports: [],
  standalone: true,
  selector: 'app-detalle-videojuego',
  styleUrl: './detalle-videojuego.css',
  templateUrl: './detalle-videojuego.html',
})
export class DetalleVideojuegoComponent {
  @Input() videojuego: Videojuego | null = null;
}
