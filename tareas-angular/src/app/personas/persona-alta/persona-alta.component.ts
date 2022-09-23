import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css'],
})
export class PersonaAltaComponent implements OnInit {
  @Output() onConfirmarPersona = new EventEmitter<Persona>();
  @Output() onCancelar = new EventEmitter();
  persona: Persona;
  constructor() {}

  ngOnInit(): void {
    this.persona = new Persona();
  }

  guardar() {
    this.onConfirmarPersona.emit(this.persona);
    this.onCancelar.emit();
  }

  cancelar() {
    this.onCancelar.emit();
  }
}
