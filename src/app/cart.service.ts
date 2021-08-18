import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { ProductService } from './product.service';
import { AuthService } from './auth.service';

const INCREMENT = firebase.firestore.FieldValue.increment(1);
const DECREMENT = firebase.firestore.FieldValue.increment(-1);

@Injectable({
  providedIn: 'root'
})
export class CartService {

  userId = this.authService.getUserId();
  cartId = 'C' + this.userId;
  tempcartId;


  constructor(private firestore: AngularFirestore, private authService: AuthService, private productService: ProductService) {
    this.loadCart();
   }

   createCartId(){
     if(this.userId == null && this.tempcartId == null){
      this.tempcartId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 20);
     }
   }


    loadCart(){
      //if user is logged in, return user cart
      if(this.userId){
        return this.firestore.collection('Carts').doc(this.cartId).collection('Basket').valueChanges({idField: 'id'});
      }
      //if user is not logged in, create and return new cart
      else{
          this.createCartId();
          return this.firestore.collection('Carts').doc(this.tempcartId).collection('Basket').valueChanges({idField: 'id'});
      }
    }

    addToCart(item, quantity){
      // update stock quantity of product
      this.firestore.collection('Products').doc(item.id).update({
        stock: firebase.firestore.FieldValue.increment(-quantity)
      });
      if(this.userId){
      return this.firestore.collection('Carts').doc(this.cartId).collection('Basket').doc(item.id).set({
        'image': item.image,
        'product': item.name,
        'price': item.price,
        'quantity': quantity
      });
    }
    else{
      return this.firestore.collection('Carts').doc(this.tempcartId).collection('Basket').doc(item.id).set({
        'image': item.image,
        'product': item.name,
        'price': item.price,
        'quantity': quantity
      });
    }
    }

    //increase quantity of cart item
    increaseQty(id){
      if(this.userId){
      this.firestore.collection('Carts').doc(this.cartId).collection('Basket').doc(id).update({
        quantity: INCREMENT
      });

      // update stock quantity of product
      this.firestore.collection('Products').doc(id).update({
        stock: DECREMENT
      });
    }
    else{
      this.firestore.collection('Carts').doc(this.tempcartId).collection('Basket').doc(id).update({
        quantity: INCREMENT
      });

      // update stock quantity of product
      this.firestore.collection('Products').doc(id).update({
        stock: DECREMENT
      });
    }
    }

        //add cart item
        decreaseQty(id){
          if(this.userId){
          this.firestore.collection('Carts').doc(this.cartId).collection('Basket').doc(id).update({
            quantity: DECREMENT
          });

          console.log('Cart item updated');
    
          // update stock quantity of product
          this.firestore.collection('Products').doc(id).update({
            stock: INCREMENT
          });
        }
        else{
          this.firestore.collection('Carts').doc(this.tempcartId).collection('Basket').doc(id).update({
            quantity: DECREMENT
          });

          console.log('Cart item updated');
    
          // update stock quantity of product
          this.firestore.collection('Products').doc(id).update({
            stock: INCREMENT
          });
        }
        }

        deleteCartItem(item){
          // update stock quantity of product
          this.firestore.collection('Products').doc(item.id).update({
            stock: firebase.firestore.FieldValue.increment(item.quantity)
          });
          if(this.userId){
          return this.firestore.collection('Carts').doc(this.cartId).collection('Basket').doc(item.id).delete();
          }
          else{
            return this.firestore.collection('Carts').doc(this.tempcartId).collection('Basket').doc(item.id).delete();
          }
        }

}
