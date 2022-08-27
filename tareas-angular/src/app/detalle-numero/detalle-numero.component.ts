import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-numero',
  templateUrl: './detalle-numero.component.html',
  styleUrls: ['./detalle-numero.component.css'],
})
export class DetalleNumeroComponent implements OnInit {
  
  @Input() numero: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
