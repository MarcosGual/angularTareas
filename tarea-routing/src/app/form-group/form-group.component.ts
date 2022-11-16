import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../models/categoria';
import { Electrodomestico } from '../models/electrodomestico';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent implements OnInit {
  electrodomestico: Electrodomestico;
  categorias: Categoria[] = [
    {
      idCategoria: 1,
      nombre: 'Refrigeración',
    },
    {
      idCategoria: 2,
      nombre: 'Cocina',
    },
    {
      idCategoria: 3,
      nombre: 'Lavado',
    },
  ];

  form: FormGroup = new FormGroup({
    nombreControl: new FormControl('', Validators.required),
    precioControl: new FormControl('', Validators.required),
    categoriaControl: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  enviar(): void {
    this.electrodomestico = this.form.value;
    console.log(this.electrodomestico);
  }
}
