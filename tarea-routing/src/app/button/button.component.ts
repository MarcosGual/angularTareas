import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit, OnChanges, OnDestroy {
  @Input() color!: string;
  @Input() label: string;
  @Input() seleccion: string;

  constructor() {}

  ngOnInit(): void {
    console.log('OnInit -->');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change -->', changes);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy -->');
  }
}
