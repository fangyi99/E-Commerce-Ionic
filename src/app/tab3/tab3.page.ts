import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  cart: any = [];
  quantity: number;

  constructor(private cartService: CartService, private toastController: ToastController) {    
    this.cartService.loadCart().subscribe((data) => {
    this.cart = data;
  });}

  ngOnInit(){
  }

  add(id){
      this.quantity++;
      this.cartService.increaseQty(id);
  }

  minus(id){
      this.quantity--;
      this.cartService.decreaseQty(id);
  }

  deleteItem(item){
    this.cartService.deleteCartItem(item);
    const toast = this.toastController.create({
      message: 'Removed from cart',
      duration: 3000,
      position: 'bottom'
      }).then(alert => alert.present());
  }
}
