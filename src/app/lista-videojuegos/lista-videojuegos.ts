import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Videojuego } from "../../../videojuego.model";


@Component({
  selector: "app-lista-videojuegos",
  imports: [],
  templateUrl: "./lista-videojuegos.html",
  styleUrl: "./lista-videojuegos.css"
})
export class ListaVideojuegosComponent {
  @Input() videojuegos: Videojuego[] = [];
  @Output() seleccionarVideojuego = new EventEmitter<Videojuego>();

  onSeleccionar(videojuego: Videojuego) {
    this.seleccionarVideojuego.emit(videojuego);
  }
}
