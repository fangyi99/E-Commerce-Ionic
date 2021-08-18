(self["webpackChunke_commerceApp"] = self["webpackChunke_commerceApp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 72006:
/*!*****************************************!*\
  !*** ./src/app/calendar-api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarApiService": () => (/* binding */ CalendarApiService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 91841);



let CalendarApiService = class CalendarApiService {
    constructor(http) {
        this.http = http;
        this.apiKey = "ba2e4dfa3ba60adc04e45b9b0d4225ec9e2b2373";
        this.baseUrl = "https://calendarific.com/api/v2";
    }
    //get all holidays
    //pass in required parameters(api_key, country & year) with the base url
    getAllHolidays() {
        return this.http.get(this.baseUrl + '/holidays?api_key=' + this.apiKey + '&country=SG&year=2021');
    }
};
CalendarApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
CalendarApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CalendarApiService);



/***/ }),

/***/ 42580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic2-calendar */ 87732);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17324);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1-routing.module */ 42580);










let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_3__.Tab1PageRoutingModule,
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__.NgCalendarModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page],
        providers: [_ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_2__.LocalNotifications]
    })
], Tab1PageModule);



/***/ }),

/***/ 46923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 99474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _event_modal_event_modal_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-modal/event-modal.page */ 89718);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ 56717);
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ 17324);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ 52891);
/* harmony import */ var _calendar_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar-api.service */ 72006);










let Tab1Page = class Tab1Page {
    constructor(navCtrl, modalController, firestore, localNotification, auth, api) {
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.firestore = firestore;
        this.localNotification = localNotification;
        this.auth = auth;
        this.api = api;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.publicHolidays = [];
        //get all public holidays from api and display in local calendar
        this.api.getAllHolidays().subscribe((data) => {
            this.publicHolidays = data;
            this.publicHolidays = this.publicHolidays.response.holidays;
            this.publicHolidays.forEach(ele => {
                let holiday = {};
                holiday.title = ele.name;
                holiday.startTime = new Date(ele.date.iso);
                holiday.endTime = new Date(ele.date.iso);
                this.eventSource.push(holiday);
            });
        });
        //get all users events from firebase and display in local calendar
        this.firestore.collection('Carts').doc('C' + this.auth.getUserId()).collection('Event').snapshotChanges().subscribe(colSnap => {
            colSnap.forEach(snap => {
                let event = snap.payload.doc.data();
                event.id = snap.payload.doc.id;
                event.startTime = (event.startTime).toDate();
                event.endTime = (event.endTime).toDate();
                this.eventSource.push(event);
            });
        });
    }
    //add new event
    addEvent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            //create modal and pass in selected date
            let modal = this.modalController.create({
                component: _event_modal_event_modal_page__WEBPACK_IMPORTED_MODULE_2__.EventModalPage,
                componentProps: {
                    selectedDay: this.selectedDay
                }
            });
            (yield modal).present();
            (yield modal).onDidDismiss().then((data) => {
                //if data exist
                if (data) {
                    //create event var
                    const event = {
                        title: data.data.title,
                        startTime: new Date(data.data.startTime),
                        endTime: new Date(data.data.endTime),
                        allDay: data.data.allDay,
                    };
                    //add new event in database
                    this.firestore.collection('Carts').doc('C' + this.auth.getUserId()).collection('Event').add(event);
                    //push event into local eventSource to display in calendar
                    this.eventSource.push(event);
                    //set notification based on event startTime
                    this.set_notification(event.title, event.startTime);
                }
            });
        });
    }
    //change month in title
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    //edit or delete selected event
    onEventSelected(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            //disable editing or deleting of public holidays
            //NOTE: public holidays do not have id field
            if (event.id != null) {
                let modal = this.modalController.create({
                    component: _event_modal_event_modal_page__WEBPACK_IMPORTED_MODULE_2__.EventModalPage,
                    componentProps: {
                        id: event.id,
                        title: event.title,
                        startTime: event.startTime,
                        endTime: event.endTime,
                        allDay: event.allDay,
                    }
                });
                (yield modal).present();
                (yield modal).onDidDismiss().then((data) => {
                    //update event only when data is available after editing and not after event is deleted 
                    if (data.data) {
                        const event = {
                            title: data.data.title,
                            startTime: new Date(data.data.startTime),
                            endTime: new Date(data.data.endTime),
                            allDay: data.data.allDay,
                        };
                        this.firestore.collection('Carts').doc('C' + this.auth.getUserId()).collection('Event').doc(data.data.id).update(event);
                        this.eventSource.push(event);
                        this.set_notification(event.title, event.startTime);
                    }
                });
            }
        });
    }
    onTimeSelected(ev) {
        this.selectedDay = ev.selectedTime;
    }
    set_notification(title, date) {
        this.localNotification.schedule({
            text: title,
            trigger: { at: new Date(date.getTime()) },
            led: 'FF0000',
            sound: null
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore },
    { type: _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_3__.LocalNotifications },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _calendar_api_service__WEBPACK_IMPORTED_MODULE_5__.CalendarApiService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 99474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-fab {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYiB7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n        <ion-title>\n            {{viewTitle}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\" (onEventSelected)=\"onEventSelected($event)\" (onTitleChanged)=\"onViewTitleChanged($event)\" (onTimeSelected)=\"onTimeSelected($event)\" step=\"30\" class=\"calendar\">\n    </calendar>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button [disabled]=\"!auth.isLoggedIn()\" (click)=\"addEvent()\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map