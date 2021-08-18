(self["webpackChunke_commerceApp"] = self["webpackChunke_commerceApp"] || []).push([["src_app_listing_listing_module_ts"],{

/***/ 44981:
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ng2SearchPipeModule": () => (/* binding */ Ng2SearchPipeModule),
/* harmony export */   "Ng2SearchPipe": () => (/* binding */ Ng2SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-search-filter.js.map

/***/ }),

/***/ 32790:
/*!***************************************************!*\
  !*** ./src/app/listing/listing-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingPageRoutingModule": () => (/* binding */ ListingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _listing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listing.page */ 4664);




const routes = [
    {
        path: '',
        component: _listing_page__WEBPACK_IMPORTED_MODULE_0__.ListingPage
    }
];
let ListingPageRoutingModule = class ListingPageRoutingModule {
};
ListingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListingPageRoutingModule);



/***/ }),

/***/ 98231:
/*!*******************************************!*\
  !*** ./src/app/listing/listing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingPageModule": () => (/* binding */ ListingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _listing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listing-routing.module */ 32790);
/* harmony import */ var _listing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listing.page */ 4664);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 44981);








let ListingPageModule = class ListingPageModule {
};
ListingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _listing_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListingPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_listing_page__WEBPACK_IMPORTED_MODULE_1__.ListingPage]
    })
], ListingPageModule);



/***/ }),

/***/ 4664:
/*!*****************************************!*\
  !*** ./src/app/listing/listing.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListingPage": () => (/* binding */ ListingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_listing_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./listing.page.html */ 74300);
/* harmony import */ var _listing_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listing.page.scss */ 38072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product.service */ 92692);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let ListingPage = class ListingPage {
    constructor(productService, activatedRoute) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        //if router params == all, then subscribe all products to products array list
        if (this.activatedRoute.snapshot.params.category == 'all') {
            this.productService.getAllProducts().subscribe((data) => {
                this.products = data;
                //get search input from previous page through queryParams and set it to local searchInput variable
                this.activatedRoute.queryParams.subscribe(params => {
                    this.searchInput = params.searchInput;
                });
            });
        }
        //if not, then fetch products based on selected category and subscribe to array list
        else {
            productService.getProductsByCategory(this.activatedRoute.snapshot.params.category).subscribe((data) => {
                this.products = data;
            });
        }
    }
    ngOnInit() {
    }
    clearInput() {
        this.searchInput = null;
    }
};
ListingPage.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ListingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-listing',
        template: _raw_loader_listing_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_listing_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListingPage);



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

/***/ 38072:
/*!*******************************************!*\
  !*** ./src/app/listing/listing.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-searchbar {\n  width: 90%;\n  --border: none;\n  --background: #f2f2f2;\n  --border-radius: 5%;\n  --box-shadow: none;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nion-card {\n  text-align: center;\n  width: 45%;\n  height: 300px;\n  display: inline-block;\n  margin: 2%;\n}\n\nimg {\n  width: 100%;\n  height: 200px;\n}\n\np {\n  width: 105%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media screen and (min-width: 750px) {\n  ion-card {\n    text-align: center;\n    width: 30%;\n    height: 300px;\n    display: inline-block;\n    margin: 1%;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  ion-card {\n    text-align: center;\n    width: 20%;\n    height: 300px;\n    display: inline-block;\n    margin: 2%;\n  }\n\n  .container {\n    margin-left: 2%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0lBQ0EscUJBQUE7SUFDQSxVQUFBO0VBQ047QUFDRjs7QUFFQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsYUFBQTtJQUNBLHFCQUFBO0lBQ0EsVUFBQTtFQUFOOztFQUVFO0lBQ0ksZUFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoibGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VhcmNoYmFyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICAtLWJvcmRlcjogbm9uZTtcclxuICAgIC0tYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIHdpZHRoOiAxMDUlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NTBweCkge1xyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAwMHB4KSB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAyJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 74300:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listing/listing.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-searchbar placeholder=\"Search for a product...\" [(ngModel)]=\"searchInput\" ionClear=\"clearInput()\"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content overflow-scroll=\"true\">\n    <div class=container>\n        <ion-card *ngFor=\"let product of products | filter:searchInput\" [routerLink]=\"['/product',product.id]\">\n            <img src=\"{{product.image}}\">\n            <ion-card-content>\n                <p>{{product.name}}</p>\n                <p>${{product.price}}</p>\n            </ion-card-content>\n        </ion-card>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_listing_listing_module_ts.js.map