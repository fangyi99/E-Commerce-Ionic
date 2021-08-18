import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {

  searchInput: string;
  products: any[];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { 

    //if router params == all, then subscribe all products to products array list
    if(this.activatedRoute.snapshot.params.category == 'all'){
      this.productService.getAllProducts().subscribe((data:any)=>{
        this.products = data;
        //get search input from previous page through queryParams and set it to local searchInput variable
        this.activatedRoute.queryParams.subscribe(params => {
          this.searchInput = params.searchInput;
        })
      })
    }
    //if not, then fetch products based on selected category and subscribe to array list
    else{
      productService.getProductsByCategory(this.activatedRoute.snapshot.params.category).subscribe((data:any)=> {
        this.products = data;
      });
    }
  }

  ngOnInit() {
  }

  clearInput(){
    this.searchInput = null;
  }

}
