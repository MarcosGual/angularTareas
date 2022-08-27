import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generala-dado',
  templateUrl: './generala-dado.component.html',
  styleUrls: ['./generala-dado.component.css'],
})
export class GeneralaDadoComponent implements OnInit {
  @Input() numero: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
