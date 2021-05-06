import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Pais } from 'src/app/models/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-altas-repartidor',
  templateUrl: './altas-repartidor.component.html',
  styleUrls: ['./altas-repartidor.component.css']
})
export class AltasRepartidorComponent implements OnInit {

  paisSeleccionado:Pais;
  @Output() paisSelEmitter = new EventEmitter<Pais>();

  constructor(private paisServ:PaisService) { }

  ngOnInit(): void {
  }

  setPaisSeleccionado(pais:Pais){
    this.paisSeleccionado = pais;
    //this.paisSelEmitter.emit(pais);
  }
}
