import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-baja',
  templateUrl: './persona-baja.component.html',
  styleUrls: ['./persona-baja.component.css'],
})
export class PersonaBajaComponent implements OnInit {
  @Input() persona: Persona;
  @Output() onEliminado=new EventEmitter();

  subscription = new Subscription();

  constructor(private servicioPersona: PersonaService) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  eliminarPersona(persona: Persona) {
    if (confirm('Está seguro de que desea eliminar el registro?')) {
      this.servicioPersona.eliminar(persona.id).subscribe({
        next: () => {
          this.onEliminado.emit();
        },
        error: () => {
          throw new Error('Error en la eliminación...');
        },
      });
      alert('Persona eliminada!');
    }
  }
}
