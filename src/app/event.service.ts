import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private firestore: AngularFirestore, private auth: AuthService) { }

  getEvents(){
    return this.firestore.collection('Carts').doc('C' + this.auth.getUserId()).collection('Event').valueChanges({idField: 'id'});
  }

  addEvent(event){
    return this.firestore.collection('Carts').doc('C' + this.auth.getUserId()).collection('Event').add(event);
  }

  updateEvent(id, event){
    return this.firestore.collection('Carts').doc('C' + this.auth.getUserId()).collection('Event').doc(id).update(event);
  }

  deleteEvent(id){
    this.firestore.collection('Carts').doc('C' + this.auth.getUserId()).collection('Event').doc(id).delete();
  }
}
