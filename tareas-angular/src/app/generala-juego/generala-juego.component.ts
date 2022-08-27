import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generala-juego',
  templateUrl: './generala-juego.component.html',
  styleUrls: ['./generala-juego.component.css'],
})
export class GeneralaJuegoComponent implements OnInit {
  constructor() {}

  azarIntervalo(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  numerosAlAzar: Array<number> = Array.from({ length: 5 }, () =>
    this.azarIntervalo(1, 6)
  );

  verificarIgualdad(): boolean {
    let primero = this.numerosAlAzar[0];
    for (let i = 1; i < this.numerosAlAzar.length; i++) {
      if (this.numerosAlAzar[i] !== primero) {
        return false;
      }
    }
    return true;
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (this.verificarIgualdad()) {
      window.alert('Generala obtenida!');
    }
  }
}
