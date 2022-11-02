import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-nuevo-item',
  templateUrl: './form-nuevo-item.component.html',
  styleUrls: ['./form-nuevo-item.component.css'],
})
export class FormNuevoItemComponent implements OnInit {
  @Input() className: string = 'btn btn-primary';
  @Input() label: string = 'btn btn-primary';

  @Output() nuevoItemEvento = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  agregarItem(item: string): void {
    this.nuevoItemEvento.emit(item);
  }
}
