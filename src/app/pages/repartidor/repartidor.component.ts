import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-repartidor',
  templateUrl: './repartidor.component.html',
  styleUrls: ['./repartidor.component.css']
})
export class RepartidorComponent implements OnInit {

  repartidores:any[];
  repartidorSeleccionado:any;

  constructor(private serv:ServService) { }

  ngOnInit(): void {
    this.serv.items.subscribe((items) =>{      
      this.repartidores = items;
    });
  }

  clickRep(rep){

    this.repartidorSeleccionado= rep;
  }

}
