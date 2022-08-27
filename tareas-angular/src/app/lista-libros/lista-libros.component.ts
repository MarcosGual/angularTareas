import { Component, OnInit } from '@angular/core';
import { libros } from '../libros';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css'],
})
export class ListaLibrosComponent implements OnInit {
  constructor() {}

  libros = libros;

  compartir(){
    window.alert('El libro ha sido compartido. Gracias!');
  }

  onNotificar(){
    window.alert('Serás notificado cuando el producto salga a la venta...');
  }

  ngOnInit(): void {}
}
