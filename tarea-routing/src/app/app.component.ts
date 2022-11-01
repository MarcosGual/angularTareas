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
  nombre: string;
  seleccion: string;
  title = 'sin-ruta';
  lista = ['Córdoba', 'Buenos Aires', 'Rosario'];

  onCiudadClickeada(ciudad: string): void {
    this.seleccion = ciudad;
  }

  limpiar(): void {
    this.seleccion = '';
  }
}
