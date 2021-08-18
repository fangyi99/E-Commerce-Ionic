import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  userId: String;
  cartId = null;
  favourited: boolean;

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
    this.userId = authService.getUserId();
    this.cartId = 'C'+this.userId;
   }

   //get user details
   getFavourites(){
    return this.firestore.collection('Carts').doc(this.cartId).collection('Favourite').valueChanges({idField: 'id'});
  }

  addToFavourites(item){
    return this.firestore.collection('Carts').doc(this.cartId).collection('Favourite').doc('F'+item.id).set({
      'image': item.image,
      'product': item.name,
      'price': item.price
    });
  }

  deleteFavouriteItem(id){
    return this.firestore.collection('Carts').doc(this.cartId).collection('Favourite').doc(id).delete();
  }

  isFavourited(id){
    this.firestore.collection('Carts').doc(this.cartId).collection('Favourite').doc('F'+id).ref.get()
    .then((item)=>{
      this.favourited = item.exists;
    });
    return this.favourited;
  }

}
