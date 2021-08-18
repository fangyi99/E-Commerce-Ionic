(self["webpackChunke_commerceApp"] = self["webpackChunke_commerceApp"] || []).push([["default-src_app_cart-modal_cart-modal_page_ts"],{

/***/ 73276:
/*!***********************************************!*\
  !*** ./src/app/cart-modal/cart-modal.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModalPage": () => (/* binding */ CartModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cart_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cart-modal.page.html */ 69441);
/* harmony import */ var _cart_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-modal.page.scss */ 63850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ 3705);






let CartModalPage = class CartModalPage {
    constructor(navParams, cartService, modalController, toastController) {
        this.navParams = navParams;
        this.cartService = cartService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.product = null;
        this.quantity = 1;
        this.product = this.navParams.get('product');
    }
    ngOnInit() {
    }
    addToCart() {
        this.cartService.addToCart(this.product, this.quantity);
        this.closeModal();
        const toast = this.toastController.create({
            message: 'Added to cart',
            duration: 3000,
            position: 'bottom'
        }).then(alert => alert.present());
    }
    add() {
        if (this.quantity <= this.product.stock) {
            this.quantity++;
        }
    }
    minus() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
    closeModal() {
        this.modalController.dismiss();
    }
};
CartModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavParams },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
CartModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cart-modal',
        template: _raw_loader_cart_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cart_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CartModalPage);



/***/ }),

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

/***/ 63850:
/*!*************************************************!*\
  !*** ./src/app/cart-modal/cart-modal.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".container {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  position: absolute;\n  top: 0;\n}\n\n.header {\n  vertical-align: middle;\n  margin: 5%;\n}\n\n.close {\n  position: relative;\n  right: 0;\n  top: 0;\n}\n\nimg,\n.price {\n  display: inline-block;\n}\n\nimg {\n  width: 40%;\n}\n\n.content {\n  margin: 5%;\n}\n\nion-row {\n  margin-top: 5%;\n}\n\n.add {\n  width: 100%;\n}\n\n.quantity {\n  margin-top: 5%;\n  display: inline-flex;\n}\n\nion-input {\n  width: 80px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBQ0o7O0FBRUE7O0VBRUkscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiY2FydC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luOiA1JTtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG5pbWcsXHJcbi5wcmljZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG5pb24tcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uYWRkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucXVhbnRpdHkge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 69441:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart-modal/cart-modal.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n    <div class=\"container\">\n        <ion-toolbar>\n            <ion-buttons slot=\"primary\">\n                <ion-button (click)=\"closeModal()\">\n                    <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n\n        <div class=\"header\">\n            <img src=\"{{product.image}}\">\n            <ion-title class=\"price\">${{product.price}}</ion-title>\n        </div>\n\n        <div class=\"content\">\n            <ion-title>Quantity</ion-title>\n\n            <div class=\"quantity\">\n                <button (click)=\"minus()\">\n                    <ion-icon name=\"remove\" slot=\"icon-only\"></ion-icon>\n                </button>\n                <ion-input class=\"input\" [value]=\"quantity\"></ion-input>\n                <button (click)=\"add()\">\n                    <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n                </button>\n            </div>\n\n            <ion-row>\n                <ion-button class=\"add\" (click)=\"addToCart()\">Add to cart</ion-button>\n            </ion-row>\n        </div>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_cart-modal_cart-modal_page_ts.js.map