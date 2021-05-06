import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/models/pais';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {

  paises:Pais[];
  showSpinner:boolean;

  @Output() paisSeleccionadoEmitter = new EventEmitter<Pais>();

  constructor(private paisesService:PaisService) { 
    this.showSpinner = true
  }

  ngOnInit(): void {
    this.paisesService.getPais().subscribe((items)=>{
      this.paises = items.map(item => {
        let pais = new Pais();
        pais.bandera = item.flag;
        pais.name = item.name;
        return pais;
      });

      this.showSpinner=false;
    })
  }

  seleccionarPais(pais:Pais){
    this.paisSeleccionadoEmitter.emit(pais);
  }


}
