import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css'],
})
export class PersonaListadoComponent implements OnInit {
  personas: Persona[];
  constructor() {}

  ngOnInit(): void {
    this.personas = [];
    this.personas.push(new Persona(1, 'Marcos', 'Gual', 35));
  }
}
