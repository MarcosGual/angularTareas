import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css'],
})
export class PersonaListadoComponent implements OnInit {
  @Output() onNuevaPersona = new EventEmitter();
  @Input() personas: Persona[];
  constructor() {}

  ngOnInit(): void {}

  agregarPersona() {
    this.onNuevaPersona.emit();
  }

  eliminarPersona(persona: Persona) {
    const index = this.personas.findIndex((x) => x === persona);
    this.personas.splice(index, 1);
  }

  editarPersona(persona: Persona) {
    const index = this.personas.findIndex((x) => x === persona);
    // this.personas.splice
  }
}
