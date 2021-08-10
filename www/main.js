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

module.exports = "<header class=\"row header\">\n\t<!-- <h1 class=\"title\">Green Eighty Six</h1> -->\n\t<div class='row quicks'>\n\t\t<button mat-raised-button (click)='menuQuickFiltersView = !menuQuickFiltersView' [ngClass]='{\"active\": menuQuickFiltersView}'><span class=\"material-icons\">filter_list</span>Quick Filters</button>\n\t\t<button mat-raised-button (click)='menuSearchView = !menuSearchView' [ngClass]='{\"active\": menuSearchView}'><span class=\"material-icons\">search</span> Search</button>\n\t\t<button mat-raised-button (click)='menuLocationView = !menuLocationView' [ngClass]='{\"active\": menuLocationView}'><span class=\"material-icons\">location_on</span>Locations</button>\n\t\t<button mat-raised-button (click)='menuPricingView = !menuPricingView' [ngClass]='{\"active\": menuPricingView}'><span class=\"material-icons\">attach_money</span>Prices</button>\n\t\t<button mat-raised-button (click)='menuDistanceView = !menuDistanceView' [ngClass]='{\"active\": menuDistanceView}'><span class=\"material-icons\">my_location</span>Distance</button>\n\t\t<button mat-raised-button (click)='menuAboutView = !menuAboutView' [ngClass]='{\"active\": menuAboutView}'><span class=\"material-icons\">help_outline</span>About</button>\n\t</div>\n\t\n\t<div id=\"quick-filters\" class='row' *ngIf=\"menuQuickFiltersView\">\n\t\t\t<mat-divider ></mat-divider>\n\t\t\t<p>Filter products by strain names and type. More indept querying capable under search.</p>\n\t\t\t\n\t\t\t\n\t\t\t<div style=\"display:flex;\">\n\t\t\t\t<button class=\"btn-quick-all\" mat-raised-button color=\"accent\" (click)=\"sortByAll()\">Show All <span class=\"sort-count\">({{originalProducts.length}})</span></button>\t\n\t\t\t\t<button mat-button class=\"quick-sales\" mat-raised-button (click)=\"sort('Sales', '')\" >Sales <span class=\"sort-count\">({{saleItems.length}})</span></button>\n\t\t\t\t<div style=\"display:flex;\">\n\t\t\t\t\t<span>Sort by price</span>\n\t\t\t\t\t<button mat-raised-button (click)='sortPrice(\"high\")' color=\"accent\" >High</button>\t\n\t\t\t\t\t<button mat-raised-button (click)='sortPrice(\"low\")' color=\"accent\" >Low</button>\t\n\t\t\t\t</div>\t\t\t \n\t\t\t</div>\t\t\t \n\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t<div class=\"filter-row\">\n\t\t\t\t<h2>Strain names</h2>\n\t\t\t\t<button *ngFor='let item of sortStrainMap' mat-button (click)=\"quickSort(item.name, 'strain')\" class=\"quick-strain-sort\" [ngClass]='{\"active\": item.active}'>{{item.name}} <span class=\"sort-count\">({{item.count}})</span></button>\n\t\t\t</div>\n\t\t\t\n\t\t\t<mat-divider  ></mat-divider>\n\t\t\t\n\t\t\t<div class=\"filter-row\">\n\t\t\t\t<h2>Types</h2>\n\t\t\t\t<button *ngFor='let item of sortTypeMap' mat-button (click)=\"quickSort(item.name, 'type')\" class=\"quick-type-sort\" [ngClass]='{\"active\": item.active}'>{{item.name}} <span class=\"sort-count\">({{item.count}})</span></button>\n\t\t\t</div>\n\t\t\t\n\t</div>\n\t\n\t<div id=\"search\" class='row' *ngIf=\"menuSearchView\">\n\t\t\t<mat-form-field class=\"search-form-field\">\n\t\t\t\t<div class=\"search-cont\">\n\t\t\t\t\t<input matInput type=\"text\" [(ngModel)]='productFilters.query' (keyup)=\"doSearch($event)\" placeholder=\"Enter keyword...\">\n\t\t\t\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"productFilters.query='';sortByAll()\"><mat-icon>close</mat-icon></button>\n\t\t\t\t\t<!-- <button class=\"btn-search\" mat-button (click)=\"doSearch($event)\"><mat-icon>search</mat-icon></button> -->\n\t\t\t\t</div>\n\t\t\t</mat-form-field>\n\t</div>\n\t\n\t<div id=\"location\" class='row' *ngIf=\"menuLocationView\">\n\t\t<mat-form-field id=\"select-dispensary\" appearance=\"fill\">\n\t\t\t<mat-label>Location...</mat-label>\n\t\t\t<mat-select [formControl]=\"dispensary\" multiple (selectionChange)=\"sortByDispensary($event)\">\n\t\t\t\t<mat-option *ngFor=\"let dispensary of dispensaryList\" [value]=\"dispensary.value\">{{dispensary.name}}</mat-option>\n\t\t\t</mat-select>\n\t\t</mat-form-field>\t\t\n\t</div>\n\t\n\t<div id=\"pricing\" class='row col s12 m6 l4 xl4' *ngIf=\"menuPricingView\">\n\t\t<div class=\"slider-cont\">\n\t\t\t<ngx-slider [(value)]=\"minValue\" [(highValue)]=\"maxValue\" [options]=\"soptions\" (valueChange)=\"sortByCostLow($event)\" (highValueChange)=\"sortByCostHigh($event)\" (userChangeEnd)=\"processSorting('pricerange')\"></ngx-slider>\t\t\n\t\t</div>\n\t</div>\n\t\n\t<div id=\"sort\" class='row col s12' *ngIf=\"menuAboutView\" style=\"font-size:1rem;\">\n\t\t\t<p>Are you frustrated with tedious process involved with finding the right cannabis product. Going to countless dispensaries to find a particular product is a waste of time and money. With GreenEndo you can search for cannabis concentrate products in Oregon and lower Washington. Currently displaying <strong>{{ this.originalProducts.length }}</strong> products from <strong>{{ this.dispensaryList.length}} dispensary.</strong></p>\n\t\t\t<p> </p>\n\n\t</div>\n\t\n\t<div id=\"distance\" class='row col s12' *ngIf=\"menuDistanceView\">\n\t\t<mat-form-field class=\"search-form-field\">\n\t\t\t<input matInput type=\"number\" [(ngModel)]='postal' (keyup)=\"doZipSearch($event)\" placeholder=\"Enter Zip Code\">\n\t\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"postal='';sortByAll()\"><mat-icon>close</mat-icon></button>\n\t\t</mat-form-field>\t\n\t\t<div>\n\t\t\t<p>Enter zip code then choose the distance in which to include in your search.</p>\t\n\t\t\t<mat-radio-group [(ngModel)]=\"productFilters.range\" (change)=\"getGeo()\">\n\t\t\t\t<mat-radio-button value=\"1\">1 mi</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"5\" checked=\"true\">5 mi</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"10\">10 mi</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"15\">15 mi</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"20\">20 mi</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"25\">25 mi</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"30\">30 mi</mat-radio-button>\n\t\t\t</mat-radio-group>\n\t\t</div>\n\t\t<div style=\"flex-basis:100%\">Products from these dispensaries are being show in the results. Change the distance radius to effect.</div>\n\t\t<div style=\"display:flex;flex-wrap:wrap;font-size:0.75rem;color:#adaece;\" *ngIf=\"productFilters.distance.length > 0\">\n\t\t\t<div *ngFor=\"let dispensary of productFilters.distance\">\n\t\t\t\t{{dispensary.name}},&nbsp;&nbsp;\n\t\t\t</div>\n\t\t\t<span>( {{this.productFilters.distance.length }})</span>\n\t\t</div>\t\t\n\t</div>\n</header>\n\n<section id=\"utility-bar\" class=\"row col s12\">\n\t\t<!-- CHIPS -->\n\t<div id=\"chips\" class=\"col s12\">\n\t\t<mat-chip-list>\n\t\t\t<div>\n\t\t\t\t<mat-chip *ngIf=\"productFilters.query\" [selectable]=\"selectable\" [removable]=\"removable\">{{productFilters.query}}\n\t\t\t\t\t<mat-icon matChipRemove (click)=\"removeSortChip('query')\">cancel</mat-icon>\n\t\t\t\t</mat-chip>\n\t\t\t\t<mat-chip  [selectable]=\"selectable\" [removable]=\"removable\">${{productFilters.pricerange[0]}}-{{productFilters.pricerange[1]}}\n\t\t\t\t\t<mat-icon matChipRemove (click)=\"removeSortChip('pricerange')\" *ngIf=\"productFilters.pricerange[0] != 1 || productFilters.pricerange[1] != 120\">cancel</mat-icon>\n\t\t\t\t</mat-chip>\n\t\t\t\t<mat-chip *ngIf=\"!productFilters.locations.length > 0\" [selectable]=\"selectable\" [removable]=\"removable\">{{productFilters.range}} mile radius\n\t\t\t\t\t<mat-icon matChipRemove (click)=\"removeSortChip('distance')\">cancel</mat-icon>\n\t\t\t\t</mat-chip>\n\t\t\t\t<mat-chip *ngIf=\"productFilters.locations.length > 0\"  [selectable]=\"selectable\" [removable]=\"removable\">Location Filters\n\t\t\t\t\t<mat-icon matChipRemove (click)=\"removeSortChip('locations')\">cancel</mat-icon>\n\t\t\t\t</mat-chip>\n\t\t\t</div>\n\t\t</mat-chip-list>\t\n\t</div>\n\t<!-- PAGINATION\t\t -->\n\t<div class=\"col s12\">\n\t\t<mat-paginator *ngIf='!loading' [length]=\"productCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = handlePage($event)\"> </mat-paginator>\n\t</div> \n</section>\n\n<section class=\"row\">\n\t<div id=\"loading\" *ngIf='loading'><h1>Loading...</h1></div>\n\t<div class=\"mat-card col s12 m6 l4 xl3\" *ngFor=\"let product of products\">\n\n\t\t<div class=\"product\" [style.background-image]=\"'url('+product.Image+')'\">\n\t\t\t<h1 class=\"product-name\">{{ product.Name }}</h1>\n\t\t\t<h4 *ngIf='product.apiRoot != \"kaleafa\"' class=\"product-type\">{{ product.brandName }}</h4>\n\t\t\t<h4 *ngIf='product.apiRoot == \"kaleafa\"'class=\"product-type\">{{ product.brandName }} / {{ product.type }} </h4>\n\t\t\t\n\t\t\t<div class=\"col s6 m6 l6\">\n\t\t\t\t<h6>{{ product.DispensaryID | dispensary }}</h6>\n\n\t\t\t\t<!-- no sale -->\n\t\t\t\t<h2 *ngIf=\"product.recSpecialPrices[0] == null\"><strong>${{ product.Prices[0] }}</strong></h2>\n\t\t\t\t<h3 class=\"sale-price\" *ngIf=\"product.recSpecialPrices.length >= 1\"><strong>Sale:</strong> ${{ product.recSpecialPrices[0] }}</h3>\n\t\t\t\t<h4 class=\"percentoff\" *ngIf=\"product.recSpecialPrices.length >= 1\"><span>Save:</span> {{ product.discount }}</h4>\n\t\t\t\t<!-- sale -->\n\t\t\t\t<h4 class=\"regular-price\" *ngIf=\"product.recSpecialPrices[0] != null\">Was: ${{ product.Prices[0] }}</h4>\n\n\t\t\t\t<div class=\"power\">\n\t\t\t\t\t<h5 *ngIf=\"product.THCContent?.value\">THC: <strong>{{ product.THCContent.value }}{{ product.THCContent.unit | unit }}</strong></h5>\n\t\t\t\t\t<h5 *ngIf=\"product.CBDContent?.value\">CBD: <strong>{{ product.CBDContent.value }}{{ product.CBDContent.unit | unit }}</strong></h5>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"cart-quantity\" *ngIf=\"product.maxCartQuantity\"><strong>{{ product.maxCartQuantity }}</strong> available</h5>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"details-column col s6 m6 l6\"></div> -->\n\n\n\t\t</div>\n\t</div>\n</section>\n\n<mat-paginator *ngIf='!loading' [length]=\"productCount\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"pageEvent = handlePage($event)\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/all/all.component.scss":
/*!****************************************!*\
  !*** ./src/app/all/all.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-bottom: 0 !important; }\n\n.product {\n  height: 130px;\n  padding: 1rem;\n  background: #fff;\n  border-radius: 8px;\n  overflow: hidden;\n  background-size: 50%;\n  background-repeat: no-repeat;\n  background-position: right bottom; }\n\n.product .product-type {\n    font-size: 0.75rem;\n    font-weight: normal; }\n\n.mat-card {\n  padding: 1rem !important;\n  background: #e3e3e3; }\n\n.sale-price {\n  color: #d00ea0; }\n\n.sale-price strong {\n    font-size: 1rem;\n    font-weight: normal;\n    color: #222; }\n\n.regular-price {\n  color: #777;\n  text-decoration: line-through;\n  font-size: 0.76rem; }\n\n.power h5 {\n  display: inline; }\n\n.percentoff {\n  color: #a42873;\n  font-weight: normal;\n  font-size: 0.76rem; }\n\n.percentoff span {\n    color: #222; }\n\n.search-cont {\n  display: flex; }\n\n@media screen and (min-width: 576px) {\n    .search-cont input {\n      width: 125px; } }\n\n@media screen and (min-width: 768px) {\n    .search-cont input {\n      width: 350px; } }\n\n.details-column {\n  overflow: hidden;\n  text-align: right; }\n\n.btn-search {\n  position: relative;\n  z-index: 2; }\n\n#select-dispensary {\n  width: 300px;\n  padding-top: 8px; }\n\nheader {\n  color: #fff !important;\n  background-color: #4a3f5e;\n  margin-bottom: 0 !important; }\n\nheader .search {\n    display: flex; }\n\nheader .quicks {\n    padding: 12px; }\n\nheader .quicks .material-icons {\n      position: relative;\n      top: -1px;\n      left: -6px;\n      font-size: 1rem;\n      color: #242424; }\n\nheader .quicks button {\n      border: 1px solid #000;\n      color: #242424;\n      margin-right: 12px; }\n\nheader .quicks button.active {\n        background-color: #375df2 !important;\n        border: 1px solid #1400ff;\n        color: #fff; }\n\nheader .quicks button.active .material-icons {\n          color: #fff; }\n\nheader #quick-filters {\n    padding: 0 12px 12px 12px;\n    font-size: 0.75rem;\n    margin: 0 !important; }\n\nheader #quick-filters .filter-row h2 {\n      font-size: 0.85rem; }\n\nheader #quick-filters button {\n      border: 1px solid #0000002b;\n      margin: 0 2px 2px 0;\n      padding: 0 4px !important;\n      background-color: #6f3fc6 !important; }\n\nheader #quick-filters button.active {\n        background-color: #277703 !important; }\n\nheader #quick-filters .btn-quick-all {\n      background-color: #ffd740 !important;\n      border: none; }\n\nheader #quick-filters .btn-quick-all {\n      border: none; }\n\nheader #quick-filters .sort-count {\n      font-size: 0.65rem;\n      color: #e19696; }\n\nheader #quick-filters .quick-sales {\n      background-color: #9b15418f !important;\n      border: 1px solid #9b15418f; }\n\nheader #quick-filters mat-divider {\n      margin: 6px 0; }\n\nheader #sort {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0 12px 12px 12px !important;\n    font-size: 0.75rem;\n    margin: 0 !important; }\n\nheader #sort button {\n      border: 1px solid #000;\n      margin-right: 12px; }\n\nheader #sort button.active {\n        background-color: #375df2 !important;\n        border: 1px solid #1400ff;\n        color: #fff; }\n\nheader #sort .sort-count {\n      font-size: 0.65rem;\n      color: #000; }\n\nheader #search {\n    padding: 0 12px 12px 12px !important; }\n\nheader #search .mat-form-field-appearance-legacy .mat-form-field-label {\n      top: 2em;\n      left: 0.6em; }\n\nheader #search .mat-form-field-infix {\n      width: 270px; }\n\nheader #search .search-cont input {\n      border: 1px solid black;\n      border-radius: 6px;\n      padding: 12px;\n      background-color: #151515; }\n\nheader #pricing .slider-cont {\n    padding: 18px; }\n\nheader #pricing .slider-cont .ngx-slider .ngx-slider-bubble {\n      color: #fff !important; }\n\nheader #location {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0 12px 12px 12px !important; }\n\nheader #location .mat-form-field-wrapper {\n      border: 1px solid #000;\n      border-radius: 6px; }\n\nheader #location .mat-select-value-text {\n      color: #fff; }\n\nheader #distance {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0 12px 12px 12px !important; }\n\nheader #distance .mat-form-field-appearance-legacy .mat-form-field-label {\n      top: 2em;\n      left: 0.6em; }\n\nheader #distance input {\n      width: 125px;\n      color: #fff;\n      border: 1px solid black;\n      border-radius: 6px;\n      padding: 12px;\n      background-color: #151515; }\n\nheader #distance .mat-radio-button {\n      padding-right: 16px; }\n\n#utility-bar {\n  display: flex;\n  flex-wrap: wrap; }\n\n#utility-bar #chips {\n    padding: 12px !important; }\n\nimg {\n  height: 150px; }\n\nmat-card {\n  height: 250px;\n  background: #e3e3e3; }\n\nmat-card-content {\n  margin: 1rem;\n  background: #fff;\n  border-radius: 8px; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0.25rem; }\n\nh1 {\n  font-size: 1rem;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  padding: 0 1px;\n  background-color: #fff; }\n\nh4 {\n  font-weight: normal; }\n\nh5 {\n  font-weight: normal; }\n\nh6 {\n  font-weight: normal;\n  color: #2e62a6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhZmFyaS9TQS9XV1cvZ3JlZW4vc3JjL2FwcC9hbGwvYWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMkJBQTBCLEVBQUE7O0FBRTNCO0VBQ0MsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLGlDQUFpQyxFQUFBOztBQVJsQztJQVVFLGtCQUFpQjtJQUNqQixtQkFBa0IsRUFBQTs7QUFJcEI7RUFDQyx3QkFBd0I7RUFDeEIsbUJBQW1CLEVBQUE7O0FBR3BCO0VBQ0MsY0FBYyxFQUFBOztBQURmO0lBSUUsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXLEVBQUE7O0FBSWI7RUFDQyxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUhuQjtJQU1FLFdBQVcsRUFBQTs7QUFPYjtFQUNDLGFBQWEsRUFBQTs7QUFDYjtJQUZEO01BSUcsWUFBVyxFQUFBLEVBQ1g7O0FBRUY7SUFQRDtNQVNHLFlBQVcsRUFBQSxFQUNYOztBQUlIO0VBQ0MsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1g7RUFDQyxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7O0FBR2pCO0VBQ0Msc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QiwyQkFBMEIsRUFBQTs7QUFIM0I7SUFLRSxhQUFZLEVBQUE7O0FBTGQ7SUFRRSxhQUFZLEVBQUE7O0FBUmQ7TUFVRyxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFVBQVU7TUFDVixlQUFjO01BQ2QsY0FBYyxFQUFBOztBQWRqQjtNQWlCRyxzQkFBc0I7TUFDdEIsY0FBYztNQUNkLGtCQUFpQixFQUFBOztBQW5CcEI7UUFxQkksb0NBQW9DO1FBQ3BDLHlCQUF5QjtRQUN6QixXQUFXLEVBQUE7O0FBdkJmO1VBeUJLLFdBQVcsRUFBQTs7QUF6QmhCO0lBZ0NFLHlCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsb0JBQW1CLEVBQUE7O0FBbENyQjtNQXFDSSxrQkFBaUIsRUFBQTs7QUFyQ3JCO01BeUNHLDJCQUEwQjtNQUMxQixtQkFBa0I7TUFDbEIseUJBQXdCO01BQ3hCLG9DQUFvQyxFQUFBOztBQTVDdkM7UUE4Q0ksb0NBQW9DLEVBQUE7O0FBOUN4QztNQWtERyxvQ0FBbUM7TUFDbkMsWUFBVyxFQUFBOztBQW5EZDtNQXNERyxZQUFXLEVBQUE7O0FBdERkO01BeURHLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7O0FBMURqQjtNQTZERyxzQ0FBc0M7TUFDdEMsMkJBQTBCLEVBQUE7O0FBOUQ3QjtNQWlFRyxhQUFZLEVBQUE7O0FBakVmO0lBcUVFLGFBQVk7SUFDWixlQUFjO0lBQ2Qsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixvQkFBb0IsRUFBQTs7QUF6RXRCO01BMkVHLHNCQUFzQjtNQUN0QixrQkFBaUIsRUFBQTs7QUE1RXBCO1FBOEVJLG9DQUFvQztRQUNwQyx5QkFBeUI7UUFDekIsV0FBVyxFQUFBOztBQWhGZjtNQW9GRyxrQkFBa0I7TUFDbEIsV0FBVyxFQUFBOztBQXJGZDtJQXlGRSxvQ0FBb0MsRUFBQTs7QUF6RnRDO01BMkZHLFFBQVE7TUFDUixXQUFXLEVBQUE7O0FBNUZkO01BK0ZHLFlBQVksRUFBQTs7QUEvRmY7TUFtR0ksdUJBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixhQUFZO01BQ1oseUJBQXlCLEVBQUE7O0FBdEc3QjtJQWlIRyxhQUFZLEVBQUE7O0FBakhmO01BOEdLLHNCQUFxQixFQUFBOztBQTlHMUI7SUFxSEUsYUFBWTtJQUNaLGVBQWM7SUFDZCxvQ0FBb0MsRUFBQTs7QUF2SHRDO01BeUhHLHNCQUFzQjtNQUN0QixrQkFBa0IsRUFBQTs7QUExSHJCO01BNkhHLFdBQVUsRUFBQTs7QUE3SGI7SUFrSUUsYUFBWTtJQUNaLGVBQWM7SUFDZCxvQ0FBb0MsRUFBQTs7QUFwSXRDO01Bc0lHLFFBQVE7TUFDUixXQUFXLEVBQUE7O0FBdklkO01BMElHLFlBQVc7TUFDWCxXQUFVO01BQ1YsdUJBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixhQUFZO01BQ1oseUJBQXlCLEVBQUE7O0FBL0k1QjtNQWtKRyxtQkFBbUIsRUFBQTs7QUFJdEI7RUFDQyxhQUFZO0VBQ1osZUFBYyxFQUFBOztBQUZmO0lBSUUsd0JBQXVCLEVBQUE7O0FBR3pCO0VBQ0MsYUFBYSxFQUFBOztBQUdkO0VBQ0MsYUFBYTtFQUNiLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR25COzs7Ozs7RUFNQyxlQUFlLEVBQUE7O0FBR2hCO0VBQ0MsZUFBZTtFQUNmLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLGNBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHdkI7RUFDQyxtQkFBbUIsRUFBQTs7QUFHcEI7RUFDQyxtQkFBbUIsRUFBQTs7QUFHcEI7RUFDQyxtQkFBbUI7RUFDbkIsY0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWxsL2FsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cgIHtcblx0bWFyZ2luLWJvdHRvbTowICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdCB7XG5cdGhlaWdodDogMTMwcHg7XG5cdHBhZGRpbmc6IDFyZW07XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YmFja2dyb3VuZC1zaXplOiA1MCU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcblx0LnByb2R1Y3QtdHlwZSB7XG5cdFx0Zm9udC1zaXplOjAuNzVyZW07XG5cdFx0Zm9udC13ZWlnaHQ6bm9ybWFsO1xuXHR9XG59XG5cbi5tYXQtY2FyZCB7XG5cdHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcblx0YmFja2dyb3VuZDogI2UzZTNlMztcbn1cblxuLnNhbGUtcHJpY2Uge1xuXHRjb2xvcjogI2QwMGVhMDtcblxuXHRzdHJvbmcge1xuXHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdGNvbG9yOiAjMjIyO1xuXHR9XG59XG5cbi5yZWd1bGFyLXByaWNlIHtcblx0Y29sb3I6ICM3Nzc7XG5cdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuXHRmb250LXNpemU6IDAuNzZyZW07XG59XG5cbi5wb3dlciBoNSB7XG5cdGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnBlcmNlbnRvZmYge1xuXHRjb2xvcjogI2E0Mjg3Mztcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0Zm9udC1zaXplOiAwLjc2cmVtO1xuXG5cdHNwYW4ge1xuXHRcdGNvbG9yOiAjMjIyO1xuXHR9XG59XG5cbi5zZWFyY2gtZm9ybS1maWVsZCB7XG59XG5cbi5zZWFyY2gtY29udCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG5cdFx0aW5wdXQge1xuXHRcdFx0d2lkdGg6MTI1cHg7XG5cdFx0fVxuXHR9XG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0aW5wdXQge1xuXHRcdFx0d2lkdGg6MzUwcHg7XG5cdFx0fVxuXHR9XG59XG5cbi5kZXRhaWxzLWNvbHVtbiB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnRuLXNlYXJjaCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMjtcbn1cblxuI3NlbGVjdC1kaXNwZW5zYXJ5IHtcblx0d2lkdGg6IDMwMHB4O1xuXHRwYWRkaW5nLXRvcDogOHB4O1xufVxuXG5oZWFkZXIge1xuXHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGEzZjVlO1xuXHRtYXJnaW4tYm90dG9tOjAgIWltcG9ydGFudDtcblx0LnNlYXJjaCB7XG5cdFx0ZGlzcGxheTpmbGV4O1xuXHR9XG5cdC5xdWlja3Mge1xuXHRcdHBhZGRpbmc6MTJweDtcblx0XHQubWF0ZXJpYWwtaWNvbnMge1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0dG9wOiAtMXB4O1xuXHRcdFx0bGVmdDogLTZweDtcdFx0XHRcblx0XHRcdGZvbnQtc2l6ZToxcmVtO1xuXHRcdFx0Y29sb3I6ICMyNDI0MjQ7XG5cdFx0fVxuXHRcdGJ1dHRvbiB7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuXHRcdFx0Y29sb3I6ICMyNDI0MjQ7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6MTJweDtcblx0XHRcdCYuYWN0aXZlIHtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzM3NWRmMiAhaW1wb3J0YW50O1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjMTQwMGZmO1xuXHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0Lm1hdGVyaWFsLWljb25zIHsgXG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdCNxdWljay1maWx0ZXJzIHtcblx0XHRwYWRkaW5nOjAgMTJweCAxMnB4IDEycHg7XG5cdFx0Zm9udC1zaXplOiAwLjc1cmVtO1xuXHRcdG1hcmdpbjowICFpbXBvcnRhbnQ7XG5cdFx0LmZpbHRlci1yb3cge1xuXHRcdFx0aDIge1xuXHRcdFx0XHRmb250LXNpemU6MC44NXJlbTtcblx0XHRcdH1cblx0XHR9XG5cdFx0YnV0dG9uIHtcblx0XHRcdGJvcmRlcjoxcHggc29saWQgIzAwMDAwMDJiO1xuXHRcdFx0bWFyZ2luOjAgMnB4IDJweCAwO1xuXHRcdFx0cGFkZGluZzowIDRweCAhaW1wb3J0YW50O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzZmM2ZjNiAhaW1wb3J0YW50O1xuXHRcdFx0Ji5hY3RpdmUge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjc3NzAzICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5idG4tcXVpY2stYWxsIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6I2ZmZDc0MCAhaW1wb3J0YW50O1xuXHRcdFx0Ym9yZGVyOm5vbmU7XG5cdFx0fVxuXHRcdC5idG4tcXVpY2stYWxsIHtcblx0XHRcdGJvcmRlcjpub25lO1xuXHRcdH1cblx0XHQuc29ydC1jb3VudCB7XG5cdFx0XHRmb250LXNpemU6IDAuNjVyZW07XG5cdFx0XHRjb2xvcjogI2UxOTY5NjtcdFx0XHRcblx0XHR9XG5cdFx0LnF1aWNrLXNhbGVzIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM5YjE1NDE4ZiAhaW1wb3J0YW50O1xuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCAjOWIxNTQxOGY7XG5cdFx0fVxuXHRcdG1hdC1kaXZpZGVyIHtcblx0XHRcdG1hcmdpbjo2cHggMDtcblx0XHR9XG5cdH1cblx0I3NvcnQge1xuXHRcdGRpc3BsYXk6ZmxleDtcblx0XHRmbGV4LXdyYXA6d3JhcDtcblx0XHRwYWRkaW5nOiAwIDEycHggMTJweCAxMnB4ICFpbXBvcnRhbnQ7XG5cdFx0Zm9udC1zaXplOiAwLjc1cmVtO1xuXHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXHRcdGJ1dHRvbiB7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuXHRcdFx0bWFyZ2luLXJpZ2h0OjEycHg7XG5cdFx0XHQmLmFjdGl2ZSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzNzVkZjIgIWltcG9ydGFudDtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIzE0MDBmZjtcblx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHR9XG5cdFx0fVx0XG5cdFx0LnNvcnQtY291bnQge1xuXHRcdFx0Zm9udC1zaXplOiAwLjY1cmVtO1xuXHRcdFx0Y29sb3I6ICMwMDA7XHRcdFx0XG5cdFx0fVx0XHRcdFxuXHR9XG5cdCNzZWFyY2gge1xuXHRcdHBhZGRpbmc6IDAgMTJweCAxMnB4IDEycHggIWltcG9ydGFudDtcblx0XHQubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcblx0XHRcdHRvcDogMmVtO1xuXHRcdFx0bGVmdDogMC42ZW07XG5cdFx0fVxuXHRcdC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG5cdFx0XHR3aWR0aDogMjcwcHg7XG5cdFx0fVxuXHRcdC5zZWFyY2gtY29udCB7XG5cdFx0XHRpbnB1dCB7XG5cdFx0XHRcdGJvcmRlcjoxcHggc29saWQgYmxhY2s7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRcdFx0cGFkZGluZzoxMnB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHQjcHJpY2luZyB7XG5cdFx0LnNsaWRlci1jb250IHtcblx0XHRcdC5uZ3gtc2xpZGVyIHtcblx0XHRcdFx0Lm5neC1zbGlkZXItYnViYmxlIHtcblx0XHRcdFx0XHRjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHBhZGRpbmc6MThweDtcblx0XHR9XG5cdH1cblx0I2xvY2F0aW9uIHtcblx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0ZmxleC13cmFwOndyYXA7XG5cdFx0cGFkZGluZzogMCAxMnB4IDEycHggMTJweCAhaW1wb3J0YW50O1xuXHRcdC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0fVxuXHRcdC5tYXQtc2VsZWN0LXZhbHVlLXRleHQge1xuXHRcdFx0Y29sb3I6I2ZmZjtcblx0XHQgfVxuXHR9XG5cdFxuXHQjZGlzdGFuY2Uge1xuXHRcdGRpc3BsYXk6ZmxleDtcblx0XHRmbGV4LXdyYXA6d3JhcDtcblx0XHRwYWRkaW5nOiAwIDEycHggMTJweCAxMnB4ICFpbXBvcnRhbnQ7XG5cdFx0Lm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG5cdFx0XHR0b3A6IDJlbTtcblx0XHRcdGxlZnQ6IDAuNmVtO1xuXHRcdH1cdFx0XG5cdFx0aW5wdXQge1xuXHRcdFx0d2lkdGg6MTI1cHg7XG5cdFx0XHRjb2xvcjojZmZmO1xuXHRcdFx0Ym9yZGVyOjFweCBzb2xpZCBibGFjaztcblx0XHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRcdHBhZGRpbmc6MTJweDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XG5cdFx0fVx0XG5cdFx0Lm1hdC1yYWRpby1idXR0b257XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXHRcdH1cdFxuXHR9XG59XG4jdXRpbGl0eS1iYXIge1xuXHRkaXNwbGF5OmZsZXg7XG5cdGZsZXgtd3JhcDp3cmFwO1xuXHQjY2hpcHMge1xuXHRcdHBhZGRpbmc6MTJweCAhaW1wb3J0YW50O1xuXHR9XG59XG5pbWcge1xuXHRoZWlnaHQ6IDE1MHB4O1xufVxuXG5tYXQtY2FyZCB7XG5cdGhlaWdodDogMjUwcHg7XG5cdGJhY2tncm91bmQ6ICNlM2UzZTM7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQge1xuXHRtYXJnaW46IDFyZW07XG5cdGJhY2tncm91bmQ6ICNmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcblx0bWFyZ2luOiAwLjI1cmVtO1xufVxuXG5oMSB7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0d2lkdGg6IG1heC1jb250ZW50O1xuXHRwYWRkaW5nOjAgMXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5oNCB7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmg1IHtcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaDYge1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRjb2xvcjojMmU2MmE2O1xufSJdfQ== */"

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
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "./node_modules/@angular-slider/ngx-slider/fesm5/angular-slider-ngx-slider.js");
/* harmony import */ var _postal_codes_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postal-codes.json */ "./src/app/all/postal-codes.json");
var _postal_codes_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./postal-codes.json */ "./src/app/all/postal-codes.json", 1);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);






// import * as PostalCodeData from "./postal-codes.json";


var AllComponent = /** @class */ (function () {
    function AllComponent(httpClient, providersService) {
        this.httpClient = httpClient;
        this.providersService = providersService;
        this.dispensary = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.formSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.search = '';
        this.postal = 97006;
        this.pageSize = 125;
        this.pageSizeOptions = [5, 10, 25, 100, 125, 200, 500, 1000];
        this.currentPage = 0;
        this.productBank = [];
        this.loading = true;
        // menu display
        this.menuQuickFiltersView = false;
        this.menuSearchView = false;
        this.menuLocationView = false;
        this.menuPricingView = false;
        this.menuAboutView = false;
        this.menuDistanceView = false;
        this.distanceDispensaryResults = [];
        this.quickStrainSorts = ['Bio Diesel', 'Blue', 'Cheese', 'Cherry', 'Cookies', 'Cooks', 'Dawg', 'Diesel', 'GDP', 'Grape', 'GMO', 'GSC', 'Kush', 'MAC', 'Orange', 'Pineapple', 'PHK', 'Purple', 'Strawberry', 'Zkittles'];
        this.quickTypesSorts = ['Badder', 'Crumble', 'Diamonds', 'Live Resin', 'Rosin', 'RSO', 'Sauce', 'Shatter', 'Sugar'];
        this.sortStrainMap = []; // strain quick sorts
        this.sortTypeMap = []; // type quick sorts
        this.removable = true;
        this.minValue = 1;
        this.maxValue = 120;
        this.soptions = {
            floor: 0,
            ceil: 120,
            translate: function (value, label) {
                switch (label) {
                    case _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_5__["LabelType"].Low:
                        return "<b>Min:</b> $" + value;
                    case _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_5__["LabelType"].High:
                        return "<b>Max:</b> $" + value;
                    default:
                        return "$" + value;
                }
            }
        };
        this.productFilters = {
            'quick': {
                'strain': [],
                'types': [],
            },
            // 
            'query': '',
            // locations, pricerange, distance
            'locations': [],
            // quick, query, pricerange
            'pricerange': [1, 120],
            // quick, locations, distance
            'cost': ['sales', 'low/high'],
            // locations, pricesrange, distance
            'distance': [],
            'range': 5
            // pricesrange
        };
        // dispensaryList: DispensaryList[] = DispensaryListData;
        this.dispensaryList = [
            { 'name': 'Cannabis Nation-Beaverton', 'value': 'acMFAfbvyQ9CKsrNy', 'postal': 97006, 'geo': [45.5203821, -122.8431368], 'url': 'dat' },
            { 'name': 'Nectar-Aloha', 'value': 'YbTHoLFPigH4scErj', 'postal': 97006, 'geo': [45.4966407, -122.8912542], 'url': 'dat' },
            { 'name': 'Nectar-Beaverton-Allen', 'value': 'CAcMm4qtR9t29dzg6', 'postal': 97005, 'geo': [45.4766619, -122.8250877], 'url': 'dat' },
            { 'name': 'Nectar-Beaverton-Hall', 'value': 'cynASLBsrjDueyH3A', 'postal': 97008, 'geo': [45.457036, -122.7856972], 'url': 'dat' },
            { 'name': 'Nectar-Regatta', 'value': '5f6bdb8157c27500f22d66ea', 'postal': 97006, 'geo': [45.5160132, -122.8435447], 'url': 'dat' },
            { 'name': 'Kaleafa-Beaverton', 'value': 'KaleafaBeaverton', 'postal': 97005, 'geo': [45.4862895, -122.7912229], 'url': 'dat' },
            { 'name': 'Broadway-Beaverton', 'value': '605b64fa3da35500d1dd9d05', 'postal': 97005, 'geo': [45.4862065, -122.7813575], 'url': 'dat' },
            { 'name': 'Electric Lettuce-Beaverton', 'value': '5e7b8808bf130d00a8f6bd30', 'postal': 97008, 'geo': [45.4695997, -122.7862657], 'url': 'dat' },
            { 'name': 'Growing Releaf-Beaverton', 'value': 115818, 'postal': 97005, 'geo': [45.4899831, -122.7907909], 'url': 'dat' },
            { 'name': 'Green Planet-Beaverton', 'value': 107819, 'postal': 97005, 'geo': [45.4928959, -122.7829708], 'url': 'dat' },
            { 'name': 'Stone Age-Beaverton', 'value': 123946, 'postal': 97225, 'geo': [45.498724, -122.767445], 'url': 'dat' },
            { 'name': 'Oregon Bud Comp-Beaverton', 'value': 'OregonBudBeaverton', 'postal': 97005, 'geo': [45.496279, -122.8103849], 'url': 'dat' },
            { 'name': 'LaMota-Beaverton', 'value': 'oJN2QYZJHAxvBDWrL', 'postal': 97003, 'geo': [45.4930636, -122.855204], 'url': 'dat' },
            { 'name': 'Electric Lettuce-CedarHills', 'value': '5e7b8dfe49f75e00bbdb7b9e', 'postal': 97225, 'geo': [45.5093087, -122.7853587], 'url': 'dat' },
            { 'name': 'Green Mart-CedarHills', 'value': 143818, 'postal': 97005, 'geo': [45.5027025, -122.8104366], 'url': 'dat' },
            { 'name': 'Western Oregon-CedarHills', 'value': 301745, 'postal': 97229, 'geo': [45.4798169, -122.8497282], 'url': 'dat' },
            { 'name': 'Kaleafa-Hillsboro', 'value': 'KaleafaHillsboro', 'postal': 97123, 'geo': [45.5178175, -122.9963372], 'url': 'dat' },
            { 'name': 'Mr NiceGuy-Hillsboro', 'value': '6YskMw5YxzjN3AP3g', 'postal': 97113, 'geo': [45.5203924, -123.0348346], 'url': 'https://www.mrniceguyretail.com/mr-nice-guy-cornelius' },
            { 'name': 'Speedy Janes-Hillsboro', 'value': 300136, 'postal': 97123, 'geo': [45.514556, -122.9983446], 'url': 'http://www.speedyjanes.com/' },
            { 'name': 'The Vth-Hillsboro', 'value': 'HXg4iybZrq6wRbZMb', 'postal': 97123, 'geo': [45.5201985, -123.0053237], 'url': 'https://thevth.com/' },
            { 'name': 'Western Oregon-Hillsboro', 'value': 319881, 'postal': 97123, 'geo': [45.5261959, -123.0056568], 'url': 'http://westernoregondispensary.com/' },
            { 'name': 'CDC-Metzger', 'value': 'CDCMetzger', 'postal': 97223, 'geo': [45.4476039, -122.7679728], 'url': 'http://cdcpdx.com/' },
            { 'name': 'Lemonnade-Metzger', 'value': 130410, 'postal': 97219, 'geo': [45.4435975, -122.7452872], 'url': 'https://magic-castle-cannabis-store.business.site/' },
            { 'name': 'Local Leaf-Metzger', 'value': 144011, 'postal': 97223, 'geo': [45.4650255, -122.7570999], 'url': 'http://www.localleaf420.com/#!contact_us/c1z0x' },
            { 'name': 'Cola Cove-Tigard', 'value': '5e7b9f3bdbf9cc0b3d2e3ff2', 'postal': 97223, 'geo': [45.4221154, -122.7869961], 'url': 'https://dutchie.com/store/cola-cove/menu' },
            { 'name': 'Chalice-Tigard', 'value': 'ChaliceTigard', 'postal': 97224, 'geo': [45.3989266, -122.8014775], 'url': 'https://www.chalicefarms.com/locations/tigard-cannabis-dispensary' },
            { 'name': 'Electric Lettuce-Tigard', 'value': '5f19ecdfa7db3b01086e24fa', 'postal': 97223, 'geo': [45.4380797, -122.7564607], 'url': 'https://electriclettuce.com/location/tigard-dispensary?utm_source=google&utm_medium=local&utm_campaign=website_button' },
            { 'name': 'Kaleafa-Tigard', 'value': 'kaleafaTigard', 'postal': 97223, 'geo': [45.4404432, -122.7514242], 'url': 'http://kaleafa.com/' },
            { 'name': 'Nectar-Barbur', 'value': '4oiKwdDJgmPecXMek', 'postal': 97216, 'geo': [45.4462891, -122.7334938], 'url': 'https://nectar.store/barbur/' },
            { 'name': 'Green Planet-KingCity', 'value': 196138, 'postal': 97224, 'geo': [45.4085658, -122.7974766], 'url': 'https://www.thegreenplanet.net/' },
            { 'name': 'Green Goddess Remedies', 'value': 85676, 'postal': 97215, 'geo': [45.4549689, -122.7353912], 'url': 'https://greengoddesspdx.com/' },
            { 'name': 'Parlour-Beaverton', 'value': 'AYYz8RrZ62Zqme9fv', 'postal': 97225, 'geo': [45.4927978, -122.8394032], 'url': 'http://www.parlourcannabis.com/' },
            { 'name': 'Natural Remedies-Barbur', 'value': 'zBKaBM3hTpspDwMED', 'postal': 97219, 'geo': [45.4615768, -122.7055526], 'url': 'https://naturalremediespdx.com/' },
            { 'name': 'Brothers-Oswego', 'value': 328152, 'postal': 97202, 'geo': [45.5048869, -122.6283683], 'url': 'https://brothers-cannabis.com/' },
        ];
        this.postalCodes = _postal_codes_json__WEBPACK_IMPORTED_MODULE_6__;
        // this.dispensaryListData = DispensaryListData;
    }
    AllComponent.prototype.ngOnInit = function () {
        this.getConcentrates();
    };
    AllComponent.prototype.processSorting = function (type) {
        switch (type) {
            case 'quick':
                this.filterProducts(type);
                break;
            case 'query':
                this.filterProducts(type);
                break;
            case 'locations':
                this.filterProducts(type);
                break;
            case 'pricerange':
                this.filterProducts(type);
                break;
            case 'distance':
                this.dispensary.setValue(''); // clear location select
                this.productFilters.locations = []; // clear locations
                this.filterProducts(type);
                break;
            default:
                break;
        }
    };
    AllComponent.prototype.filterProducts = function (type) {
        var _this = this;
        var filtered = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["filter"])(this.originalProducts, function (product) {
            var inDispensary = _this.productFilters.locations.indexOf(product.DispensaryID);
            var inRange = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["find"])(_this.productFilters.distance, { 'value': product.DispensaryID });
            var name = product.Name.toLowerCase();
            if ((product.Prices[0] >= _this.productFilters.pricerange[0] && product.Prices[0] <= _this.productFilters.pricerange[1]) // 0-120
                &&
                    (inDispensary > -1 || _this.productFilters.locations.length === 0) // products is in our location array
                &&
                    (inRange || _this.productFilters.distance.length === 0 || type === 'locations') // distance // bypass on locations
                &&
                    (name.includes(_this.productFilters.query)) // QUERY search				
            ) {
                return product;
            }
        });
        this.products = filtered;
        this.paginateItems();
    };
    AllComponent.prototype.removeSortChip = function (type) {
        if (type === 'query') {
            this.productFilters.query = '';
            this.processSorting('query');
        }
        if (type === 'distance') {
            this.productFilters.range = 30;
            this.getGeo();
        }
        if (type === 'locations') {
            this.productFilters.locations = [];
            this.dispensary.setValue('');
            this.processSorting('locations');
        }
        if (type === 'pricerange') {
            this.productFilters.pricerange[0] = 1;
            this.productFilters.pricerange[1] = 120;
            this.processSorting('pricerange');
        }
    };
    AllComponent.prototype.quickSort = function (name, selected) {
        this.productFilters.query = name.toLowerCase();
        this.processSorting('query');
    };
    //sort by dispensary
    AllComponent.prototype.sortByDispensary = function (o) {
        this.productFilters.locations = o.value;
        this.processSorting('locations');
    };
    AllComponent.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    // pagination event change
    AllComponent.prototype.handlePage = function (e) {
        //& TOTO need to get products rather than originalproducts
        this.currentPage = e.pageIndex;
        this.pageSize = e.pageSize;
        var end = (this.currentPage + 1) * this.pageSize;
        var start = this.currentPage * this.pageSize;
        var part = this.originalProducts.slice(start, end);
        this.products = part;
    };
    // search by query
    AllComponent.prototype.doSearch = function (e) {
        if (e.keyCode === 13) {
            var query = this.productFilters.query.toLowerCase();
            this.productFilters.query = query;
            this.processSorting('query');
        }
    };
    // search zip query // handle hard return
    AllComponent.prototype.doZipSearch = function (e) {
        if (e.keyCode === 13) {
            this.getGeo();
        }
    };
    // gathers dispensary in range
    AllComponent.prototype.getGeo = function () {
        var _this = this;
        var lat = this.postalCodes[this.postal].lat;
        var long = this.postalCodes[this.postal].long;
        this.productFilters.distance = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["filter"])(this.dispensaryList, (function (item) {
            var distance = _this.calculateDistance(lat, long, item.geo[0], item.geo[1]);
            if (_this.productFilters.range >= distance) {
                return item;
            }
        }));
        this.processSorting('distance');
    };
    //calculates range between host and all dispensaries
    AllComponent.prototype.calculateDistance = function (lat1, lon1, lat2, lon2) {
        var unit = '';
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "N") {
            dist = dist * 0.8684;
        }
        return dist;
    };
    AllComponent.prototype.gatherQuickSorts = function (products) {
        this.sortStrainMap = this.quickStrainSorts.map(function (item) {
            var searched = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["filter"])(products, function (o) {
                var name = o.Name.toLowerCase();
                if (name.includes(item.toLowerCase())) {
                    return o;
                }
            });
            return { 'name': item, 'count': searched.length, 'items': searched, 'type': 'quick-strain-sort', 'active': false };
        });
        this.sortTypeMap = this.quickTypesSorts.map(function (item) {
            var searched = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["filter"])(products, function (o) {
                var name = o.Name.toLowerCase();
                if (name.includes(item.toLowerCase())) {
                    return o;
                }
            });
            return { 'name': item, 'count': searched.length, 'items': searched, 'type': 'quick-type-sort', 'active': false };
        });
    };
    AllComponent.prototype.gatherSales = function (products) {
        var filteredForSale = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["filter"])(products, function (o) {
            if (o.recSpecialPrices.length > 0 && o.recSpecialPrices[0] < o.Prices[0]) {
                var diff = o.Prices[0] - o.recSpecialPrices[0];
                var off = diff / o.Prices[0];
                o.discount = off.toFixed(2);
                o.discount = o.discount * 100;
                o.discountraw = o.discount * 100;
                o.discount = "$" + diff.toFixed(2) + " (" + o.discount.toFixed() + "%)";
                return o;
            }
        });
        var sortedBySale = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["sortBy"])(filteredForSale, ['recSpecialPrices[0]']);
        this.saleItems = sortedBySale;
        this.bestSaleItems = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["orderBy"])(filteredForSale, ['discountraw'], ['desc']);
    };
    //sort by cost
    AllComponent.prototype.sortByCostLow = function (e) {
        this.productFilters.pricerange[0] = e;
    };
    //sort by cost
    AllComponent.prototype.sortByCostHigh = function (e) {
        this.productFilters.pricerange[1] = e;
    };
    // show all
    AllComponent.prototype.sortByAll = function () {
        this.products = this.originalProducts;
        this.productFilters.query = '';
        this.paginateItems();
        this.quickFilterActive(null, null);
        this.gatherQuickSorts(this.products);
    };
    // sorts by low/high price
    AllComponent.prototype.sortPrice = function (direction) {
        var sortedByPrice;
        if (direction === 'high') {
            sortedByPrice = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["orderBy"])(this.originalProducts, ['Prices[0]'], ['desc']);
        }
        else if (direction === 'low') {
            sortedByPrice = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["orderBy"])(this.originalProducts, ['Prices[0]'], ['asc']);
        }
        this.products = sortedByPrice;
        this.paginateItems();
    };
    // toggles active quick sort class
    AllComponent.prototype.quickFilterActive = function (name, type) {
        this.sortTypeMap.map(function (e) {
            if (e.name === name) {
                e.active = !e.active;
            }
            else {
                e.active = false;
            }
            return e;
        });
        this.sortStrainMap.map(function (e) {
            if (e.name === name) {
                e.active = !e.active;
            }
            else {
                e.active = false;
            }
            return e;
        });
    };
    AllComponent.prototype.removeUnusedProducts = function (products) {
        // let productsToRemove = ['kief', 'syringe', 'dabaratus', 'dripper', 'moonrock', 'cartridge', 'cart', 'rso', 'preroll', 'pre-roll'];
        var filteredProducts = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["filter"])(products, function (o) {
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
    AllComponent.prototype.getConcentrates = function () {
        var _this = this;
        this.providersService.getRequest().subscribe(function (data) {
            var sortedByPrice = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["sortBy"])(data, ['Prices[0]']); // sort by lowest price
            _this.products = _this.removeUnusedProducts(sortedByPrice); // remove items from the list
            _this.originalProducts = _this.products; // create copy of items
            _this.getGeo();
            _this.paginateItems();
            _this.loading = false;
            console.log('h88 prod', _this.products);
            _this.gatherQuickSorts(_this.originalProducts);
            _this.gatherSales(_this.originalProducts);
        });
    };
    AllComponent.prototype.paginateItems = function () {
        this.productCount = this.products.length;
        this.productsChunks = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["chunk"])(this.products, this.pageSize);
        this.products = this.productsChunks[0];
    };
    AllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all',
            template: __webpack_require__(/*! ./all.component.html */ "./src/app/all/all.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./all.component.scss */ "./src/app/all/all.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _providers_service__WEBPACK_IMPORTED_MODULE_3__["ProvidersService"]])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/all/postal-codes.json":
/*!***************************************!*\
  !*** ./src/app/all/postal-codes.json ***!
  \***************************************/
/*! exports provided: 97001, 97002, 97004, 97005, 97006, 97007, 97008, 97009, 97011, 97013, 97014, 97015, 97016, 97017, 97018, 97019, 97020, 97021, 97022, 97023, 97024, 97026, 97027, 97028, 97029, 97030, 97031, 97032, 97033, 97034, 97035, 97037, 97038, 97039, 97040, 97041, 97042, 97045, 97048, 97049, 97050, 97051, 97053, 97054, 97055, 97056, 97057, 97058, 97060, 97062, 97063, 97064, 97065, 97067, 97068, 97070, 97071, 97080, 97086, 97089, 97101, 97102, 97103, 97106, 97107, 97108, 97109, 97110, 97111, 97112, 97113, 97114, 97115, 97116, 97117, 97118, 97119, 97121, 97122, 97123, 97124, 97125, 97127, 97128, 97130, 97131, 97132, 97133, 97134, 97135, 97136, 97137, 97138, 97140, 97141, 97144, 97145, 97146, 97147, 97148, 97149, 97201, 97202, 97203, 97204, 97205, 97206, 97208, 97209, 97210, 97211, 97212, 97213, 97214, 97215, 97216, 97217, 97218, 97219, 97220, 97221, 97222, 97223, 97224, 97225, 97227, 97229, 97230, 97231, 97232, 97233, 97236, 97239, 97266, 97267, 97301, 97302, 97303, 97304, 97305, 97306, 97317, 97321, 97322, 97324, 97325, 97326, 97327, 97329, 97330, 97331, 97333, 97338, 97341, 97342, 97343, 97344, 97345, 97346, 97347, 97348, 97350, 97351, 97352, 97355, 97357, 97358, 97360, 97361, 97362, 97364, 97365, 97366, 97367, 97368, 97369, 97370, 97371, 97373, 97374, 97375, 97376, 97377, 97378, 97380, 97381, 97383, 97384, 97385, 97386, 97388, 97389, 97390, 97391, 97392, 97394, 97396, 97401, 97402, 97403, 97404, 97405, 97406, 97408, 97410, 97411, 97412, 97413, 97414, 97415, 97416, 97417, 97419, 97420, 97423, 97424, 97426, 97429, 97430, 97431, 97434, 97435, 97436, 97437, 97438, 97439, 97441, 97442, 97443, 97444, 97446, 97447, 97448, 97449, 97450, 97451, 97452, 97453, 97454, 97455, 97456, 97457, 97458, 97459, 97461, 97462, 97463, 97465, 97466, 97467, 97469, 97470, 97471, 97473, 97476, 97477, 97478, 97479, 97480, 97481, 97484, 97486, 97487, 97488, 97489, 97490, 97492, 97493, 97494, 97495, 97496, 97497, 97498, 97499, 97501, 97502, 97503, 97504, 97520, 97522, 97523, 97524, 97525, 97526, 97527, 97530, 97531, 97532, 97534, 97535, 97536, 97537, 97538, 97539, 97540, 97541, 97543, 97544, 97601, 97603, 97604, 97620, 97621, 97622, 97623, 97624, 97625, 97626, 97627, 97630, 97632, 97633, 97634, 97635, 97636, 97637, 97638, 97639, 97640, 97641, 97701, 97702, 97707, 97710, 97711, 97712, 97720, 97721, 97722, 97730, 97731, 97732, 97733, 97734, 97735, 97736, 97737, 97738, 97739, 97741, 97750, 97751, 97752, 97753, 97754, 97756, 97758, 97759, 97760, 97761, 97801, 97810, 97812, 97813, 97814, 97817, 97818, 97819, 97820, 97823, 97824, 97825, 97826, 97827, 97828, 97830, 97833, 97834, 97835, 97836, 97837, 97838, 97839, 97840, 97841, 97842, 97843, 97844, 97845, 97846, 97848, 97850, 97856, 97857, 97859, 97862, 97864, 97865, 97867, 97868, 97869, 97870, 97873, 97874, 97875, 97876, 97877, 97880, 97882, 97883, 97884, 97885, 97886, 97901, 97903, 97904, 97905, 97906, 97907, 97908, 97909, 97910, 97911, 97913, 97914, 97918, 97920, default */
/***/ (function(module) {

module.exports = {"97001":{"lat":44.990287,"long":-120.604029},"97002":{"lat":45.240483,"long":-122.793841},"97004":{"lat":45.254962,"long":-122.449377},"97005":{"lat":45.490959,"long":-122.803586},"97006":{"lat":45.517009,"long":-122.859817},"97007":{"lat":45.454271,"long":-122.879619},"97008":{"lat":45.46019,"long":-122.804198},"97009":{"lat":45.422994,"long":-122.33277},"97011":{"lat":45.387126,"long":-122.026423},"97013":{"lat":45.220824,"long":-122.66828},"97014":{"lat":45.568503,"long":-122.04471},"97015":{"lat":45.413524,"long":-122.536758},"97016":{"lat":46.060308,"long":-123.266951},"97017":{"lat":45.176519,"long":-122.38969},"97018":{"lat":45.899259,"long":-122.812218},"97019":{"lat":45.515631,"long":-122.24273},"97020":{"lat":45.222954,"long":-122.833621},"97021":{"lat":45.385919,"long":-121.142379},"97022":{"lat":45.346725,"long":-122.319961},"97023":{"lat":45.278476,"long":-122.323188},"97024":{"lat":45.546622,"long":-122.442346},"97026":{"lat":45.106152,"long":-122.959936},"97027":{"lat":45.38565,"long":-122.592827},"97028":{"lat":45.288449,"long":-121.807282},"97029":{"lat":45.287094,"long":-120.802277},"97030":{"lat":45.509203,"long":-122.433468},"97031":{"lat":45.626691,"long":-121.550386},"97032":{"lat":45.17663,"long":-122.783877},"97033":{"lat":45.280255,"long":-120.595882},"97034":{"lat":45.409354,"long":-122.683468},"97035":{"lat":45.413498,"long":-122.725171},"97037":{"lat":45.067048,"long":-121.027621},"97038":{"lat":45.095438,"long":-122.558954},"97039":{"lat":45.451556,"long":-120.664859},"97040":{"lat":45.617111,"long":-121.388115},"97041":{"lat":45.436254,"long":-121.624789},"97042":{"lat":45.207722,"long":-122.537224},"97045":{"lat":45.320277,"long":-122.536467},"97048":{"lat":46.044795,"long":-122.982023},"97049":{"lat":45.345254,"long":-121.86274},"97050":{"lat":45.67358,"long":-120.781632},"97051":{"lat":45.875701,"long":-122.949006},"97053":{"lat":45.827979,"long":-122.883286},"97054":{"lat":45.942235,"long":-122.949588},"97055":{"lat":45.388717,"long":-122.155068},"97056":{"lat":45.772037,"long":-122.96941},"97057":{"lat":45.002733,"long":-120.749973},"97058":{"lat":45.536452,"long":-121.155254},"97060":{"lat":45.531327,"long":-122.36909},"97062":{"lat":45.369302,"long":-122.762307},"97063":{"lat":45.224901,"long":-121.301127},"97064":{"lat":45.859087,"long":-123.235518},"97065":{"lat":45.607642,"long":-120.644619},"97067":{"lat":45.297725,"long":-122.058958},"97068":{"lat":45.352514,"long":-122.668534},"97070":{"lat":45.306108,"long":-122.773066},"97071":{"lat":45.134191,"long":-122.826487},"97080":{"lat":45.478314,"long":-122.390727},"97086":{"lat":45.445048,"long":-122.528173},"97089":{"lat":45.426416,"long":-122.442992},"97101":{"lat":45.090196,"long":-123.228702},"97102":{"lat":45.795655,"long":-123.95982},"97103":{"lat":46.133918,"long":-123.710609},"97106":{"lat":45.665677,"long":-123.118977},"97107":{"lat":45.552522,"long":-123.879381},"97108":{"lat":45.268884,"long":-123.708784},"97109":{"lat":45.737827,"long":-123.18121},"97110":{"lat":45.901039,"long":-123.955401},"97111":{"lat":45.284549,"long":-123.195186},"97112":{"lat":45.271232,"long":-123.868472},"97113":{"lat":45.497238,"long":-123.044336},"97114":{"lat":45.187855,"long":-123.07657},"97115":{"lat":45.275227,"long":-123.03946},"97116":{"lat":45.580822,"long":-123.165693},"97117":{"lat":45.631444,"long":-123.2879},"97118":{"lat":45.560774,"long":-123.911344},"97119":{"lat":45.468863,"long":-123.200213},"97121":{"lat":46.171919,"long":-123.951838},"97122":{"lat":45.161422,"long":-123.82578},"97123":{"lat":45.440165,"long":-122.980083},"97124":{"lat":45.569079,"long":-122.946701},"97125":{"lat":45.671165,"long":-123.19698},"97127":{"lat":45.246126,"long":-123.111352},"97128":{"lat":45.211917,"long":-123.282091},"97130":{"lat":45.671507,"long":-123.933418},"97131":{"lat":45.736903,"long":-123.817024},"97132":{"lat":45.324219,"long":-122.98733},"97133":{"lat":45.702104,"long":-123.029779},"97134":{"lat":45.457577,"long":-123.977041},"97135":{"lat":45.221862,"long":-123.962705},"97136":{"lat":45.630592,"long":-123.920769},"97137":{"lat":45.219509,"long":-122.948493},"97138":{"lat":45.853556,"long":-123.569342},"97140":{"lat":45.35308,"long":-122.865845},"97141":{"lat":45.510729,"long":-123.743368},"97144":{"lat":45.741563,"long":-123.300243},"97145":{"lat":45.851149,"long":-123.950728},"97146":{"lat":46.129698,"long":-123.945911},"97147":{"lat":45.688003,"long":-123.878633},"97148":{"lat":45.358403,"long":-123.248478},"97149":{"lat":45.112951,"long":-123.939044},"97201":{"lat":45.507856,"long":-122.690794},"97202":{"lat":45.482541,"long":-122.643935},"97203":{"lat":45.603549,"long":-122.737905},"97204":{"lat":45.518371,"long":-122.673946},"97205":{"lat":45.520562,"long":-122.710231},"97206":{"lat":45.482433,"long":-122.598605},"97208":{"lat":45.528666,"long":-122.678981},"97209":{"lat":45.531124,"long":-122.683951},"97210":{"lat":45.544163,"long":-122.726626},"97211":{"lat":45.581132,"long":-122.637305},"97212":{"lat":45.544236,"long":-122.643468},"97213":{"lat":45.538194,"long":-122.600014},"97214":{"lat":45.514672,"long":-122.643014},"97215":{"lat":45.515121,"long":-122.600627},"97216":{"lat":45.513887,"long":-122.558403},"97217":{"lat":45.601815,"long":-122.700798},"97218":{"lat":45.576236,"long":-122.600873},"97219":{"lat":45.454231,"long":-122.698526},"97220":{"lat":45.550024,"long":-122.559297},"97221":{"lat":45.498278,"long":-122.728839},"97222":{"lat":45.440949,"long":-122.618111},"97223":{"lat":45.44029,"long":-122.776604},"97224":{"lat":45.405501,"long":-122.795056},"97225":{"lat":45.502847,"long":-122.770212},"97227":{"lat":45.543386,"long":-122.6781},"97229":{"lat":45.551031,"long":-122.809275},"97230":{"lat":45.557757,"long":-122.505268},"97231":{"lat":45.687629,"long":-122.824209},"97232":{"lat":45.528929,"long":-122.643927},"97233":{"lat":45.515307,"long":-122.502168},"97236":{"lat":45.483213,"long":-122.510515},"97239":{"lat":45.489938,"long":-122.690453},"97266":{"lat":45.482967,"long":-122.557619},"97267":{"lat":45.408427,"long":-122.612867},"97301":{"lat":44.94878,"long":-123.003655},"97302":{"lat":44.903103,"long":-123.064528},"97303":{"lat":45.030354,"long":-123.023689},"97304":{"lat":45.006596,"long":-123.111691},"97305":{"lat":45.014338,"long":-122.928719},"97306":{"lat":44.842904,"long":-123.094751},"97317":{"lat":44.902603,"long":-122.907374},"97321":{"lat":44.65345,"long":-123.139526},"97322":{"lat":44.627553,"long":-123.017613},"97324":{"lat":44.364996,"long":-123.623152},"97325":{"lat":44.833821,"long":-122.85223},"97326":{"lat":44.619481,"long":-123.602815},"97327":{"lat":44.375035,"long":-122.947586},"97329":{"lat":44.411265,"long":-122.38462},"97330":{"lat":44.647997,"long":-123.259576},"97331":{"lat":44.564604,"long":-123.280419},"97333":{"lat":44.468069,"long":-123.293831},"97338":{"lat":44.926618,"long":-123.347413},"97341":{"lat":44.809324,"long":-124.051239},"97342":{"lat":44.739272,"long":-121.878966},"97343":{"lat":44.575254,"long":-123.75149},"97344":{"lat":44.869102,"long":-123.464616},"97345":{"lat":44.411545,"long":-122.578909},"97346":{"lat":44.788363,"long":-122.335327},"97347":{"lat":45.077114,"long":-123.656393},"97348":{"lat":44.383294,"long":-123.122261},"97350":{"lat":44.631459,"long":-121.86376},"97351":{"lat":44.815295,"long":-123.129486},"97352":{"lat":44.749395,"long":-123.027593},"97355":{"lat":44.532241,"long":-122.821044},"97357":{"lat":44.752668,"long":-123.825597},"97358":{"lat":44.804124,"long":-122.413624},"97360":{"lat":44.76627,"long":-122.499397},"97361":{"lat":44.766836,"long":-123.344975},"97362":{"lat":45.063492,"long":-122.77131},"97364":{"lat":44.99886,"long":-123.986853},"97365":{"lat":44.666397,"long":-124.010783},"97366":{"lat":44.575679,"long":-124.058352},"97367":{"lat":44.914756,"long":-123.974231},"97368":{"lat":45.024376,"long":-123.903116},"97369":{"lat":44.761507,"long":-124.051772},"97370":{"lat":44.563748,"long":-123.445455},"97371":{"lat":44.990697,"long":-123.190756},"97373":{"lat":45.05704,"long":-122.771754},"97374":{"lat":44.675912,"long":-122.778135},"97375":{"lat":44.977323,"long":-122.596342},"97376":{"lat":44.498235,"long":-123.975013},"97377":{"lat":44.463294,"long":-123.105998},"97378":{"lat":45.070687,"long":-123.421129},"97380":{"lat":44.786018,"long":-123.929969},"97381":{"lat":44.939469,"long":-122.720723},"97383":{"lat":44.794464,"long":-122.721862},"97384":{"lat":44.790993,"long":-122.618879},"97385":{"lat":44.865853,"long":-122.72355},"97386":{"lat":44.359177,"long":-122.727043},"97388":{"lat":44.903514,"long":-124.017859},"97389":{"lat":44.533484,"long":-123.089786},"97390":{"lat":44.309413,"long":-123.828824},"97391":{"lat":44.624538,"long":-123.898368},"97392":{"lat":44.795611,"long":-122.930376},"97394":{"lat":44.443864,"long":-123.907156},"97396":{"lat":45.104595,"long":-123.549273},"97401":{"lat":44.067988,"long":-123.080181},"97402":{"lat":44.047736,"long":-123.230905},"97403":{"lat":44.035821,"long":-123.052976},"97404":{"lat":44.105457,"long":-123.133235},"97405":{"lat":43.939557,"long":-123.192759},"97406":{"lat":42.615862,"long":-124.021255},"97408":{"lat":44.142995,"long":-123.058241},"97410":{"lat":42.79894,"long":-123.147871},"97411":{"lat":43.075636,"long":-124.359381},"97412":{"lat":44.204915,"long":-123.548069},"97413":{"lat":44.124779,"long":-122.072275},"97414":{"lat":42.961295,"long":-124.203481},"97415":{"lat":42.084386,"long":-124.174762},"97416":{"lat":43.034121,"long":-123.686734},"97417":{"lat":42.947656,"long":-123.230688},"97419":{"lat":44.180778,"long":-123.413186},"97420":{"lat":43.350966,"long":-124.136922},"97423":{"lat":43.193667,"long":-124.173269},"97424":{"lat":43.74081,"long":-123.018593},"97426":{"lat":43.89893,"long":-123.029954},"97429":{"lat":42.968299,"long":-123.0635},"97430":{"lat":44.17484,"long":-123.705193},"97431":{"lat":43.869538,"long":-122.84149},"97434":{"lat":43.621289,"long":-122.70322},"97435":{"lat":43.690204,"long":-123.328474},"97436":{"lat":43.640015,"long":-123.584772},"97437":{"lat":44.09311,"long":-123.408747},"97438":{"lat":43.944242,"long":-122.682456},"97439":{"lat":44.090182,"long":-124.048338},"97441":{"lat":43.751829,"long":-124.166146},"97442":{"lat":42.780374,"long":-123.425369},"97443":{"lat":43.250484,"long":-123.004257},"97444":{"lat":42.506103,"long":-124.337299},"97446":{"lat":44.260727,"long":-123.054648},"97447":{"lat":43.155248,"long":-122.210461},"97448":{"lat":44.208328,"long":-123.279908},"97449":{"lat":43.563367,"long":-124.040505},"97450":{"lat":42.905939,"long":-124.397057},"97451":{"lat":43.815227,"long":-123.268019},"97452":{"lat":43.874112,"long":-122.750081},"97453":{"lat":43.980238,"long":-123.850173},"97454":{"lat":44.221508,"long":-122.821646},"97455":{"lat":43.968553,"long":-122.919656},"97456":{"lat":44.339248,"long":-123.366418},"97457":{"lat":43.064514,"long":-123.229472},"97458":{"lat":43.048844,"long":-124.008543},"97459":{"lat":43.484217,"long":-124.182735},"97461":{"lat":44.108529,"long":-123.479762},"97462":{"lat":43.489968,"long":-123.379201},"97463":{"lat":43.740681,"long":-122.387167},"97465":{"lat":42.763521,"long":-124.344681},"97466":{"lat":42.848945,"long":-124.085233},"97467":{"lat":43.815887,"long":-123.823914},"97469":{"lat":42.910677,"long":-123.445884},"97470":{"lat":43.250675,"long":-123.242413},"97471":{"lat":43.218335,"long":-123.487741},"97473":{"lat":43.67591,"long":-123.852596},"97476":{"lat":42.842229,"long":-124.402796},"97477":{"lat":44.058465,"long":-123.011597},"97478":{"lat":44.089156,"long":-122.842269},"97479":{"lat":43.39035,"long":-123.208305},"97480":{"lat":44.122276,"long":-123.825169},"97481":{"lat":43.115279,"long":-123.56598},"97484":{"lat":42.940021,"long":-122.8503},"97486":{"lat":43.383323,"long":-123.531642},"97487":{"lat":43.988768,"long":-123.38721},"97488":{"lat":44.128632,"long":-122.417466},"97489":{"lat":44.164724,"long":-122.620682},"97490":{"lat":44.00414,"long":-123.612013},"97492":{"lat":43.718382,"long":-122.484809},"97493":{"lat":43.889588,"long":-124.024907},"97494":{"lat":43.330404,"long":-123.328081},"97495":{"lat":43.281038,"long":-123.315196},"97496":{"lat":43.066483,"long":-123.472707},"97497":{"lat":42.665706,"long":-123.425495},"97498":{"lat":44.284611,"long":-124.022676},"97499":{"lat":43.595025,"long":-123.248065},"97501":{"lat":42.265992,"long":-122.900842},"97502":{"lat":42.414574,"long":-122.954536},"97503":{"lat":42.604691,"long":-122.923719},"97504":{"lat":42.327947,"long":-122.800496},"97520":{"lat":42.182373,"long":-122.577113},"97522":{"lat":42.574815,"long":-122.530566},"97523":{"lat":42.123094,"long":-123.566871},"97524":{"lat":42.467463,"long":-122.647726},"97525":{"lat":42.450689,"long":-123.060929},"97526":{"lat":42.535682,"long":-123.338285},"97527":{"lat":42.37114,"long":-123.413622},"97530":{"lat":42.152148,"long":-123.057499},"97531":{"lat":42.199844,"long":-123.645659},"97532":{"lat":42.573758,"long":-123.521009},"97534":{"lat":42.118976,"long":-123.786285},"97535":{"lat":42.267738,"long":-122.811447},"97536":{"lat":42.781908,"long":-122.494698},"97537":{"lat":42.546408,"long":-123.13782},"97538":{"lat":42.270542,"long":-123.56742},"97539":{"lat":42.576424,"long":-122.786219},"97540":{"lat":42.192697,"long":-122.817256},"97541":{"lat":42.774879,"long":-122.755413},"97543":{"lat":42.375062,"long":-123.562128},"97544":{"lat":42.161377,"long":-123.302418},"97601":{"lat":42.443499,"long":-122.07558},"97603":{"lat":42.152018,"long":-121.683526},"97604":{"lat":42.953862,"long":-122.213146},"97620":{"lat":42.204181,"long":-119.78788},"97621":{"lat":42.469228,"long":-121.293655},"97622":{"lat":42.419191,"long":-121.026234},"97623":{"lat":42.202156,"long":-121.271139},"97624":{"lat":43.003246,"long":-121.635689},"97625":{"lat":42.31477,"long":-121.58089},"97626":{"lat":42.66735,"long":-122.02791},"97627":{"lat":42.140336,"long":-122.049929},"97630":{"lat":42.331353,"long":-120.367452},"97632":{"lat":42.036487,"long":-121.433906},"97633":{"lat":42.03414,"long":-121.562829},"97634":{"lat":42.128304,"long":-121.814925},"97635":{"lat":41.929992,"long":-120.294195},"97636":{"lat":42.616637,"long":-120.514464},"97637":{"lat":42.703377,"long":-119.890062},"97638":{"lat":43.135955,"long":-120.987247},"97639":{"lat":42.447776,"long":-121.429035},"97640":{"lat":42.847889,"long":-120.66334},"97641":{"lat":43.260266,"long":-120.513837},"97701":{"lat":44.112338,"long":-121.20634},"97702":{"lat":44.000626,"long":-121.233812},"97707":{"lat":43.826223,"long":-121.492124},"97710":{"lat":42.174574,"long":-118.470845},"97711":{"lat":44.705249,"long":-120.66431},"97712":{"lat":43.789447,"long":-120.456155},"97720":{"lat":43.585167,"long":-118.887819},"97721":{"lat":42.526339,"long":-118.446078},"97722":{"lat":42.94809,"long":-118.716044},"97730":{"lat":44.502297,"long":-121.647176},"97731":{"lat":43.145997,"long":-121.79748},"97732":{"lat":43.39729,"long":-118.443106},"97733":{"lat":43.371249,"long":-121.999522},"97734":{"lat":44.542438,"long":-121.336146},"97735":{"lat":43.41069,"long":-120.926174},"97736":{"lat":42.741882,"long":-119.006803},"97737":{"lat":43.49688,"long":-121.743673},"97738":{"lat":43.484045,"long":-119.156464},"97739":{"lat":43.694658,"long":-121.460906},"97741":{"lat":44.657725,"long":-121.054464},"97750":{"lat":44.658141,"long":-120.196695},"97751":{"lat":44.1455,"long":-119.869134},"97752":{"lat":44.14292,"long":-120.254389},"97753":{"lat":44.240512,"long":-121.018129},"97754":{"lat":44.15964,"long":-120.585505},"97756":{"lat":44.283326,"long":-121.216724},"97758":{"lat":43.338744,"long":-119.872224},"97759":{"lat":44.500616,"long":-121.898499},"97760":{"lat":44.376205,"long":-121.243587},"97761":{"lat":44.838526,"long":-121.261509},"97801":{"lat":45.670806,"long":-118.823573},"97810":{"lat":45.713979,"long":-118.457961},"97812":{"lat":45.575159,"long":-120.249897},"97813":{"lat":45.850406,"long":-118.528084},"97814":{"lat":44.827571,"long":-117.757799},"97817":{"lat":44.72877,"long":-118.605928},"97818":{"lat":45.785367,"long":-119.890171},"97819":{"lat":44.485347,"long":-117.760392},"97820":{"lat":44.072549,"long":-119.472928},"97823":{"lat":45.239934,"long":-120.216766},"97824":{"lat":45.354301,"long":-117.75647},"97825":{"lat":44.385126,"long":-119.496273},"97826":{"lat":45.664296,"long":-119.232316},"97827":{"lat":45.575424,"long":-117.83805},"97828":{"lat":45.716563,"long":-117.221992},"97830":{"lat":44.966553,"long":-120.183153},"97833":{"lat":44.928889,"long":-118.014879},"97834":{"lat":44.972275,"long":-117.161191},"97835":{"lat":45.910007,"long":-118.786544},"97836":{"lat":45.321152,"long":-119.47462},"97837":{"lat":44.556661,"long":-118.067106},"97838":{"lat":45.853004,"long":-119.287265},"97839":{"lat":45.591171,"long":-119.59304},"97840":{"lat":44.884599,"long":-116.918444},"97841":{"lat":45.465116,"long":-117.944925},"97842":{"lat":45.399271,"long":-116.736989},"97843":{"lat":45.502322,"long":-119.902866},"97844":{"lat":45.88415,"long":-119.548836},"97845":{"lat":44.401824,"long":-118.90306},"97846":{"lat":45.462699,"long":-117.039586},"97848":{"lat":44.722177,"long":-119.580554},"97850":{"lat":45.303538,"long":-118.113278},"97856":{"lat":44.815212,"long":-119.125255},"97857":{"lat":45.384667,"long":-117.480138},"97859":{"lat":45.526719,"long":-118.421455},"97862":{"lat":45.922063,"long":-118.316063},"97864":{"lat":44.805466,"long":-119.435932},"97865":{"lat":44.461466,"long":-119.18004},"97867":{"lat":45.077654,"long":-117.993762},"97868":{"lat":45.409294,"long":-118.853582},"97869":{"lat":44.397563,"long":-118.633979},"97870":{"lat":44.787989,"long":-117.186563},"97873":{"lat":44.132013,"long":-119.002884},"97874":{"lat":44.777573,"long":-119.867594},"97875":{"lat":45.818549,"long":-119.132853},"97876":{"lat":45.516439,"long":-118.035678},"97877":{"lat":44.711742,"long":-118.410517},"97880":{"lat":45.088669,"long":-118.882506},"97882":{"lat":45.897431,"long":-119.366071},"97883":{"lat":45.192423,"long":-117.634155},"97884":{"lat":44.455344,"long":-118.22223},"97885":{"lat":45.655669,"long":-117.511704},"97886":{"lat":45.802308,"long":-118.27241},"97901":{"lat":43.621445,"long":-117.107275},"97903":{"lat":44.246805,"long":-117.646977},"97904":{"lat":43.886179,"long":-118.522929},"97905":{"lat":44.57382,"long":-117.459512},"97906":{"lat":43.537039,"long":-117.774678},"97907":{"lat":44.419501,"long":-117.345514},"97908":{"lat":44.312378,"long":-117.927886},"97909":{"lat":44.246692,"long":-117.418958},"97910":{"lat":42.749076,"long":-117.511459},"97911":{"lat":43.736482,"long":-118.041388},"97913":{"lat":43.613589,"long":-117.323286},"97914":{"lat":44.113619,"long":-117.084162},"97918":{"lat":44.037114,"long":-117.351072},"97920":{"lat":44.072181,"long":-117.854282}};

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
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "./node_modules/@angular-slider/ngx-slider/fesm5/angular-slider-ngx-slider.js");













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
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_12__["NgxSliderModule"]
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