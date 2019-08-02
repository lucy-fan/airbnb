(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bookings-bookings-module"],{

/***/ "./src/app/bookings/bookings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.module.ts ***!
  \*********************************************/
/*! exports provided: BookingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function() { return BookingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookings.page */ "./src/app/bookings/bookings.page.ts");







var routes = [
    {
        path: '',
        component: _bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]
    }
];
var BookingsPageModule = /** @class */ (function () {
    function BookingsPageModule() {
    }
    BookingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
        })
    ], BookingsPageModule);
    return BookingsPageModule;
}());



/***/ }),

/***/ "./src/app/bookings/bookings.page.html":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        Bookings\n      </ion-title>\n      <ion-button slot=\"start\" fill=\"clear\" size=\"large\" (click) = \"navToDetails()\">\n          <ion-icon name=\"arrow-back\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list *ngFor=\"let booking of bookings let i=index\"> \n      <ion-card>\n        <ion-card-title>\n          Booking #{{booking.id}}<br>\n          Dates: From {{booking.dateStart}} to {{booking.dateEnd}}\n        </ion-card-title>\n        <ion-card-subtitle>Status: {{booking.status}}</ion-card-subtitle>\n        <ion-button color=success *ngIf='booking.status == showButtons' (click) = \"acceptButton(booking)\">Accept</ion-button>\n        <ion-button color=danger *ngIf='booking.status == showButtons' (click) = \"rejectButton(booking)\">Reject</ion-button>\n    </ion-card>\n    </ion-list> \n  </ion-content>"

/***/ }),

/***/ "./src/app/bookings/bookings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/bookings/bookings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmdzL2Jvb2tpbmdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bookings/bookings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/bookings/bookings.page.ts ***!
  \*******************************************/
/*! exports provided: BookingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsPage", function() { return BookingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _models_booking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/booking */ "./src/app/models/booking.ts");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/booking.service */ "./src/app/services/booking.service.ts");





var BookingsPage = /** @class */ (function () {
    function BookingsPage(navCtrl, bookingService) {
        this.navCtrl = navCtrl;
        this.bookingService = bookingService;
        this.booking = new _models_booking__WEBPACK_IMPORTED_MODULE_3__["Booking"]();
        this.bookings = [];
        this.showButtons = "pending";
    }
    BookingsPage.prototype.ngOnInit = function () { };
    BookingsPage.prototype.ionViewWillEnter = function () {
        this.bookings = this.bookingService.returnBookingsByListing();
    };
    BookingsPage.prototype.navToDetails = function () {
        this.navCtrl.navigateForward("listing-details");
    };
    BookingsPage.prototype.acceptButton = function (booking) {
        this.bookingService.setBooking(booking);
        this.bookingService.acceptBooking();
    };
    BookingsPage.prototype.rejectButton = function (booking) {
        this.bookingService.setBooking(booking);
        this.bookingService.rejectBooking();
    };
    BookingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bookings',
            template: __webpack_require__(/*! ./bookings.page.html */ "./src/app/bookings/bookings.page.html"),
            styles: [__webpack_require__(/*! ./bookings.page.scss */ "./src/app/bookings/bookings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_booking_service__WEBPACK_IMPORTED_MODULE_4__["BookingService"]])
    ], BookingsPage);
    return BookingsPage;
}());



/***/ }),

/***/ "./src/app/models/booking.ts":
/*!***********************************!*\
  !*** ./src/app/models/booking.ts ***!
  \***********************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
var Booking = /** @class */ (function () {
    function Booking() {
        this.id = 0;
        this.listingId = 0;
        this.userId = 0;
        this.status = "";
        this.dateStart = "";
        this.dateEnd = "";
    }
    return Booking;
}());



/***/ }),

/***/ "./src/app/services/booking.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/booking.service.ts ***!
  \*********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_booking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/booking */ "./src/app/models/booking.ts");
/* harmony import */ var _models_listing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/listing */ "./src/app/models/listing.ts");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/listing.service */ "./src/app/services/listing.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");








var BookingService = /** @class */ (function () {
    function BookingService(http, userService, listingService) {
        this.http = http;
        this.userService = userService;
        this.listingService = listingService;
        this.bookings = [];
        this.booking = new _models_booking__WEBPACK_IMPORTED_MODULE_3__["Booking"]();
        this.listing = new _models_listing__WEBPACK_IMPORTED_MODULE_4__["Listing"]();
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_6__["User"]();
        this.showButtons = "pending";
        this.user = this.userService.getUser();
        this.listing = this.listingService.getListing();
    }
    BookingService.prototype.ngOnInit = function () {
    };
    BookingService.prototype.setBooking = function (booking) {
        this.booking = booking;
    };
    BookingService.prototype.getBooking = function () {
        return this.booking;
    };
    BookingService.prototype.getStatus = function () {
        return this.booking.status;
    };
    BookingService.prototype.addBooking = function (booking) {
        return this.http.post('http://localhost:5000/api/bookings/add', booking);
    };
    BookingService.prototype.returnBookingsByListing = function () {
        var _this = this;
        this.bookings = [];
        var id = this.listingService.getListing().id;
        this.http.get('http://localhost:5000/api/bookings/listing/' + id).subscribe(function (response) {
            Object.values(response).forEach(function (booking) {
                _this.bookings.push(booking);
            });
        });
        return this.bookings;
    };
    BookingService.prototype.acceptBooking = function () {
        this.booking.status = "accepted";
        this.http.post('http://localhost:5000/api/bookings/update', this.booking).subscribe(function (response) {
        });
    };
    BookingService.prototype.rejectBooking = function () {
        this.booking.status = "rejected";
        this.http.post('http://localhost:5000/api/bookings/update', this.booking).subscribe(function (response) {
        });
    };
    BookingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _services_listing_service__WEBPACK_IMPORTED_MODULE_5__["ListingService"]])
    ], BookingService);
    return BookingService;
}());



/***/ })

}]);
//# sourceMappingURL=bookings-bookings-module.js.map