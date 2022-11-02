import {
  Component,
  OnChanges,
  OnInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  criteria: string;
  nombre: string;
  seleccion: string;
  title = 'sin-ruta';
  lista = ['Córdoba', 'Buenos Aires', 'Rosario'];

  agregarCiudad(ciudad: string) {
    this.lista.push(ciudad);
  }

  onCiudadClickeada(ciudad: string): void {
    this.seleccion = ciudad;
  }

  limpiar(): void {
    this.seleccion = '';
  }
}
