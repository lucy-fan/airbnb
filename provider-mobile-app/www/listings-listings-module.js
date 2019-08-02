(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listings-listings-module"],{

/***/ "./src/app/listings/listings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/listings/listings.module.ts ***!
  \*********************************************/
/*! exports provided: ListingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsPageModule", function() { return ListingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listings.page */ "./src/app/listings/listings.page.ts");







var routes = [
    {
        path: '',
        component: _listings_page__WEBPACK_IMPORTED_MODULE_6__["ListingsPage"]
    }
];
var ListingsPageModule = /** @class */ (function () {
    function ListingsPageModule() {
    }
    ListingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_listings_page__WEBPACK_IMPORTED_MODULE_6__["ListingsPage"]]
        })
    ], ListingsPageModule);
    return ListingsPageModule;
}());



/***/ }),

/***/ "./src/app/listings/listings.page.html":
/*!*********************************************!*\
  !*** ./src/app/listings/listings.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Your Listings\n    </ion-title>\n    <ion-button slot=\"end\" fill=\"clear\" size=\"large\" (click) = \"navToProfile()\">\n      <ion-icon name=\"contact\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button (click) = \"navToNewListing()\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n  <ion-list *ngFor=\"let listing of listings let i=index;\" (click)=\"navigateToViewDetails(i,listing);\"> \n    <ion-card text-wrap>\n      <ion-card-title>Title: {{listing.title}}</ion-card-title>\n      <ion-card-subtitle>Location: {{listing.location}}</ion-card-subtitle>\n    </ion-card>\n  </ion-list> \n</ion-content>"

/***/ }),

/***/ "./src/app/listings/listings.page.scss":
/*!*********************************************!*\
  !*** ./src/app/listings/listings.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdWN5ZmFuL0Rlc2t0b3AvYWlyYm5iL3Byb3ZpZGVyLW1vYmlsZS1hcHAvc3JjL2FwcC9saXN0aW5ncy9saXN0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0aW5ncy9saXN0aW5ncy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgd2lkdGg6IDkwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/listings/listings.page.ts":
/*!*******************************************!*\
  !*** ./src/app/listings/listings.page.ts ***!
  \*******************************************/
/*! exports provided: ListingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsPage", function() { return ListingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _models_listing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/listing */ "./src/app/models/listing.ts");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/listing.service */ "./src/app/services/listing.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");







var ListingsPage = /** @class */ (function () {
    function ListingsPage(navCtrl, listingService, userService) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.userService = userService;
        this.listing = new _models_listing__WEBPACK_IMPORTED_MODULE_3__["Listing"]();
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    }
    ListingsPage.prototype.ngOnInit = function () {
    };
    ListingsPage.prototype.ionViewDidEnter = function () {
        this.user = this.userService.getUser();
        this.listings = this.listingService.returnListings(this.user);
    };
    ListingsPage.prototype.navToNewListing = function () {
        this.navCtrl.navigateForward("new-listing");
    };
    ListingsPage.prototype.navToProfile = function () {
        this.navCtrl.navigateForward("profile");
    };
    ListingsPage.prototype.navigateToViewDetails = function (index, listing) {
        this.listingService.setListing(listing);
        this.navCtrl.navigateForward("listing-details");
    };
    ListingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.page.html */ "./src/app/listings/listings.page.html"),
            styles: [__webpack_require__(/*! ./listings.page.scss */ "./src/app/listings/listings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_listing_service__WEBPACK_IMPORTED_MODULE_4__["ListingService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], ListingsPage);
    return ListingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=listings-listings-module.js.map