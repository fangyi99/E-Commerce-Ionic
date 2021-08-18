(self["webpackChunke_commerceApp"] = self["webpackChunke_commerceApp"] || []).push([["src_app_cart-modal_cart-modal_module_ts"],{

/***/ 17019:
/*!*********************************************************!*\
  !*** ./src/app/cart-modal/cart-modal-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModalPageRoutingModule": () => (/* binding */ CartModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cart_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-modal.page */ 73276);




const routes = [
    {
        path: '',
        component: _cart_modal_page__WEBPACK_IMPORTED_MODULE_0__.CartModalPage
    }
];
let CartModalPageRoutingModule = class CartModalPageRoutingModule {
};
CartModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartModalPageRoutingModule);



/***/ }),

/***/ 59589:
/*!*************************************************!*\
  !*** ./src/app/cart-modal/cart-modal.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModalPageModule": () => (/* binding */ CartModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-modal-routing.module */ 17019);
/* harmony import */ var _cart_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-modal.page */ 73276);







let CartModalPageModule = class CartModalPageModule {
};
CartModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartModalPageRoutingModule
        ],
        declarations: [_cart_modal_page__WEBPACK_IMPORTED_MODULE_1__.CartModalPage]
    })
], CartModalPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_cart-modal_cart-modal_module_ts.js.map