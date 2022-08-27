import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {

  path: string = "../assets/shopping-cart.png";
  alttext: string="carrito-compras"

  constructor() { }

  ngOnInit(): void {
  }

}
