import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repartidor-detalle',
  templateUrl: './repartidor-detalle.component.html',
  styleUrls: ['./repartidor-detalle.component.css']
})
export class RepartidorDetalleComponent implements OnInit {

  @Input()repartidor;

  constructor() { }

  ngOnInit(): void {
  }

}
