import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pais } from 'src/app/models/pais';
import { PaisService } from 'src/app/services/pais.service';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-form-repartidor',
  templateUrl: './form-repartidor.component.html',
  styleUrls: ['./form-repartidor.component.css']
})
export class FormRepartidorComponent implements OnInit {

  public form: FormGroup;
  paisSeleccionado:string = "";
  isDisabled=true;
  @Input() paisSelec:Pais;

  constructor(private bf:FormBuilder, private serv:ServService) { }

  ngOnInit(): void {
    this.form = this.bf.group({
      nameCtrl:['', [Validators.required]],
      dniCtrl:['', [Validators.required, Validators.minLength(8), Validators.pattern("^[0-9]*$")]],
      ageCtrl:['', [Validators.required, Validators.max(98), Validators.min(19), Validators.pattern("^[0-9]*$")]],
      pizzasCtrl:['', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      paisCtrl:['', [Validators.required]],
      unidadCtrl:[false],      
    });    

    this.paisSeleccionado = this.paisSelec.name;
  }

  getnameCtrl(){    return this.form.get("nameCtrl");  }
  getdniCtrl(){    return this.form.get("dniCtrl");  }
  getageCtrl(){    return this.form.get("ageCtrl");  }
  getpizzasCtrl(){    return this.form.get("pizzasCtrl");  }
  getpaisCtrl(){    return this.form.get("paisCtrl");  }
  getunidadCtrl(){    return this.form.get("unidadCtrl");  }

  save(){
    
    let repartidor = {
      nombre:this.getnameCtrl().value,
      dni:this.getdniCtrl().value,
      edad:this.getageCtrl().value,
      pizzas:this.getpizzasCtrl().value,
      pais:{
        nombre:this.paisSelec.name,
        bandera:this.paisSelec.bandera,
      },
      unidad:this.getunidadCtrl().value,
    }

    console.log(repartidor);
    this.serv.addItem(repartidor);
  }
}
