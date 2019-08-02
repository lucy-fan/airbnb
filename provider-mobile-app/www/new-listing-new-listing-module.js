(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-listing-new-listing-module"],{

/***/ "./src/app/new-listing/new-listing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/new-listing/new-listing.module.ts ***!
  \***************************************************/
/*! exports provided: NewListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListingPageModule", function() { return NewListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-listing.page */ "./src/app/new-listing/new-listing.page.ts");







var routes = [
    {
        path: '',
        component: _new_listing_page__WEBPACK_IMPORTED_MODULE_6__["NewListingPage"]
    }
];
var NewListingPageModule = /** @class */ (function () {
    function NewListingPageModule() {
    }
    NewListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_listing_page__WEBPACK_IMPORTED_MODULE_6__["NewListingPage"]]
        })
    ], NewListingPageModule);
    return NewListingPageModule;
}());



/***/ }),

/***/ "./src/app/new-listing/new-listing.page.html":
/*!***************************************************!*\
  !*** ./src/app/new-listing/new-listing.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>New Rental</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-card>\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"title\" placeholder=\"Title\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"location\" placeholder=\"Location\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type=\"number\" [(ngModel)]=\"numberOfPeople\" placeholder=\"Number Of People\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type=\"number\" [(ngModel)]=\"pricePerNight\" placeholder=\"Price Per Night\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-textarea rows=\"10\" type=\"text\" [(ngModel)]=\"description\" placeholder=\"Description\"></ion-textarea>\n      </ion-item>\n  \n    <ion-button (click) = \"createListing()\">Create</ion-button>\n    </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/new-listing/new-listing.page.scss":
/*!***************************************************!*\
  !*** ./src/app/new-listing/new-listing.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1saXN0aW5nL25ldy1saXN0aW5nLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/new-listing/new-listing.page.ts":
/*!*************************************************!*\
  !*** ./src/app/new-listing/new-listing.page.ts ***!
  \*************************************************/
/*! exports provided: NewListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListingPage", function() { return NewListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _models_listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/listing */ "./src/app/models/listing.ts");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/listing.service */ "./src/app/services/listing.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");







var NewListingPage = /** @class */ (function () {
    function NewListingPage(navCtrl, listingService, userService) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.userService = userService;
        this.listing = new _models_listing__WEBPACK_IMPORTED_MODULE_3__["Listing"]();
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.user = this.userService.getUser();
    }
    NewListingPage.prototype.ngOnInit = function () {
    };
    NewListingPage.prototype.createListing = function () {
        this.listing.title = this.title;
        this.listing.location = this.location;
        this.listing.description = this.description;
        this.listing.numberOfPeople = this.numberOfPeople;
        this.listing.pricePerNight = this.pricePerNight;
        this.listing.hostId = this.user.id;
        this.listingService.addListing(this.listing);
        this.navCtrl.navigateForward("listings");
    };
    NewListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-listing',
            template: __webpack_require__(/*! ./new-listing.page.html */ "./src/app/new-listing/new-listing.page.html"),
            styles: [__webpack_require__(/*! ./new-listing.page.scss */ "./src/app/new-listing/new-listing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_listing_service__WEBPACK_IMPORTED_MODULE_4__["ListingService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], NewListingPage);
    return NewListingPage;
}());



/***/ })

}]);
//# sourceMappingURL=new-listing-new-listing-module.js.map