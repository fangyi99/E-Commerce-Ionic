import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: AngularFirestore) {
   }

   getAllProducts(){
    return this.firestore.collection('Products').valueChanges({idField: 'id'});
   }

  getProductsByCategory(category){
    let ref = this.firestore.collection('Products', ref => ref.where('category', '==', category))
    return ref.valueChanges({idField: 'id'});
  }

  getProduct(id){
    return this.firestore.collection('Products').doc(id).valueChanges({idField: 'id'});
  }

}
