import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generala-juego',
  templateUrl: './generala-juego.component.html',
  styleUrls: ['./generala-juego.component.css']
})
export class GeneralaJuegoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  azarIntervalo(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  numerosAlAzar: Array<number> = Array.from(
    { length: 5 },
    () => this.azarIntervalo(1, 6)
  );

}
