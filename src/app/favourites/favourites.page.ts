import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  favourites: any = [];

  constructor(private favouriteService: FavouriteService, private toastController: ToastController) { 
    this.favouriteService.getFavourites().subscribe((data) => {
      this.favourites = data;
    });
  }

  ngOnInit() {
  }

  deleteFromFavourite(id){
    this.favouriteService.deleteFavouriteItem(id);
    const toast = this.toastController.create({
      message: 'Removed from favourite',
      duration: 3000,
      position: 'bottom'
      }).then(alert => alert.present());
  }

}
