import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repartidor-pais',
  templateUrl: './repartidor-pais.component.html',
  styleUrls: ['./repartidor-pais.component.css']
})
export class RepartidorPaisComponent implements OnInit {

  @Input() repartidor;
  constructor() { }

  ngOnInit(): void {
  }

}
