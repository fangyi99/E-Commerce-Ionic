(self["webpackChunke_commerceApp"] = self["webpackChunke_commerceApp"] || []).push([["src_app_forget-pass_forget-pass_module_ts"],{

/***/ 39854:
/*!***********************************************************!*\
  !*** ./src/app/forget-pass/forget-pass-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPassPageRoutingModule": () => (/* binding */ ForgetPassPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _forget_pass_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-pass.page */ 63666);




const routes = [
    {
        path: '',
        component: _forget_pass_page__WEBPACK_IMPORTED_MODULE_0__.ForgetPassPage
    }
];
let ForgetPassPageRoutingModule = class ForgetPassPageRoutingModule {
};
ForgetPassPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgetPassPageRoutingModule);



/***/ }),

/***/ 8766:
/*!***************************************************!*\
  !*** ./src/app/forget-pass/forget-pass.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPassPageModule": () => (/* binding */ ForgetPassPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _forget_pass_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forget-pass-routing.module */ 39854);
/* harmony import */ var _forget_pass_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-pass.page */ 63666);







let ForgetPassPageModule = class ForgetPassPageModule {
};
ForgetPassPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forget_pass_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPassPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_forget_pass_page__WEBPACK_IMPORTED_MODULE_1__.ForgetPassPage]
    })
], ForgetPassPageModule);



/***/ }),

/***/ 63666:
/*!*************************************************!*\
  !*** ./src/app/forget-pass/forget-pass.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPassPage": () => (/* binding */ ForgetPassPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_forget_pass_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forget-pass.page.html */ 52464);
/* harmony import */ var _forget_pass_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forget-pass.page.scss */ 292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 49743);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);







let ForgetPassPage = class ForgetPassPage {
    constructor(fireAuth, toastController, router) {
        this.fireAuth = fireAuth;
        this.toastController = toastController;
        this.router = router;
    }
    ngOnInit() {
    }
    resetPassword() {
        return this.fireAuth.sendPasswordResetEmail(this.email).then(data => {
            const toast = this.toastController.create({
                message: 'Password reset email sent',
                duration: 2000,
                position: 'bottom'
            }).then(alert => alert.present());
            this.router.navigate(['login']);
        }).catch(err => { console.log(err); });
    }
};
ForgetPassPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ForgetPassPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forget-pass',
        template: _raw_loader_forget_pass_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forget_pass_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgetPassPage);



/***/ }),

/***/ 292:
/*!***************************************************!*\
  !*** ./src/app/forget-pass/forget-pass.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".logo {\n  width: 50%;\n  margin: auto;\n  text-align: center;\n  padding-top: 5%;\n  padding-bottom: 3%;\n}\n\n.logo img {\n  width: 50%;\n  height: 50%;\n}\n\nform {\n  width: 80%;\n  margin: auto;\n}\n\nh3,\np {\n  text-align: center;\n  margin: 4%;\n}\n\nion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBOztFQUVJLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6ImZvcmdldC1wYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbn1cclxuXHJcbi5sb2dvIGltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaDMsXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA0JTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ 52464:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forget-pass/forget-pass.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"['/login']\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Recover Your Account</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    <div class=\"logo\">\n        <img src=\"assets/images/logo.JPG\" />\n    </div>\n    <h3>Forgot your Password?</h3><br>\n    <p>Enter your email below and we'll send you instructions to recover your password.</p>\n    <form>\n        <ion-item>\n            <!-- <ion-label position=\"floating\">Email</ion-label> -->\n            <ion-input type=\"email\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\"></ion-input>\n        </ion-item><br>\n        <ion-row>\n            <ion-col>\n                <ion-button (click)=\"resetPassword()\">Recover Password</ion-button>\n            </ion-col>\n        </ion-row>\n    </form>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_forget-pass_forget-pass_module_ts.js.map