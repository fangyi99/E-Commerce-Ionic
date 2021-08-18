import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController } from '@ionic/angular';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  product = null;
  quantity: number = 1;

  constructor(private navParams: NavParams, private cartService: CartService, 
    private modalController: ModalController, private toastController: ToastController) {
    this.product = this.navParams.get('product');
   }

  ngOnInit() {
  }

  addToCart(){
    this.cartService.addToCart(this.product, this.quantity);
    this.closeModal();
    const toast = this.toastController.create({
      message: 'Added to cart',
      duration: 3000,
      position: 'bottom'
      }).then(alert => alert.present());
  }

  add(){
    if(this.quantity <= this.product.stock){
      this.quantity++;
    }
  }

  minus(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

    closeModal(){
      this.modalController.dismiss();
    }

}
