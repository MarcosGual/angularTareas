import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control-nombre',
  templateUrl: './form-control-nombre.component.html',
  styleUrls: ['./form-control-nombre.component.css'],
})
export class FormControlNombreComponent implements OnInit {
  nombreControl: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.nombreControl = new FormControl('');
  }

  cambiarValor(){
    this.nombreControl.setValue('Franco conchudo')
    this.nombreControl.disable();
  }
}
