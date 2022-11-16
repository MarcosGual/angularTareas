import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { FormControlNombreComponent } from './form-control-nombre/form-control-nombre.component';
import { FormGroupComponent } from './form-group/form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FormControlNombreComponent,
    FormGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
