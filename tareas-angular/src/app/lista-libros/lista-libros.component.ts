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
    alert('El libro ha sido compartido. Gracias!')
  }

  ngOnInit(): void {}
}
