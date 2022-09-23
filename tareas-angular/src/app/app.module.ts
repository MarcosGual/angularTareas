import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonaListadoComponent } from './personas/persona-listado/persona-listado.component';
import { PersonaAltaComponent } from './personas/persona-alta/persona-alta.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaListadoComponent,
    PersonaAltaComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
