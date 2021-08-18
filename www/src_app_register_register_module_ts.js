(self["webpackChunke_commerceApp"] = self["webpackChunke_commerceApp"] || []).push([["src_app_register_register_module_ts"],{

/***/ 23963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 98135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 18723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 23963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 98135);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 98135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 29200);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 69728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 52891);






let RegisterPage = class RegisterPage {
    constructor(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.registerForm = formBuilder.group({
            'email': '',
            'password': ''
        });
    }
    ngOnInit() {
    }
    register() {
        this.authService.register(this.registerForm.value.email, this.registerForm.value.password);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 69728:
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".logo {\n  width: 50%;\n  margin: auto;\n  text-align: center;\n  padding-top: 5%;\n  padding-bottom: 3%;\n}\n\n.logo img {\n  width: 50%;\n  height: 50%;\n}\n\n.logo2 {\n  display: none;\n}\n\nform {\n  width: 80%;\n  margin: auto;\n  padding-bottom: 2%;\n}\n\n.note {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: gray;\n  font-size: 70%;\n  display: block;\n  text-align: center;\n}\n\nion-button {\n  width: 100%;\n}\n\n.icons {\n  margin: auto;\n  text-align: center;\n}\n\n.icons img {\n  width: 15%;\n  height: 15%;\n  margin: 5%;\n  cursor: pointer;\n}\n\n.login {\n  color: blue;\n  font-size: 140%;\n  margin-left: 70%;\n  margin-bottom: 8%;\n}\n\n@media screen and (min-width: 750px) {\n  .logo img {\n    display: none;\n  }\n\n  .icons img {\n    width: 10%;\n    height: 10%;\n    margin: 5%;\n    cursor: pointer;\n  }\n\n  .login {\n    color: blue;\n    font-size: 140%;\n    margin-left: 80%;\n    margin-bottom: 8%;\n  }\n}\n\n@media screen and (min-width: 1000px) {\n  .logo img {\n    display: none;\n  }\n\n  .logo2 img {\n    height: 40px;\n  }\n\n  .logo2,\nion-title {\n    display: inline-block;\n    text-align: center;\n  }\n\n  .icons img {\n    width: 8%;\n    height: 8%;\n    margin: 5% 5% 0px 5%;\n    cursor: pointer;\n  }\n\n  .login {\n    color: blue;\n    font-size: 140%;\n    margin-left: 74%;\n  }\n\n  form {\n    width: 60%;\n    margin: auto;\n    margin-top: -3%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGFBQUE7RUFDTjs7RUFDRTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtJQUNBLGVBQUE7RUFFTjs7RUFBRTtJQUNJLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQUdOO0FBQ0Y7O0FBQUE7RUFDSTtJQUNJLGFBQUE7RUFFTjs7RUFBRTtJQUNJLFlBQUE7RUFHTjs7RUFERTs7SUFFSSxxQkFBQTtJQUNBLGtCQUFBO0VBSU47O0VBRkU7SUFDSSxTQUFBO0lBQ0EsVUFBQTtJQUNBLG9CQUFBO0lBQ0EsZUFBQTtFQUtOOztFQUhFO0lBQ0ksV0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQU1OOztFQUpFO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBT047QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG4ubG9nbyBpbWcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4ubG9nbzIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4ubm90ZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDcwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaWNvbnMgaW1nIHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICAgIG1hcmdpbjogNSU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbiB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NTBweCkge1xyXG4gICAgLmxvZ28gaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmljb25zIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICBtYXJnaW46IDUlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5sb2dpbiB7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAwMHB4KSB7XHJcbiAgICAubG9nbyBpbWcge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubG9nbzIgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAubG9nbzIsXHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaWNvbnMgaW1nIHtcclxuICAgICAgICB3aWR0aDogOCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4JTtcclxuICAgICAgICBtYXJnaW46IDUlIDUlIDBweCA1JTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAubG9naW4ge1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTQwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNzQlO1xyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMlO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 29200:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"['']\">\n                <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <div class=\"logo2\">\n            <img src=\"assets/images/logo.JPG\">\n        </div>\n        <ion-title>Sign Up</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"logo\">\n        <img src=\"assets/images/logo.JPG\" />\n    </div>\n    <form [formGroup]=\"registerForm\">\n        <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n        </ion-item>\n        <br>\n        <ion-row>\n            <ion-col>\n                <ion-button (click)=\"register()\">Sign Up</ion-button>\n            </ion-col>\n        </ion-row>\n\n        <span class=\"note\">By signing up, you agree to ReGift's Terms & Conditions.</span>\n\n        <div class=\"icons\">\n            <img src=\"assets/images/google.png\" (click)=\"authService.googleLogin()\" />\n            <img src=\"assets/images/yahoo.png\" />\n        </div>\n\n    </form>\n\n</ion-content>\n\n<span class=\"login\" [routerLink]=\"['/login']\">Login</span>");

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts.js.map