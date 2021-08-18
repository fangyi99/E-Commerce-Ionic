import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { FavouriteService } from '../favourite.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  sub: any;
  product: any = {};
  heartType: string ='heart-outline'

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, 
    private favouriteService: FavouriteService, private modalController: ModalController,
    private auth: AuthService, private toastController: ToastController) {
      //get product id from URL
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      //retrieve product information through product service
      this.sub = this.productService.getProduct(id).subscribe(result => {
        this.product = result;
        //asign heart icon name based on true / false value returned from function
        this.heartType = this.favouriteService.isFavourited(this.product.id) ? 'heart' : 'heart-outline';
      })
     }

  ngOnInit() {
  }

  //uncsubscribe to prevent memory leaks
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  //open add to cart modal
  async openModal(){
  const modal = this.modalController.create({
    component: CartModalPage,
    cssClass: 'modal',
    backdropDismiss: true,
    componentProps:{
      product: this.product
    }
  });
  return (await modal).present();
}

  toggleHeart(){
    //if item is not in favourite
    if(this.heartType == 'heart-outline'){
      //add to favourite
      this.favouriteService.addToFavourites(this.product);
      //toggle heart icon
      this.heartType = 'heart';
      //create toast message
      const toast = this.toastController.create({
        message: 'Added to favourite',
        duration: 3000,
        position: 'bottom'
        }).then(alert => alert.present());
    }
    //if item is already in favourite
    else{
      //delete from favourite
      this.favouriteService.deleteFavouriteItem('F'+this.product.id);
      //toggle heart icon
      this.heartType = 'heart-outline';
      //create toast message
      const toast = this.toastController.create({
        message: 'Removed from favourite',
        duration: 3000,
        position: 'bottom'
        }).then(alert => alert.present());
    }
  }
}
