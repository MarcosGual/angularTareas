import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Libro } from '../libros';

@Component({
  selector: 'app-alertas-libro',
  templateUrl: './alertas-libro.component.html',
  styleUrls: ['./alertas-libro.component.css'],
})
export class AlertasLibroComponent implements OnInit {
  constructor() {}

  @Input() libro: Libro | undefined;
  @Output() notificar = new EventEmitter();

  ngOnInit(): void {}
}
