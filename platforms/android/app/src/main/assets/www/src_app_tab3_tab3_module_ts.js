(self["webpackChunke_commerceApp"] = self["webpackChunke_commerceApp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 3705:
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 56717);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 42329);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.service */ 92692);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 52891);






const INCREMENT = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.firestore.FieldValue.increment(1);
const DECREMENT = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.firestore.FieldValue.increment(-1);
let CartService = class CartService {
    constructor(firestore, authService, productService) {
        this.firestore = firestore;
        this.authService = authService;
        this.productService = productService;
        this.userId = this.authService.getUserId();
        this.cartId = 'C' + this.userId;
        this.loadCart();
    }
    createCartId() {
        if (this.userId == null && this.tempcartId == null) {
            this.tempcartId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 20);
        }
    }
    loadCart() {
        //if user is logged in, return user cart
        if (this.userId) {
            return this.firestore.collection('Carts').doc(this.cartId).collection('Basket').valueChanges({ idField: 'id' });
        }
        //if user is not logged in, create and return new cart
        else {
            this.createCartId();
            return this.firestore.collection('Carts').doc(this.tempcartId).collection('Basket').valueChanges({ idField: 'id' });
        }
    }
    addToCart(item, quantity) {
        // update stock quantity of product
        this.firestore.collection('Products').doc(item.id).update({
            stock: firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.firestore.FieldValue.increment(-quantity)
        });
        if (this.userId) {
            return this.firestore.collection('Carts').doc(this.cartId).collection('Basket').doc(item.id).set({
                'image': item.image,
                'product': item.name,
                'price': item.price,
                'quantity': quantity
            });
        }
        else {
            return this.firestore.collection('Carts').doc(this.tempcartId).collection('Basket').doc(item.id).set({
                'image': item.image,
                'product': item.name,
                'price': item.price,
                'quantity': quantity
            });
        }
    }
    //increase quantity of cart item
    increaseQty(id) {
        if (this.userId) {
            this.firestore.collection('Carts').doc(this.cartId).collection('Basket').doc(id).update({
                quantity: INCREMENT
            });
            // update stock quantity of product
            this.firestore.collection('Products').doc(id).update({
                stock: DECREMENT
            });
        }
        else {
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
    decreaseQty(id) {
        if (this.userId) {
            this.firestore.collection('Carts').doc(this.cartId).collection('Basket').doc(id).update({
                quantity: DECREMENT
            });
            console.log('Cart item updated');
            // update stock quantity of product
            this.firestore.collection('Products').doc(id).update({
                stock: INCREMENT
            });
        }
        else {
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
    deleteCartItem(item) {
        // update stock quantity of product
        this.firestore.collection('Products').doc(item.id).update({
            stock: firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.firestore.FieldValue.increment(item.quantity)
        });
        if (this.userId) {
            return this.firestore.collection('Carts').doc(this.cartId).collection('Basket').doc(item.id).delete();
        }
        else {
            return this.firestore.collection('Carts').doc(this.tempcartId).collection('Basket').doc(item.id).delete();
        }
    }
};
CartService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService }
];
CartService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ 92692:
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/firestore */ 56717);



let ProductService = class ProductService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getAllProducts() {
        return this.firestore.collection('Products').valueChanges({ idField: 'id' });
    }
    getProductsByCategory(category) {
        let ref = this.firestore.collection('Products', ref => ref.where('category', '==', category));
        return ref.valueChanges({ idField: 'id' });
    }
    getProduct(id) {
        return this.firestore.collection('Products').doc(id).valueChanges({ idField: 'id' });
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
ProductService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ 99818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 53746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 99818);









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
    })
], Tab3PageModule);



/***/ }),

/***/ 78592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 64255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 90943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ 3705);






let Tab3Page = class Tab3Page {
    constructor(cartService, toastController) {
        this.cartService = cartService;
        this.toastController = toastController;
        this.cart = [];
        this.cartService.loadCart().subscribe((data) => {
            this.cart = data;
        });
    }
    ngOnInit() {
    }
    add(id) {
        this.quantity++;
        this.cartService.increaseQty(id);
    }
    minus(id) {
        this.quantity--;
        this.cartService.decreaseQty(id);
    }
    deleteItem(item) {
        this.cartService.deleteCartItem(item);
        const toast = this.toastController.create({
            message: 'Removed from cart',
            duration: 3000,
            position: 'bottom'
        }).then(alert => alert.present());
    }
};
Tab3Page.ctorParameters = () => [
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 90943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 64255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            Cart\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let item of cart\">\n            <ion-item>\n                <ion-thumbnail slot=\"start\">\n                    <ion-img [src]=\"item.image\"></ion-img>\n                </ion-thumbnail>\n                <ion-grid>\n                    <ion-row>\n                        <ion-label>\n                            {{item.product}}\n                        </ion-label>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col>\n                            <ion-label>\n                                {{item.price}}\n                            </ion-label>\n                        </ion-col>\n                        <ion-col>\n                            <ion-row class=\"ion-no-padding ion-align-items-center\">\n                                <ion-col>\n                                    <button (click)=\"minus(item.id)\" fill=\"clear\">\n                                            <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                                    </button>\n                                </ion-col>\n                                <ion-col>\n                                    <ion-input class=\"input\" [value]=\"item.quantity\"></ion-input>\n                                </ion-col>\n                                <ion-col>\n                                    <button (click)=\"add(item.id)\" fill=\"clear\">\n                                            <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                                    </button>\n                                </ion-col>\n                            </ion-row>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-item>\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"danger\" (click)=\"cartService.deleteCartItem(item)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map