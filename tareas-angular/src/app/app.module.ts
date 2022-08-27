import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { AlertasLibroComponent } from './alertas-libro/alertas-libro.component';
import { ListaNumerosComponent } from './lista-numeros/lista-numeros.component';
import { DetalleNumeroComponent } from './detalle-numero/detalle-numero.component';
import { BotonAgregarComponent } from './boton-agregar/boton-agregar.component';
import { GeneralaDadoComponent } from './generala-dado/generala-dado.component';
import { GeneralaJuegoComponent } from './generala-juego/generala-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    ListaLibrosComponent,
    AlertasLibroComponent,
    ListaNumerosComponent,
    DetalleNumeroComponent,
    BotonAgregarComponent,
    GeneralaDadoComponent,
    GeneralaJuegoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ListaLibrosComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
