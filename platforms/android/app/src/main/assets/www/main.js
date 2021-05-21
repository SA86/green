(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all/all.component.html":
/*!****************************************!*\
  !*** ./src/app/all/all.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"row header\">\n\n\n\t<div id=\"quick-filters\" class=\"col s12 m12 l6 xl6\">\n\t\t<button class=\"btn-quick-all\" mat-raised-button color=\"accent\" (click)=\"sortByAll()\">All</button>\t\t\n\t\t<!-- <button class=\"main-btn\" mat-raised-button color=\"warn\" (click)=\"sortBySale()\">Sales <span class=\"sort-count\">({{this.saleItems.length}})</span></button> -->\n\t\t<button *ngFor='let item of sortMap' mat-button (click)=\"sort(item.name)\" [ngClass]='{\"quick-sales\": item.type == \"quick-sales\", \"quick-sort\": item.type == \"quick-sort\", \"active\": item.active}'>{{item.name}} <span class=\"sort-count\">({{item.count}})</span></button>\n\t</div>\n\t\n\t<div class=\"search col s12 m12 l6 xl3\">\n\t\t<div>\n\t\t\t<mat-form-field class=\"search-form-field\">\n\t\t\t\t<!-- <mat-label>Search</mat-label> -->\n\t\t\t\t<div class=\"search-cont\">\n\t\t\t\t\t<input matInput type=\"text\" [(ngModel)]='search' (keyup)=\"doSearch($event)\">\n\t\t\t\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"search='';sortByAll()\"><mat-icon>close</mat-icon></button>\n\t\t\t\t\t<button class=\"btn-search\" mat-button (click)=\"doSearch($event)\"><mat-icon>search</mat-icon></button>\n\t\t\t\t</div>\n\t\t\t</mat-form-field>\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"col s12 m12 l6 xl3\">\n\t\t<mat-form-field id=\"select-dispensary\" appearance=\"fill\">\n\t\t\t<mat-label>Location...</mat-label>\n\t\t\t<mat-select [formControl]=\"dispensary\" multiple (selectionChange)=\"sortByDispensary($event)\">\n\t\t\t\t<mat-option *ngFor=\"let dispensary of dispensaryList\" [value]=\"dispensary.value\">{{dispensary.name}}</mat-option>\n\t\t\t</mat-select>\n\t\t</mat-form-field>\n\n\t</div>\n\n\n\n</header>\n\n<section class=\"row\">\n\t<!-- <div class=\"col s1 m1 l1 xl1\">\n\t\t<mat-chip-list>\n\t\t\t<div *ngFor='let item of sortMap'>\n\t\t\t\t<mat-chip [selectable]=\"selectable\" [removable]=\"removable\" *ngIf='item.active == true'>{{item.name}}\n\t\t\t\t\t<mat-icon matChipRemove (click)=\"removeSortChip(item.name)\">cancel</mat-icon>\n\t\t\t\t</mat-chip>\n\t\t\t</div>\n\t\t</mat-chip-list>\n\t</div> -->\n\t<div class=\"col s12 m12 lm12 xl12\">\n\t\t<mat-paginator *ngIf='!loading' [length]=\"productCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = handlePage($event)\"> </mat-paginator>\n\t</div>\n</section>\n\n<section class=\"row\">\n\t<div id=\"loading\" *ngIf='loading'><h1>Loading...</h1></div>\n\t<div class=\"mat-card col s12 m6 l4 xl3\" *ngFor=\"let product of products\">\n\n\t\t<div class=\"product\" [style.background-image]=\"'url('+product.Image+')'\">\n\t\t\t<h1 *ngIf='product.apiRoot != \"kaleafa\"' class=\"product-name\">{{ product.Name }}</h1>\n\t\t\t<h1 *ngIf='product.apiRoot == \"kaleafa\"' class=\"product-name\">{{ product.Name }} <span class=\"product-type\" > - {{ product.type }}/{{ product.brand }} </span> </h1>\n\t\t\t\n\t\t\t<div class=\"col s6 m6 l6\">\n\t\t\t\t<h6>{{ product.DispensaryID | dispensary }}</h6>\n\n\t\t\t\t<!-- no sale -->\n\t\t\t\t<h2 *ngIf=\"product.recSpecialPrices[0] == null\"><strong>${{ product.Prices[0] }}</strong></h2>\n\t\t\t\t<h3 class=\"sale-price\" *ngIf=\"product.recSpecialPrices.length >= 1\"><strong>Sale:</strong> ${{ product.recSpecialPrices[0] }}</h3>\n\t\t\t\t<h4 class=\"percentoff\" *ngIf=\"product.recSpecialPrices.length >= 1\"><span>Save:</span> {{ product.discount }}</h4>\n\t\t\t\t<!-- sale -->\n\t\t\t\t<h4 class=\"regular-price\" *ngIf=\"product.recSpecialPrices[0] != null\">Was: ${{ product.Prices[0] }}</h4>\n\n\t\t\t\t<div class=\"power\">\n\t\t\t\t\t<h5 *ngIf=\"product.THCContent?.value\">THC: <strong>{{ product.THCContent.value }}{{ product.THCContent.unit | unit }}</strong></h5>\n\t\t\t\t\t<h5 *ngIf=\"product.CBDContent?.value\">CBD: <strong>{{ product.CBDContent.value }}{{ product.CBDContent.unit | unit }}</strong></h5>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"cart-quantity\" *ngIf=\"product.maxCartQuantity\"><strong>{{ product.maxCartQuantity }}</strong> available</h5>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"details-column col s6 m6 l6\"></div> -->\n\n\n\t\t</div>\n\t</div>\n</section>\n\n<mat-paginator *ngIf='!loading' [length]=\"productCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = handlePage($event)\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/all/all.component.scss":
/*!****************************************!*\
  !*** ./src/app/all/all.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product {\n  height: 130px;\n  padding: 1rem;\n  background: #fff;\n  border-radius: 8px;\n  overflow: hidden;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: right bottom; }\n  .product .product-type {\n    font-size: 0.75rem;\n    font-weight: normal; }\n  .mat-card {\n  padding: 1rem !important;\n  background: #e3e3e3; }\n  .sale-price {\n  color: #d00ea0; }\n  .sale-price strong {\n    font-size: 1rem;\n    font-weight: normal;\n    color: #222; }\n  .regular-price {\n  color: #777;\n  text-decoration: line-through;\n  font-size: 0.76rem; }\n  .power h5 {\n  display: inline; }\n  .percentoff {\n  color: #a42873;\n  font-weight: normal;\n  font-size: 0.76rem; }\n  .percentoff span {\n    color: #222; }\n  .search-cont {\n  display: flex; }\n  @media screen and (min-width: 576px) {\n    .search-cont input {\n      width: 125px; } }\n  @media screen and (min-width: 768px) {\n    .search-cont input {\n      width: 350px; } }\n  .details-column {\n  overflow: hidden;\n  text-align: right; }\n  .btn-search {\n  position: relative;\n  z-index: 2; }\n  #select-dispensary {\n  width: 300px;\n  padding-top: 8px; }\n  header {\n  color: #fff !important;\n  background-color: #814ae3;\n  margin-bottom: 0 !important; }\n  header .search {\n    display: flex; }\n  header #quick-filters {\n    padding-top: 5px !important; }\n  header #quick-filters button {\n      border: 1px solid #0000002b;\n      margin: 0 2px 2px 0;\n      padding: 0 4px !important;\n      background-color: #6f3fc6 !important; }\n  header #quick-filters button.active {\n        background-color: #277703 !important; }\n  header #quick-filters .btn-quick-all {\n      background-color: #ffd740 !important;\n      border: none; }\n  header #quick-filters .btn-quick-all {\n      border: none; }\n  header #quick-filters .sort-count {\n      font-size: 0.65rem;\n      color: #e19696; }\n  header #quick-filters .quick-sales {\n      background-color: #9b15418f !important;\n      border: 1px solid #9b15418f; }\n  img {\n  height: 150px; }\n  mat-card {\n  height: 250px;\n  background: #e3e3e3; }\n  mat-card-content {\n  margin: 1rem;\n  background: #fff;\n  border-radius: 8px; }\n  h1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0.25rem; }\n  h1 {\n  font-size: 1rem;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 0 1px;\n  background-color: #fff; }\n  h4 {\n  font-weight: normal; }\n  h5 {\n  font-weight: normal; }\n  h6 {\n  font-weight: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhZmFyaS9TQS9XV1cvZ3JlZW4vc3JjL2FwcC9hbGwvYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLGlDQUFpQyxFQUFBO0VBUmxDO0lBVUUsa0JBQWlCO0lBQ2pCLG1CQUFrQixFQUFBO0VBSXBCO0VBQ0Msd0JBQXdCO0VBQ3hCLG1CQUFtQixFQUFBO0VBR3BCO0VBQ0MsY0FBYyxFQUFBO0VBRGY7SUFJRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFdBQVcsRUFBQTtFQUliO0VBQ0MsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTtFQUduQjtFQUNDLGVBQWUsRUFBQTtFQUdoQjtFQUNDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7RUFIbkI7SUFNRSxXQUFXLEVBQUE7RUFPYjtFQUNDLGFBQWEsRUFBQTtFQUNiO0lBRkQ7TUFJRyxZQUFXLEVBQUEsRUFDWDtFQUVGO0lBUEQ7TUFTRyxZQUFXLEVBQUEsRUFDWDtFQUlIO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0VBR2xCO0VBQ0Msa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtFQUdYO0VBQ0MsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0VBR2pCO0VBQ0Msc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwyQkFBMEIsRUFBQTtFQUgzQjtJQUtFLGFBQVksRUFBQTtFQUxkO0lBUUUsMkJBQTJCLEVBQUE7RUFSN0I7TUFVRywyQkFBMEI7TUFDMUIsbUJBQWtCO01BQ2xCLHlCQUF3QjtNQUN4QixvQ0FBb0MsRUFBQTtFQWJ2QztRQWVJLG9DQUFvQyxFQUFBO0VBZnhDO01BbUJHLG9DQUFtQztNQUNuQyxZQUFXLEVBQUE7RUFwQmQ7TUF1QkcsWUFBVyxFQUFBO0VBdkJkO01BMEJHLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7RUEzQmpCO01BaUNHLHNDQUFzQztNQUN0QywyQkFBMEIsRUFBQTtFQUk3QjtFQUNDLGFBQWEsRUFBQTtFQUdkO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQixFQUFBO0VBR3BCO0VBQ0MsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUduQjs7Ozs7O0VBTUMsZUFBZSxFQUFBO0VBR2hCO0VBQ0MsZUFBZTtFQUNmLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGNBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUd2QjtFQUNDLG1CQUFtQixFQUFBO0VBR3BCO0VBQ0MsbUJBQW1CLEVBQUE7RUFHcEI7RUFDQyxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FsbC9hbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdCB7XG5cdGhlaWdodDogMTMwcHg7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YmFja2dyb3VuZC1zaXplOiA1MCU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcblx0LnByb2R1Y3QtdHlwZSB7XG5cdFx0Zm9udC1zaXplOjAuNzVyZW07XG5cdFx0Zm9udC13ZWlnaHQ6bm9ybWFsO1xuXHR9XG59XG5cbi5tYXQtY2FyZCB7XG5cdHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcblx0YmFja2dyb3VuZDogI2UzZTNlMztcbn1cblxuLnNhbGUtcHJpY2Uge1xuXHRjb2xvcjogI2QwMGVhMDtcblxuXHRzdHJvbmcge1xuXHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdGNvbG9yOiAjMjIyO1xuXHR9XG59XG5cbi5yZWd1bGFyLXByaWNlIHtcblx0Y29sb3I6ICM3Nzc7XG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuXHRmb250LXNpemU6IDAuNzZyZW07XG59XG5cbi5wb3dlciBoNSB7XG5cdGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnBlcmNlbnRvZmYge1xuXHRjb2xvcjogI2E0Mjg3Mztcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0Zm9udC1zaXplOiAwLjc2cmVtO1xuXG5cdHNwYW4ge1xuXHRcdGNvbG9yOiAjMjIyO1xuXHR9XG59XG5cbi5zZWFyY2gtZm9ybS1maWVsZCB7XG59XG5cbi5zZWFyY2gtY29udCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG5cdFx0aW5wdXQge1xuXHRcdFx0d2lkdGg6MTI1cHg7XG5cdFx0fVxuXHR9XG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0aW5wdXQge1xuXHRcdFx0d2lkdGg6MzUwcHg7XG5cdFx0fVxuXHR9XG59XG5cbi5kZXRhaWxzLWNvbHVtbiB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnRuLXNlYXJjaCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMjtcbn1cblxuI3NlbGVjdC1kaXNwZW5zYXJ5IHtcblx0d2lkdGg6IDMwMHB4O1xuXHRwYWRkaW5nLXRvcDogOHB4O1xufVxuXG5oZWFkZXIge1xuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODE0YWUzO1xuXHRtYXJnaW4tYm90dG9tOjAgIWltcG9ydGFudDtcblx0LnNlYXJjaCB7XG5cdFx0ZGlzcGxheTpmbGV4O1xuXHR9XG5cdCNxdWljay1maWx0ZXJzIHtcblx0XHRwYWRkaW5nLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG5cdFx0YnV0dG9uIHtcblx0XHRcdGJvcmRlcjoxcHggc29saWQgIzAwMDAwMDJiO1xuXHRcdFx0bWFyZ2luOjAgMnB4IDJweCAwO1xuXHRcdFx0cGFkZGluZzowIDRweCAhaW1wb3J0YW50O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzZmM2ZjNiAhaW1wb3J0YW50O1xuXHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjc3NzAzICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5idG4tcXVpY2stYWxsIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6I2ZmZDc0MCAhaW1wb3J0YW50O1xuXHRcdFx0Ym9yZGVyOm5vbmU7XG5cdFx0fVxuXHRcdC5idG4tcXVpY2stYWxsIHtcblx0XHRcdGJvcmRlcjpub25lO1xuXHRcdH1cblx0XHQuc29ydC1jb3VudCB7XG5cdFx0XHRmb250LXNpemU6IDAuNjVyZW07XG5cdFx0XHRjb2xvcjogI2UxOTY5NjtcdFx0XHRcblx0XHR9XG5cdFx0LnF1aWNrLXF1ZXJ5IHtcblx0XHRcdFxuXHRcdH1cblx0XHQucXVpY2stc2FsZXMge1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzliMTU0MThmICFpbXBvcnRhbnQ7XG5cdFx0XHRib3JkZXI6MXB4IHNvbGlkICM5YjE1NDE4Zjtcblx0XHR9XG5cdH1cbn1cbmltZyB7XG5cdGhlaWdodDogMTUwcHg7XG59XG5cbm1hdC1jYXJkIHtcblx0aGVpZ2h0OiAyNTBweDtcblx0YmFja2dyb3VuZDogI2UzZTNlMztcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG5cdG1hcmdpbjogMXJlbTtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuXHRtYXJnaW46IDAuMjVyZW07XG59XG5cbmgxIHtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHR3aWR0aDogbWF4LWNvbnRlbnQ7XG5cdHBhZGRpbmc6MCAxcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmg0IHtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDUge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5oNiB7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59Il19 */"

/***/ }),

/***/ "./src/app/all/all.component.ts":
/*!**************************************!*\
  !*** ./src/app/all/all.component.ts ***!
  \**************************************/
/*! exports provided: AllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponent", function() { return AllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _providers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers.service */ "./src/app/providers.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var AllComponent = /** @class */ (function () {
    function AllComponent(httpClient, providersService) {
        this.httpClient = httpClient;
        this.providersService = providersService;
        this.dispensary = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.formSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.search = '';
        this.pageSize = 125;
        this.pageSizeOptions = [5, 10, 25, 100, 125, 200, 500, 1000];
        this.currentPage = 0;
        this.loading = true;
        this.quickSorts = ['Purple', 'PHK', 'GDP', 'GMO', 'Bio Diesel', 'Blue', 'Cheese', 'Cherry', 'Cookies', 'Cooks', 'Dawg', 'Diesel', 'Grape', 'Kush', 'Rosin', 'Strawberry'];
        this.sortMap = [];
        this.removable = true;
        this.dispensaryList = [
            { 'name': 'Cannabis Nation-Beaverton', 'value': 'acMFAfbvyQ9CKsrNy' },
            { 'name': 'Nectar-Aloha', 'value': 'YbTHoLFPigH4scErj' },
            { 'name': 'Nectar-Beaverton-Allen', 'value': 'CAcMm4qtR9t29dzg6' },
            { 'name': 'Nectar-Beaverton-Hall', 'value': 'cynASLBsrjDueyH3A' },
            { 'name': 'Nectar-Regatta', 'value': '5f6bdb8157c27500f22d66ea' },
            { 'name': 'Kaleafa-Beaverton', 'value': 'KaleafaBeaverton' },
            { 'name': 'Broadway-Beaverton', 'value': '605b64fa3da35500d1dd9d05' },
            { 'name': 'Electric Lettuce-Beaverton', 'value': '5e7b8808bf130d00a8f6bd30' },
            { 'name': 'Growing Releaf-Beaverton', 'value': 115818 },
            { 'name': 'Green Planet-Beaverton', 'value': 107819 },
            { 'name': 'Stone Age-Beaverton', 'value': 123946 },
            { 'name': 'Oregon Bud Comp-Beaverton', 'value': 'OregonBudBeaverton' },
            { 'name': 'LaMota-Beaverton', 'value': 'oJN2QYZJHAxvBDWrL' },
            { 'name': 'Electric Lettuce-CedarHills', 'value': '5e7b8dfe49f75e00bbdb7b9e' },
            { 'name': 'Green Mart-CedarHills', 'value': 143818 },
            { 'name': 'Western Oregon-CedarHills', 'value': 301745 },
            { 'name': 'Kaleafa-Hillsboro', 'value': 'KaleafaHillsboro' },
            { 'name': 'Mr NiceGuy-Hillsboro', 'value': '6YskMw5YxzjN3AP3g' },
            { 'name': 'Speedy Janes-Hillsboro', 'value': 300136 },
            { 'name': 'The Vth-Hillsboro', 'value': 'HXg4iybZrq6wRbZMb' },
            { 'name': 'Western Oregon-Hillsboro', 'value': 319881 },
            { 'name': 'CDC-Metzger', 'value': 'CDCMetzger' },
            { 'name': 'Lemonnade-Metzger', 'value': 130410 },
            { 'name': 'Local Leaf-Metzger', 'value': 144011 },
            { 'name': 'Cola Cove-Tigard', 'value': '5e7b9f3bdbf9cc0b3d2e3ff2' },
            { 'name': 'Chalice-Tigard', 'value': 'ChaliceTigard' },
            { 'name': 'Electric Lettuce-Tigard', 'value': '5f19ecdfa7db3b01086e24fa' },
            { 'name': 'Kaleafa-Tigard', 'value': 'kaleafaTigard' },
            { 'name': 'Nectar-Barbur', 'value': '4oiKwdDJgmPecXMek' },
            { 'name': 'Green Planet-KingCity', 'value': 196138 },
            { 'name': 'Green Goddess-SW.PDX', 'value': 85676 },
            { 'name': 'Parlour-E.Beaverton', 'value': 'AYYz8RrZ62Zqme9fv' },
            { 'name': 'Natural Remedies-Barbur', 'value': 'zBKaBM3hTpspDwMED' },
            { 'name': 'Brothers-Oswego', 'value': 328152 },
        ];
    }
    AllComponent.prototype.ngOnInit = function () {
        this.getConcentrates();
    };
    AllComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    // pagination event change
    AllComponent.prototype.handlePage = function (e) {
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        var end = (this.currentPage + 1) * this.pageSize;
        var start = this.currentPage * this.pageSize;
        var part = this.originalProducts.slice(start, end);
        this.products = part;
        this.productCount = this.products.length;
    };
    // search by query
    AllComponent.prototype.doSearch = function (e) {
        if (e.keyCode === 13) {
            var query_1 = this.search.toLowerCase();
            var searched = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"])(this.originalProducts, function (o) {
                var name = o.Name.toLowerCase();
                if (name.includes(query_1)) {
                    return o;
                }
            });
            this.products = searched;
            this.productCount = this.products.length;
        }
    };
    AllComponent.prototype.gatherQuickSorts = function () {
        var _this = this;
        this.sortMap = this.quickSorts.map(function (item) {
            var searched = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"])(_this.originalProducts, function (o) {
                var name = o.Name.toLowerCase();
                if (name.includes(item.toLowerCase())) {
                    return o;
                }
            });
            return { 'name': item, 'count': searched.length, 'items': searched, 'type': 'quick-sort', 'active': false };
        });
        this.sortSales();
        this.sortMap.push({
            'name': 'Sales',
            'count': this.saleItems.length,
            'items': this.saleItems,
            'type': 'quick-sales',
            'active': false
        });
        this.sortMap.splice(0, 0, this.sortMap.splice(this.sortMap.length - 1, 1)[0]); // move sales to start of array
        console.log('h88 this.sortMap', this.sortMap);
    };
    //sort by dispensary
    AllComponent.prototype.sortByDispensary = function (o) {
        var dispensary;
        if (o.value.length === 1) { // one selection
            dispensary = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"])(this.originalProducts, ['DispensaryID', o.value[0]]);
            this.products = dispensary;
        }
        else if (o.value.length === 0) { // no selection, show all
            this.products = this.originalProducts;
        }
        else { // multi select
            dispensary = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"])(this.originalProducts, function (e) {
                for (var i = 0; i < o.value.length; i++) {
                    if (e.DispensaryID === o.value[i]) {
                        return o;
                    }
                }
            });
            this.products = dispensary;
            this.productCount = this.products.length;
        }
    };
    // filter sales
    AllComponent.prototype.sortSales = function () {
        var filteredForSale = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"])(this.originalProducts, function (o) {
            if (o.recSpecialPrices.length > 0 && o.recSpecialPrices[0] < o.Prices[0]) {
                var diff = o.Prices[0] - o.recSpecialPrices[0];
                var off = diff / o.Prices[0];
                o.discount = off.toFixed(2);
                o.discount = o.discount * 100;
                o.discount = "$" + diff.toFixed(2) + " (" + o.discount.toFixed() + "%)";
                return o;
            }
        });
        var sortedBySale = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"])(filteredForSale, ['recSpecialPrices[0]']);
        this.saleItems = sortedBySale;
        return sortedBySale;
    };
    // show all
    AllComponent.prototype.sortByAll = function () {
        this.quickFilterActive(null);
        this.products = this.productsChunks[0];
        this.productCount = this.products.length;
    };
    AllComponent.prototype.sort = function (name) {
        var query = name.toLowerCase();
        if (query === 'sales') {
            this.quickFilterActive(name);
            this.products = this.saleItems;
            this.productCount = this.products.length;
        }
        else {
            var item = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(this.sortMap, { 'name': name });
            this.quickFilterActive(name);
            this.products = item.items;
            this.productCount = this.products.length;
        }
    };
    // toggles active quick sort 
    AllComponent.prototype.quickFilterActive = function (name) {
        this.sortMap.map(function (e) {
            if (e.name === name) {
                e.active = !e.active;
            }
            else {
                e.active = false;
            }
            return e;
        });
    };
    AllComponent.prototype.removeSortChip = function (name) {
        this.sortMap.map(function (e) {
            if (e.name === name) {
                e.active = !e.active;
                return e;
            }
        });
    };
    AllComponent.prototype.removeUnusedProducts = function (products) {
        // let productsToRemove = ['kief', 'syringe', 'dabaratus', 'dripper', 'moonrock', 'cartridge', 'cart', 'rso', 'preroll', 'pre-roll'];
        var filteredProducts = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["filter"])(products, function (o) {
            var name = o.Name.toLowerCase();
            if (name.includes('kief') === false
                && name.includes('syringe') === false
                && name.includes('dabaratus') === false
                && name.includes('dripper') === false
                && name.includes('moonrock') === false
                && name.includes('cartridge') === false
                && name.includes('cart') === false
                && name.includes('rso') === false
                && name.includes('feco') === false
                && name.includes('drink') === false
                && name.includes('soaking salts') === false
                && name.includes('spray') === false
                && name.includes('floz') === false
                && name.includes('moon dust') === false
                && name.includes('tincture') === false
                && name.includes('no strain') === false
                && name.includes('pax') === false
                && name.includes('pre-roll') === false
                && name.includes('preroll') === false) {
                return o;
            }
        });
        return filteredProducts;
    };
    // fixAberrations(products) { // remove select items from product list
    // 	// let productsToRemove = ['kief', 'syringe', 'dabaratus', 'dripper', 'moonrock', 'cartridge', 'cart', 'rso', 'preroll', 'pre-roll'];
    // 	let fixProducts = filter(products, (o) => {
    // 		let name = o.Name.toLowerCase();
    // 		console.log('h88 o', o);
    // 
    // 	});
    // 	return filteredProducts
    // }
    AllComponent.prototype.getConcentrates = function () {
        var _this = this;
        this.providersService.getRequest().subscribe(function (data) {
            var sortedByPrice = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["sortBy"])(data, ['Prices[0]']);
            _this.products = _this.removeUnusedProducts(sortedByPrice);
            // this.products = this.fixAberrations(this.products);
            _this.originalProducts = _this.products;
            _this.productCount = _this.products.length;
            _this.productsChunks = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["chunk"])(_this.products, _this.pageSize);
            _this.products = _this.productsChunks[0];
            _this.loading = false;
            console.log('h88 prod', _this.products);
            _this.gatherQuickSorts();
        });
    };
    AllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all',
            template: __webpack_require__(/*! ./all.component.html */ "./src/app/all/all.component.html"),
            styles: [__webpack_require__(/*! ./all.component.scss */ "./src/app/all/all.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _providers_service__WEBPACK_IMPORTED_MODULE_3__["ProvidersService"]])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-all></app-all>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'green';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _all_all_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all/all.component */ "./src/app/all/all.component.ts");
/* harmony import */ var _pipes_unit_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/unit.pipe */ "./src/app/pipes/unit.pipe.ts");
/* harmony import */ var _pipes_dispensary_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/dispensary.pipe */ "./src/app/pipes/dispensary.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _all_all_component__WEBPACK_IMPORTED_MODULE_8__["AllComponent"],
                _pipes_unit_pipe__WEBPACK_IMPORTED_MODULE_9__["UnitPipe"],
                _pipes_dispensary_pipe__WEBPACK_IMPORTED_MODULE_10__["DispensaryPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");


// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { CdkStepperModule } from '@angular/cdk/stepper';
// import { CdkTableModule } from '@angular/cdk/table';
// import { CdkTreeModule } from '@angular/cdk/tree';


































// import { OverlayModule } from '@angular/cdk/overlay';
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                // A11yModule,
                // ClipboardModule,
                // CdkStepperModule,
                // CdkTableModule,
                // CdkTreeModule,
                // DragDropModule,
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/pipes/dispensary.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/dispensary.pipe.ts ***!
  \******************************************/
/*! exports provided: DispensaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispensaryPipe", function() { return DispensaryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DispensaryPipe = /** @class */ (function () {
    function DispensaryPipe() {
    }
    DispensaryPipe.prototype.transform = function (value, args) {
        switch (value) {
            case 'acMFAfbvyQ9CKsrNy':
                return 'Cannabis Nation - Beaverton';
                break;
            case 'YbTHoLFPigH4scErj':
                return 'Nectar - Aloha';
                break;
            case '5f6bdb8157c27500f22d66ea':
                return 'Nectar - Regatta';
                break;
            case 'CAcMm4qtR9t29dzg6':
                return 'Nectar - Beaverton-Allen';
                break;
            case 'cynASLBsrjDueyH3A':
                return 'Nectar - Beaverton-Hall';
                break;
            case '4oiKwdDJgmPecXMek':
                return 'Nectar - Barbur';
                break;
            case 'KaleafaBeaverton':
                return 'Kaleafa-Beaverton';
                break;
            case 'KaleafaHillsboro':
                return 'Kaleafa-Hillsboro';
                break;
            case 'kaleafaTigard':
                return 'Kaleafa-Tigard';
                break;
            case '605b64fa3da35500d1dd9d05':
                return 'Broadway-Beaverton';
                break;
            case '5e7b8dfe49f75e00bbdb7b9e':
                return 'Electric Lettuce - CedarHills';
                break;
            case '5f19ecdfa7db3b01086e24fa':
                return 'Electric Lettuce - Tigard';
                break;
            case '5e7b8808bf130d00a8f6bd30':
                return 'Electric Lettuce - Beaverton';
                break;
            case 'oJN2QYZJHAxvBDWrL':
                return 'La Mota - Beaverton';
                break;
            case 'OregonBudBeaverton':
                return 'Oregon Bud - Beaverton';
                break;
            case 123946:
                return 'Stone Age - Beaverton';
                break;
            case 'CDCMetzger':
                return 'CDC - Metzger';
                break;
            case 130410:
                return 'Lemonnade - Metzger';
                break;
            case 144011:
                return 'Local Leaf - Metzger';
                break;
            case '5e7b9f3bdbf9cc0b3d2e3ff2':
                return 'Cola Cova - Tigard';
                break;
            case 'ChaliceTigard':
                return 'Chalice - Tigard';
                break;
            case 'HXg4iybZrq6wRbZMb':
                return 'The Vth - Hillsboro';
                break;
            case 85676:
                return 'Green Goddess Remedies - SW.Portland';
                break;
            case 'AYYz8RrZ62Zqme9fv':
                return 'Parlour - E.Beaverton';
                break;
            case 'zBKaBM3hTpspDwMED':
                return 'Natural Remedies - Barbur';
                break;
            case 328152:
                return 'Brothers - Oswego';
                break;
            case 300136:
                return 'Speedy Janes - Hillsboro';
                break;
            case 143818:
                return 'Green Mart - Cedar Mills';
                break;
            case 301745:
                return 'Western Oregon - Cedar Mills';
                break;
            case 115818:
                return 'Growing Releaf - Beaverton';
                break;
            case 107819:
                return 'Green Planet - Beaverton';
                break;
            case 196138:
                return 'Green Planet - King City';
                break;
            case 319881:
                return 'Western Oregon - Hillsboro';
                break;
            case '6YskMw5YxzjN3AP3g':
                return 'Mr NiceGuy - Hillsboro';
                break;
            default:
                return '';
                break;
        }
    };
    DispensaryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dispensary'
        })
    ], DispensaryPipe);
    return DispensaryPipe;
}());



/***/ }),

/***/ "./src/app/pipes/unit.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/unit.pipe.ts ***!
  \************************************/
/*! exports provided: UnitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitPipe", function() { return UnitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnitPipe = /** @class */ (function () {
    function UnitPipe() {
    }
    UnitPipe.prototype.transform = function (value, args) {
        switch (value) {
            case 'PERCENTAGE':
                return '%';
                break;
            case 'percent':
                return '%';
                break;
            case 'MILLIGRAMS':
                return 'mg';
                break;
            case 'mg':
                return 'mg';
                break;
            default:
                console.log('h88 value pipe', value);
                return '';
                break;
        }
    };
    UnitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'unit'
        })
    ], UnitPipe);
    return UnitPipe;
}());



/***/ }),

/***/ "./src/app/providers.service.ts":
/*!**************************************!*\
  !*** ./src/app/providers.service.ts ***!
  \**************************************/
/*! exports provided: ProvidersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersService", function() { return ProvidersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProvidersService = /** @class */ (function () {
    function ProvidersService(httpClient) {
        this.httpClient = httpClient;
    }
    ProvidersService.prototype.getRequest = function () {
        return this.httpClient.get('http://api.endo86.com:8051/green');
    };
    ProvidersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProvidersService);
    return ProvidersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/safari/SA/WWW/green/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map