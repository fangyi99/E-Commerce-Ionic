(self["webpackChunke_commerceApp"] = self["webpackChunke_commerceApp"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 35355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page,
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 32486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4-routing.module */ 35355);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page */ 3631);







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab4PageRoutingModule
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_1__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab4.page.html */ 28203);
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss */ 35300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 52891);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guards/auth.guard */ 95107);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ 92785);







let Tab4Page = class Tab4Page {
    constructor(authService, authGuard, userService) {
        this.authService = authService;
        this.authGuard = authGuard;
        this.userService = userService;
        this.username = '';
        this.img = 'https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png';
    }
    ngOnInit() {
        this.userService.getUser(this.authService.getUserId()).subscribe(result => {
            this.user = result;
            if (this.user.photo != null) {
                this.img = this.user.photo;
            }
            if (this.user.username != null) {
                this.username = this.user.username;
            }
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab4Page);



/***/ }),

/***/ 35300:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  padding-left: 15px;\n}\n\nion-avatar {\n  margin-top: 20px;\n  width: 100px;\n  height: 100px;\n  border: #ddd solid 2px;\n}\n\nion-label {\n  padding-left: 5%;\n}\n\nion-icon {\n  padding-right: 5%;\n}\n\nion-button {\n  width: 91%;\n  margin: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtBQUNKIiwiZmlsZSI6InRhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5pb24tYXZhdGFyIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyOiAjZGRkIHNvbGlkIDJweDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5MSU7XHJcbiAgICBtYXJnaW46IDUlO1xyXG59Il19 */");

/***/ }),

/***/ 28203:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>Account</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-item class=\"header\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n            <img src=\"{{img}}\">\n        </ion-avatar>\n        <ion-label>Hi {{username}}!</ion-label>\n    </ion-item>\n\n    <ion-list>\n        <ion-item button>\n            <ion-icon name=\"checkmark\" item-start></ion-icon>\n            My Purchases\n        </ion-item>\n\n        <ion-item button [routerLink]=\"['/favourites']\">\n            <ion-icon name=\"heart\" item-start></ion-icon>\n            My Likes\n        </ion-item>\n\n        <ion-item button [routerLink]=\"['/profile']\">\n            <ion-icon name=\"person\" item-start></ion-icon>\n            Account Settings\n        </ion-item>\n\n        <ion-button (click)=\"authService.logout()\">\n            Logout\n        </ion-button>\n\n    </ion-list>\n\n</ion-content>\n\n\n\n<!--default unauthorised view-->\n<!-- <ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>Account</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-item class=\"header\" lines=\"none\">\n        <ion-avatar slot=\"start\">\n            <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png\">\n        </ion-avatar>\n        <ion-label class=\"label\" color=\"primary\" [routerLink]=\"['/login']\">Log In</ion-label>\n    </ion-item>\n\n    <ion-list>\n        <ion-item button disabled=\"true\">\n            <ion-icon name=\"checkmark\" item-start></ion-icon>\n            My Purchases\n        </ion-item>\n\n        <ion-item button disabled=\"true\">\n            <ion-icon name=\"heart\" item-start></ion-icon>\n            My Likes\n        </ion-item>\n\n        <ion-item button disabled=\"true\">\n            <ion-icon name=\"person\" item-start></ion-icon>\n            Profile Settings\n        </ion-item>\n\n    </ion-list>\n\n</ion-content> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts.js.map