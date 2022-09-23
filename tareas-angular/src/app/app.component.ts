import { Component } from '@angular/core';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  formularioVisible: boolean = false;
  listadoPersonas: Persona[] = [];
  title = 'tareas-angular';

  mostrarFormulario(visible: boolean) {
    this.formularioVisible = visible;
  }

  personaGuardada(persona: Persona) {
    this.listadoPersonas.push(persona);
    this.formularioVisible = false;
  }
}
