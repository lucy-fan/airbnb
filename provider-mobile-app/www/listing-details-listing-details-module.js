(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listing-details-listing-details-module"],{

/***/ "./src/app/listing-details/listing-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/listing-details/listing-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ListingDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDetailsPageModule", function() { return ListingDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listing_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listing-details.page */ "./src/app/listing-details/listing-details.page.ts");







var routes = [
    {
        path: '',
        component: _listing_details_page__WEBPACK_IMPORTED_MODULE_6__["ListingDetailsPage"]
    }
];
var ListingDetailsPageModule = /** @class */ (function () {
    function ListingDetailsPageModule() {
    }
    ListingDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_listing_details_page__WEBPACK_IMPORTED_MODULE_6__["ListingDetailsPage"]]
        })
    ], ListingDetailsPageModule);
    return ListingDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/listing-details/listing-details.page.html":
/*!***********************************************************!*\
  !*** ./src/app/listing-details/listing-details.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Listing Details</ion-title>\n    <ion-button slot=\"start\" fill=\"clear\" size=\"large\" (click) = \"navToListings()\">\n      <ion-icon name=\"arrow-back\"></ion-icon>\n    </ion-button>\n    <ion-button slot=\"end\" fill=\"clear\" (click) = \"navToBookings()\">\n        Booking Requests\n      </ion-button>\n      <ion-button slot=\"end\" fill=\"clear\" (click) = \"navToEdit()\">\n          Edit\n      </ion-button>\n      <ion-button slot=\"end\" fill=\"clear\" (click) = \"deleteListing()\">\n          Delete\n      </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item><ion-label text-wrap>Title: {{listing.title}}</ion-label></ion-item>\n    <ion-item><ion-label text-wrap>Location: {{listing.location}}</ion-label></ion-item>\n    <ion-item><ion-label text-wrap>Number Of People: {{listing.numberOfPeople}}</ion-label></ion-item>\n    <ion-item><ion-label text-wrap>Price: ${{listing.pricePerNight}}/night</ion-label></ion-item>\n    <ion-item><ion-label text-wrap>Description: {{listing.description}}</ion-label></ion-item>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/listing-details/listing-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/listing-details/listing-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3RpbmctZGV0YWlscy9saXN0aW5nLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/listing-details/listing-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/listing-details/listing-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ListingDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingDetailsPage", function() { return ListingDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/listing.service */ "./src/app/services/listing.service.ts");
/* harmony import */ var _models_listing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/listing */ "./src/app/models/listing.ts");





var ListingDetailsPage = /** @class */ (function () {
    function ListingDetailsPage(navCtrl, listingService) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.listing = new _models_listing__WEBPACK_IMPORTED_MODULE_4__["Listing"]();
    }
    ListingDetailsPage.prototype.ngOnInit = function () { };
    ListingDetailsPage.prototype.ionViewWillEnter = function () {
        this.listing = this.listingService.getListing();
    };
    ListingDetailsPage.prototype.navToListings = function () {
        this.navCtrl.navigateForward("listings");
    };
    ListingDetailsPage.prototype.navToEdit = function () {
        this.navCtrl.navigateForward("edit-listing");
    };
    ListingDetailsPage.prototype.navToBookings = function () {
        this.listingService.setListing(this.listing);
        this.navCtrl.navigateForward("bookings");
    };
    ListingDetailsPage.prototype.deleteListing = function () {
        this.listingService.deleteListing(this.listing);
        this.navCtrl.navigateForward("listings");
    };
    ListingDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listing-details',
            template: __webpack_require__(/*! ./listing-details.page.html */ "./src/app/listing-details/listing-details.page.html"),
            styles: [__webpack_require__(/*! ./listing-details.page.scss */ "./src/app/listing-details/listing-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_listing_service__WEBPACK_IMPORTED_MODULE_3__["ListingService"]])
    ], ListingDetailsPage);
    return ListingDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=listing-details-listing-details-module.js.map