import { NgForOf } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css'],
})
export class PersonaAltaComponent implements OnInit {
  @Output() onConfirmarPersona = new EventEmitter<Persona>();
  @Output() onCancelar = new EventEmitter();
  persona: Persona;
  constructor(private personaService: PersonaService) {}

  @ViewChild('personaForm') formulario: NgForm;

  ngOnInit(): void {
    this.persona = new Persona();
  }

  guardar() {
    if (this.formulario.invalid) {
      alert('Formulario inválido!');
      return;
    } else{
      this.personaService.agregar(this.persona);
      this.onConfirmarPersona.emit(this.persona);
    }

    // this.onConfirmarPersona.emit(this.persona);
    // this.onCancelar.emit();
  }

  cancelar() {
    this.onCancelar.emit();
  }
}
