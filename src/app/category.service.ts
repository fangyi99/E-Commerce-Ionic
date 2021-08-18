import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryCollection: AngularFirestoreCollection;

  constructor(private firestore: AngularFirestore) { 
    this.categoryCollection = this.firestore.collection('Categories');
  }

  getAllCategories() {
    return this.categoryCollection.valueChanges();
    }

}
