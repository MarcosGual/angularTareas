import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private personas: Persona[];

  constructor(private http: HttpClient) {
    this.personas = [];
  }

  obtenerListado(): Observable<Persona[]> {
    //return this.personas;
    const result = this.http.get<Persona[]>('http://localhost:3000/personas');
    return result;
  }

  eliminar(id: number): Observable<any> {
    //const index = this.personas.findIndex((x) => x === persona);
    // const idPersona = Number(this.personas.find((x) => x.id === persona.id));
    // this.personas.splice(idPersona, 1);
    return this.http.delete(`http://localhost:3000/personas/${id}`);
  }

  agregar(persona: Persona): Observable<Persona> {
    //this.personas.push(persona);
    const result = this.http.post<Persona>(
      'http://localhost:3000/personas',
      persona
    );
    return result;
  }

  editar(
    idPersona: number,
    nombre: string,
    apellido: string,
    edad: number,
    ciudad: string,
    provincia: string
  ): void {}
}
