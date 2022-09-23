import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonaListadoComponent } from './personas/persona-listado/persona-listado.component';
import { PersonaAltaComponent } from './personas/persona-alta/persona-alta.component';
import { PersonaContenedorComponent } from './personas/persona-contenedor/persona-contenedor.component';
import { PersonaBajaComponent } from './personas/persona-baja/persona-baja.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaListadoComponent,
    PersonaAltaComponent,
    PersonaContenedorComponent,
    PersonaBajaComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
