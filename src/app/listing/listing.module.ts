import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListingPageRoutingModule } from './listing-routing.module';
import { ListingPage } from './listing.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListingPage]
})
export class ListingPageModule {}
