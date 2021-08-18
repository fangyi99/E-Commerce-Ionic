(self["webpackChunke_commerceApp"] = self["webpackChunke_commerceApp"] || []).push([["src_app_details_details_module_ts"],{

/***/ 95048:
/*!***************************************************!*\
  !*** ./src/app/details/details-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 21735);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 10396:
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 95048);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 21735);







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 21735:
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./details.page.html */ 29795);
/* harmony import */ var _details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss */ 48202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ 56717);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 52891);
/* harmony import */ var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart-modal/cart-modal.page */ 73276);
/* harmony import */ var _favourite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../favourite.service */ 14788);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product.service */ 92692);











let DetailsPage = class DetailsPage {
    // favourited: boolean = false;
    constructor(activatedRoute, productService, favouriteService, modalController, auth, firestore) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.favouriteService = favouriteService;
        this.modalController = modalController;
        this.auth = auth;
        this.firestore = firestore;
        this.product = {};
    }
    ngOnInit() {
        //get product id from URL
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        //retrieve product information through product service
        this.productService.getProduct(id).subscribe(result => {
            this.product = result;
            this.product.id = id;
        });
    }
    //open add to cart modal
    openModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = this.modalController.create({
                component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_3__.CartModalPage,
                cssClass: 'modal',
                backdropDismiss: true,
                componentProps: {
                    product: this.product
                }
            });
            return (yield modal).present();
        });
    }
    // alreadyFavourited(){
    //   let productId = this.product.id;
    //   let product = this.firestore.collection('Carts').doc('C'+this.auth.getUserId).collection('Favourite').doc('F'+productId);
    //   if(product){
    //     console.log("product id: ", productId);
    //     console.log('exists');
    //     return true;
    //   }
    //   else{
    //     console.log('no exists');
    //     return false;
    //   }
    // }
    addToFavourites() {
        this.favouriteService.addToFavourites(this.product);
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService },
    { type: _favourite_service__WEBPACK_IMPORTED_MODULE_4__.FavouriteService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore }
];
DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-details',
        template: _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_details_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailsPage);



/***/ }),

/***/ 48202:
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("img {\n  width: 100%;\n  max-height: 350px;\n}\n\nion-title,\np {\n  padding: 10px 30px 0px 30px;\n}\n\nspan {\n  padding-left: 50px;\n}\n\nion-fab {\n  margin: 20px;\n}\n\nion-fab-button {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7O0VBRUksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6ImRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbmlvbi10aXRsZSxcclxucCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHggMHB4IDMwcHg7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG5pb24tZmFiIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 29795:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{product.name}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <img src=\"{{product.image}}\">\n    <ion-title>${{product.price}}</ion-title>\n    <ion-title>{{product.name}}</ion-title>\n    <ion-item-divider></ion-item-divider>\n    <p><b>Product Details</b></p>\n    <p>Stock <span>{{product.stock}}</span></p>\n    <p>Brand <span>{{product.brand}}</span></p>\n    <ion-item-divider></ion-item-divider>\n    <p>{{product.description}}</p>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click)=\"openModal()\">\n            <ion-icon name=\"cart\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"addToFavourites()\" [disabled]=\"!auth.isLoggedIn()\">\n            <ion-icon name=\"heart-outline\"></ion-icon>\n        </ion-fab-button>\n        <!-- <ion-fab-button (click)=\"addToFavourites()\" [hidden]=\"auth.isLoggedIn()&&!alreadyFavourited()\">\n            <ion-icon name=\"heart-outline\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button (click)=\"addToFavourites()\" [hidden]=\"auth.isLoggedIn()&&alreadyFavourited()\">\n            <ion-icon name=\"heart\"></ion-icon>\n        </ion-fab-button> -->\n    </ion-fab>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_details_details_module_ts.js.map