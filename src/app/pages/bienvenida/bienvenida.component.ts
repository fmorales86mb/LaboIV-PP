import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  data:Object[];

  constructor(private httpService:HttpService) {

  }

  ngOnInit(): void {
    this.httpService.getData().subscribe((data)=>{
      console.log(data);
      this.data = data;
    })
  }

}
