import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Generic } from '../modules/shared/generic.service';

@Injectable({
  providedIn: 'root'
})
export class ServService extends Generic<any>{

  constructor(private fire:AngularFirestore) {
    super(fire);
    super.setCollection("repartidores");
   }
}
