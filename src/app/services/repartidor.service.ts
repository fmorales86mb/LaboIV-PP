import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Generic } from '../modules/shared/generic.service';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService extends Generic<any>{

  constructor(private fire:AngularFirestore) {
    super(fire);
    
   }
}
