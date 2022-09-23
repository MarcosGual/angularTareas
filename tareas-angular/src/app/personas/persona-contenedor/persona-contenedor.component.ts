import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-contenedor',
  templateUrl: './persona-contenedor.component.html',
  styleUrls: ['./persona-contenedor.component.css'],
})
export class PersonaContenedorComponent implements OnInit {
  formularioVisible: boolean = false;
  listadoPersonas: Persona[] = [];

  private subscription = new Subscription();

  constructor(private servicioPersona: PersonaService) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.obtenerPersonas();
  }

  ngOnChanges(){
    this.obtenerPersonas();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  mostrarFormulario(visible: boolean) {
    this.formularioVisible = visible;
  }

  obtenerPersonas() {
    //this.listadoPersonas.push(persona);
    //this.listadoPersonas = this.servicioPersona.obtenerListado();

    const obtenerSuscripcion = this.servicioPersona.obtenerListado().subscribe({
      next: (personas: Persona[]) => {
        this.listadoPersonas = personas;
      },
      error: () => {
        throw new Error('Error en la conexión...');
      },
    });

    this.subscription.add(obtenerSuscripcion);

    this.mostrarFormulario(false);
  }

  agregarPersona() {
    //this.listadoPersonas.push(persona);
    //this.listadoPersonas = this.servicioPersona.obtenerListado();
    this.obtenerPersonas();
    //this.agregarPersona();
    this.mostrarFormulario(false);
  }

  editarPersona(persona: Persona) {}
}
