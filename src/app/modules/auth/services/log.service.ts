import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Generic } from '../../shared/generic.service';


@Injectable({
  providedIn: 'root'
})
export class LogService extends Generic<any>{

  constructor(private fire:AngularFirestore) {
    super(fire);
    //this.logService.setCollection("logIngreso");
  }
}
