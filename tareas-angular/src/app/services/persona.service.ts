import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private personas: Persona[];

  constructor() {
    this.personas = [];
  }

  obtenerListado(): Persona[] {
    return this.personas;
  }

  eliminar(persona: Persona): void {
    const index = this.personas.findIndex((x) => x === persona);
    this.personas.splice(index, 1);
  }

  agregar(persona: Persona): void {
    this.personas.push(persona);
  }
}
