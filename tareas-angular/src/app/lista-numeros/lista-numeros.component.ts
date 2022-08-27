import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.css'],
})
export class ListaNumerosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  azarIntervalo(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  numerosAlAzar: Array<number> = Array.from(
    { length: 5 },
    () => this.azarIntervalo(1, 6)
  );

  agregarNumero(){
    return this.numerosAlAzar.push(this.azarIntervalo(1, 6));
  }

  // generarNumeros = this.numerosAlAzar.map(
  //   (x) => (x = this.azarIntervalo(1, 6))
  // );
}
