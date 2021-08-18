(self["webpackChunke_commerceApp"] = self["webpackChunke_commerceApp"] || []).push([["src_app_favourites_favourites_module_ts"],{

/***/ 93796:
/*!*********************************************************!*\
  !*** ./src/app/favourites/favourites-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesPageRoutingModule": () => (/* binding */ FavouritesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourites.page */ 41445);




const routes = [
    {
        path: '',
        component: _favourites_page__WEBPACK_IMPORTED_MODULE_0__.FavouritesPage
    }
];
let FavouritesPageRoutingModule = class FavouritesPageRoutingModule {
};
FavouritesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FavouritesPageRoutingModule);



/***/ }),

/***/ 45633:
/*!*************************************************!*\
  !*** ./src/app/favourites/favourites.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesPageModule": () => (/* binding */ FavouritesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _favourites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favourites-routing.module */ 93796);
/* harmony import */ var _favourites_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.page */ 41445);







let FavouritesPageModule = class FavouritesPageModule {
};
FavouritesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _favourites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavouritesPageRoutingModule
        ],
        declarations: [_favourites_page__WEBPACK_IMPORTED_MODULE_1__.FavouritesPage]
    })
], FavouritesPageModule);



/***/ }),

/***/ 41445:
/*!***********************************************!*\
  !*** ./src/app/favourites/favourites.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesPage": () => (/* binding */ FavouritesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./favourites.page.html */ 52860);
/* harmony import */ var _favourites_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favourites.page.scss */ 97294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _favourite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../favourite.service */ 14788);






let FavouritesPage = class FavouritesPage {
    constructor(favouriteService, toastController) {
        this.favouriteService = favouriteService;
        this.toastController = toastController;
        this.favourites = [];
        this.favouriteService.getFavourites().subscribe((data) => {
            this.favourites = data;
        });
    }
    ngOnInit() {
    }
    deleteFromFavourite(id) {
        this.favouriteService.deleteFavouriteItem(id);
        const toast = this.toastController.create({
            message: 'Removed from favourite',
            duration: 3000,
            position: 'bottom'
        }).then(alert => alert.present());
    }
};
FavouritesPage.ctorParameters = () => [
    { type: _favourite_service__WEBPACK_IMPORTED_MODULE_2__.FavouriteService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
FavouritesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-favourites',
        template: _raw_loader_favourites_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_favourites_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FavouritesPage);



/***/ }),

/***/ 97294:
/*!*************************************************!*\
  !*** ./src/app/favourites/favourites.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-text {\n  font-size: 120%;\n  color: #ff9a00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhdm91cml0ZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJmYXZvdXJpdGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIGNvbG9yOiAjZmY5YTAwO1xyXG59Il19 */");

/***/ }),

/***/ 52860:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favourites/favourites.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Favourites</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let item of favourites\">\n            <ion-item>\n                <ion-thumbnail slot=\"start\">\n                    <ion-img [src]=\"item.image\"></ion-img>\n                </ion-thumbnail>\n\n                <ion-label class=\"ion-text-wrap\">\n                    {{item.product}}<br>\n                    <ion-text>${{item.price}}</ion-text>\n                </ion-label>\n\n            </ion-item>\n            <ion-item-options side=\"end\">\n                <ion-item-option color=\"danger\" (click)=\"deleteFromFavourite(item.id)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n\n    </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_favourites_favourites_module_ts.js.map