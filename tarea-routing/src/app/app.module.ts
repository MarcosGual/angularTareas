import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { HijoUnoComponent } from './hijo-uno/hijo-uno.component';
import { HijoDosComponent } from './hijo-dos/hijo-dos.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { FormNuevoItemComponent } from './form-nuevo-item/form-nuevo-item.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrimeroComponent,
    SegundoComponent,
    NoEncontradoComponent,
    HijoUnoComponent,
    HijoDosComponent,
    ButtonComponent,
    FormNuevoItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
