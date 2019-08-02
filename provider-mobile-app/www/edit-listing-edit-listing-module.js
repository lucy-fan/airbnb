(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-listing-edit-listing-module"],{

/***/ "./src/app/edit-listing/edit-listing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-listing/edit-listing.module.ts ***!
  \*****************************************************/
/*! exports provided: EditListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListingPageModule", function() { return EditListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_listing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-listing.page */ "./src/app/edit-listing/edit-listing.page.ts");







var routes = [
    {
        path: '',
        component: _edit_listing_page__WEBPACK_IMPORTED_MODULE_6__["EditListingPage"]
    }
];
var EditListingPageModule = /** @class */ (function () {
    function EditListingPageModule() {
    }
    EditListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_listing_page__WEBPACK_IMPORTED_MODULE_6__["EditListingPage"]]
        })
    ], EditListingPageModule);
    return EditListingPageModule;
}());



/***/ }),

/***/ "./src/app/edit-listing/edit-listing.page.html":
/*!*****************************************************!*\
  !*** ./src/app/edit-listing/edit-listing.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Edit Listing</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <ion-grid>\n          <ion-row justify-content-center align-items-center>\n            <ion-card>\n\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"title\" value={{title}} placeholder=\"Title\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"location\" value={{location}} placeholder=\"Location\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type=\"number\" [(ngModel)]=\"numberOfPeople\" value={{numberOfPeople}} placeholder=\"Number Of People\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type=\"number\" [(ngModel)]=\"pricePerNight\" value={{pricePerNight}} placeholder=\"Price Per Night\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-textarea rows=\"10\" type=\"text\" [(ngModel)]=\"description\" value={{description}} placeholder=\"Description\"></ion-textarea>\n      </ion-item>\n  \n    <ion-button (click) = \"editListing()\">Edit</ion-button>\n    </ion-card>\n    </ion-row>\n    </ion-grid>\n    \n  </ion-content>"

/***/ }),

/***/ "./src/app/edit-listing/edit-listing.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-listing/edit-listing.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbGlzdGluZy9lZGl0LWxpc3RpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit-listing/edit-listing.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-listing/edit-listing.page.ts ***!
  \***************************************************/
/*! exports provided: EditListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListingPage", function() { return EditListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_listing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/listing.service */ "./src/app/services/listing.service.ts");
/* harmony import */ var _models_listing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/listing */ "./src/app/models/listing.ts");





var EditListingPage = /** @class */ (function () {
    function EditListingPage(navCtrl, listingService, cdRef) {
        this.navCtrl = navCtrl;
        this.listingService = listingService;
        this.cdRef = cdRef;
        this.listing = new _models_listing__WEBPACK_IMPORTED_MODULE_4__["Listing"]();
    }
    EditListingPage.prototype.ngOnInit = function () {
        this.listing = this.listingService.getListing();
        this.title = this.listing.title;
        this.location = this.listing.location;
        this.description = this.listing.description;
        this.numberOfPeople = this.listing.numberOfPeople;
        this.pricePerNight = this.listing.pricePerNight;
        this.cdRef.detectChanges();
    };
    EditListingPage.prototype.editListing = function () {
        this.listing.title = this.title;
        this.listing.location = this.location;
        this.listing.description = this.description;
        this.listing.numberOfPeople = this.numberOfPeople;
        this.listing.pricePerNight = this.pricePerNight;
        this.listingService.updateListing(this.listing);
        this.navCtrl.navigateForward("listing-details");
    };
    EditListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-listing',
            template: __webpack_require__(/*! ./edit-listing.page.html */ "./src/app/edit-listing/edit-listing.page.html"),
            styles: [__webpack_require__(/*! ./edit-listing.page.scss */ "./src/app/edit-listing/edit-listing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _services_listing_service__WEBPACK_IMPORTED_MODULE_3__["ListingService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], EditListingPage);
    return EditListingPage;
}());



/***/ })

}]);
//# sourceMappingURL=edit-listing-edit-listing-module.js.map