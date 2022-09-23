import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css'],
})
export class PersonaListadoComponent implements OnInit {
  @Output() onNuevaPersona = new EventEmitter();
  @Input() personas: Persona[];

  private subscription = new Subscription();

  constructor(private servicioPersona: PersonaService) {}

  ngOnInit(): void {
    this.actualizarListado();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  agregarPersona() {
    this.onNuevaPersona.emit();
  }

  editarPersona(persona: Persona) {
    const index = this.personas.findIndex((x) => x === persona);
    // this.personas.splice
  }

  actualizarListado(){
      const obtenerSuscripcion = this.servicioPersona.obtenerListado().subscribe({
        next: (personas: Persona[]) => {
          this.personas = personas;
        },
        error: () => {
          throw new Error('Error en la conexión...');
        },
      });
  
      this.subscription.add(obtenerSuscripcion);
  }
}
