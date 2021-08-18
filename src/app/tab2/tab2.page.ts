import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  searchInput: string;
  categories: any[];

  constructor(private categoryService: CategoryService, private firestore: AngularFirestore, private router: Router) {
    // subscribe allows the data to be fetched whenever there is any changes to the data
    categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  search(){
    let navigationExtras: NavigationExtras = {queryParams: {searchInput: this.searchInput}};
    this.router.navigate(['/tab2/all'], navigationExtras);
    this.searchInput = null;
  }

}
