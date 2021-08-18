import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore, private fireAuth: AngularFireAuth) {}

  //get user details
  getUser(id){
    return this.firestore.collection('Users').doc(id).valueChanges();
  }

  async addUser(){
    let user = await this.fireAuth.currentUser;
    return this.firestore.collection('Users').doc(user.uid).set({
      'username': user.displayName,
      'mobile': user.phoneNumber,
      'email': user.email,
      'photo': user.photoURL
    });
  }

  updateUser(id, account){
    return this.firestore.collection('Users').doc(id).update(account);
  }
}
