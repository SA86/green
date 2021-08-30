import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProvidersService } from '../providers.service';
import { Observable, throwError, forkJoin, Subscription } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import PostalCodeData from "./postal-codes.json";
import { AboutModalComponent } from '../modals/about-modal/about-modal.component';
import { DispensaryModalComponent } from '../modals/dispensary-modal/dispensary-modal.component';
import { LocationModalComponent } from '../modals/location-modal/location-modal.component';
import { MatDialog, MatDialogConfig } from  '@angular/material/dialog';
import { AllSharedService } from '../services/all-shared.service';
import { find, pull, filter, times, constant, debounce, set, get, keyBy, reduce, cloneDeep, sortedUniq, sortBy, includes, chunk, sumBy, orderBy, concat } from 'lodash';

interface Products {
	products: any;
	data: any;
	
}
@Component({
	selector: 'app-all',
	templateUrl: './all.component.html',
	styleUrls: ['./all.component.scss'],
	encapsulation: ViewEncapsulation.None
})

export class AllComponent implements OnInit {
	postalCodes: any; 
	pageEvent: PageEvent;
	dispensary = new FormControl();
	sortByDispensarySubscription:Subscription;
	formSearch: FormGroup = new FormGroup({});
	search: string = '';
	postal: number = 97006;
	pageSize: number = 125;
	pageSizeOptions = [5, 10, 25, 100, 125, 200, 500, 1000];
	currentPage = 0;
	originalProducts: any;
	products: any;
	productsFull: any; // unchunked
	productsChunks: any;
	productCount: number;
	productBank = [];
	loading:boolean = true;
	dispensaryList; // @TODO make type
	// menu display
	menuQuickFiltersView: boolean = false;
	menuPricingView: boolean = false;
	menuAboutView: boolean = false;
	menuDistanceView: boolean = false;
	distanceDispensaryResults: object = [];
	quickStrainSorts = [ 'Bio Diesel', 'Blue', 'Cheese', 'Cherry', 'Cookies', 'Cooks', 'Dawg', 'Diesel', 'GDP', 'Grape', 'GMO', 'GSC', 'Kush', 'MAC', 'Orange', 'Pineapple', 'PHK', 'Purple', 'Strawberry', 'Zkittles' ];
	quickTypesSorts = [ 'Badder', 'Crumble', 'Diamonds', 'Live Resin', 'Rosin', 'RSO', 'Sauce', 'Shatter', 'Sugar' ];
	sortStrainMap = []; // strain quick sorts
	sortTypeMap = []; // type quick sorts
	saleItems: any;
	bestSaleItems: any;
	removable: boolean = true;
	minValue: number = 1;
	maxValue: number = 180;
	soptions: Options = {
		floor: 0,
		ceil: 180,
		translate: (value: number, label: LabelType): string => {
			switch (label) {
				case LabelType.Low:
					return "<b>Min:</b> $" + value;
				case LabelType.High:
					return "<b>Max:</b> $" + value;
				default:
					return "$" + value;
			}
		}
	};	
	productFilters: any = {
		'quick': {
			'strain': [],
			'types': [],
		},
		'query': '',
		'locations': [],
		'pricerange': [8,120],
		'cost': ['sales', 'low/high'],
		'distance': [],
		'range': '5',
		'sales': [],
		'priceSort': 'Low'
	};			


	constructor(private http: HttpClient, private providersService: ProvidersService, private  dialogRef : MatDialog, private allShared: AllSharedService) {
		this.postalCodes = PostalCodeData;
		this.sortByDispensarySubscription = this.allShared.getClickEvent().subscribe((dispensaries)=>{
				this.sortByDispensary(dispensaries);
			});
	}

	ngOnInit() {
		this.getDispensaries();
		this.getConcentrates();
	}
	
	
	processSorting(type) {
		switch (type) {
			case 'quick':
				this.filterProducts(type);
				break;
			case 'sales':
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
				this.filterProducts('none');
				break;
		}
	}	
	
	filterProducts(type:string): void {
		let filtered = filter(this.originalProducts, (product) => {
			let inDispensary = this.productFilters.locations.indexOf(product.value);
			let inRange = find(this.productFilters.distance, { 'value' : product.value});
			let name = product.name.toLowerCase();
			// let d1 = product.price >= this.productFilters.pricerange[0] && product.price <= this.productFilters.pricerange[1];
			// let d2 = inDispensary > -1 || this.productFilters.locations.length === 0;
			// let d3 = inRange || this.productFilters.distance.length === 0 || type === 'locations' || type === 'pricerange';
			// let d4 = name.includes(this.productFilters.query);
			// let d5 = (product.discountPrice && product.discountPrice < product.price) || type !== 'sales';
			if ((product.price >= this.productFilters.pricerange[0] && product.price <= this.productFilters.pricerange[1]) // prices | 0-180$
						&&
					(inDispensary > -1 || this.productFilters.locations.length === 0) // locations | it it selected in locations
						&&
					(inRange || this.productFilters.distance.length === 0 || type === 'locations' || type === 'pricerange') // distance | is it a distance search, bypass on locations & pricerange
						&&
					(name.includes(this.productFilters.query))	// query | is it a query search
						&&
					((product.discountPrice && product.discountPrice < product.price) || type !== 'sales' )	// sales	| is it on Sale		
							
			) {
				if(product.discountPrice) { // build discount property if on sale
					let diff = product.price - product.discountPrice;
					let off = diff / product.price;
					product.discount = off.toFixed(2);
					product.discount = product.discount * 100;
					product.discountraw = product.discount * 100;
					product.discount = `$${diff.toFixed(2)} (${product.discount.toFixed()}%)`;
				}
				return product
			}
		});
		if (this.productFilters.priceSort === 'High') {
			filtered = orderBy(filtered, ['price'], ['desc']);
		} else {
			filtered = orderBy(filtered, ['price'], ['asc']);
		}
		this.products = filtered;
		this.productsFull = filtered;
		this.paginateItems();			
	}
	
	removeSortChip(type:string): void {
		switch (type) {
			case 'query':
				this.productFilters.query = '';
				this.processSorting('query');
				break;
			case 'distance':
				this.productFilters.range = 30;
				this.getGeo();
				break;
			case 'locations':
				this.productFilters.locations = [];
				this.dispensary.setValue('');
				this.processSorting('locations');
				break;
			case 'pricerange':
				this.productFilters.pricerange[0] = 1;
				this.productFilters.pricerange[1] = 120;
				this.processSorting('pricerange');
				break;
			case 'sales':
				this.productFilters.sales = '';
				this.sortByAll();
				break;
			default:
				break;
		}
	}
	
	quickSort(name): void {
		if(name === 'sales') {
			this.productFilters.sales = 'sales';
			this.processSorting('sales');
		} else {
			this.productFilters.query = name.toLowerCase();
			this.processSorting('query');
		}
	}	

	//sort by dispensary
	sortByDispensary(o): void {
		this.productFilters.locations = o;
		this.processSorting('locations');
	}	


	setPageSizeOptions(setPageSizeOptionsInput: string) {
		this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}

	// pagination event change
	handlePage(e: any) { 
		this.currentPage = e.pageIndex;
		this.pageSize = e.pageSize;
		const end = (this.currentPage + 1) * this.pageSize;
		const start = this.currentPage * this.pageSize;
		const part = this.productsFull.slice(start, end);
		this.products = part;		
	}


	// search by query
	doSearch(e) {
		if (e.keyCode === 13 || this.productFilters.query.length >= 3) {
			let query = this.productFilters.query.toLowerCase();
			this.productFilters.query = query;
			this.processSorting('query');
		}
	}
	
	// search zip query // handle hard return
	doZipSearch(e) {
		if (e.keyCode === 13 || Math.ceil(Math.log10(this.postal + 1)) === 5) { // enter key or zip.length=5
			this.getGeo();
		}
	}
	
	// gathers dispensary in range
	getGeo() { 
		let lat = this.postalCodes[this.postal].lat;
		let long = this.postalCodes[this.postal].long;
		this.productFilters.distance = filter(this.dispensaryList, ((item)=> {
			let distance = this.calculateDistance(lat, long, item.geo[0],  item.geo[1]);
			if(this.productFilters.range >= distance) {
				return item
			}			
		}));
		this.processSorting('distance');
	}

	//calculates range between host and all dispensaries
	calculateDistance(lat1, lon1, lat2, lon2) {
		let unit = '';
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist;
	}
	
	gatherQuickSorts(products) { // build quick sorts + counts
		this.sortStrainMap = this.quickStrainSorts.map((item) => {
			let searched = filter(products, (o) => {
				let name = o.name.toLowerCase();
				if (name.includes(item.toLowerCase())) {
					return o;
				}
			});			
			return { 'name': item, 'count': searched.length, 'items': searched, 'type': 'quick-strain-sort', 'active': false }
		});
		
		this.sortTypeMap = this.quickTypesSorts.map((item) => {
			let searched = filter(products, (o) => {
				let name = o.name.toLowerCase();
				if (name.includes(item.toLowerCase())) {
					return o;
				}
			});			
			return { 'name': item, 'count': searched.length, 'items': searched, 'type': 'quick-type-sort', 'active': false }
		});
	}
	
	gatherSales(products) { // build quick sale sort + counts
		let filteredForSale = filter(products, (o) => {
			if (o.discountPrice && o.discountPrice < o.price) {
				let diff = o.price - o.discountPrice;
				let off = diff / o.price;
				o.discount = off.toFixed(2);
				o.discount = o.discount * 100;
				o.discountraw = o.discount * 100;
				o.discount = `$${diff.toFixed(2)} (${o.discount.toFixed()}%)`;
				return o
			}
		});
		let sortedBySale = sortBy(filteredForSale, ['discountPrice']);
		this.saleItems = sortedBySale;
		// this.bestSaleItems = orderBy(filteredForSale, ['discountraw'], ['desc']);		
	}
	
	//sort by cost
	sortByCostLow(e) {
		this.productFilters.pricerange[0] = e;
	}
	
	//sort by cost
	sortByCostHigh(e) {
		this.productFilters.pricerange[1] = e;
	}

	// show all
	sortByAll() {
		this.processSorting('distance');
		this.productFilters.sales = '';
		this.productFilters.query = '';
	}
	
	// sorts by low/high price
	sortPrice(direction) {
		if (direction === 'toggle') {
			if(this.productFilters.priceSort === 'Low') {
				this.productFilters.priceSort = 'High';
			} else {
				this.productFilters.priceSort = 'Low';
			}
		} else {
			this.productFilters.priceSort = direction;
		}
		this.processSorting('');
	}

	removeUnusedProducts(products) { // remove select items from product list
		// let productsToRemove = ['kief', 'syringe', 'dabaratus', 'dripper', 'moonrock', 'cartridge', 'cart', 'rso', 'preroll', 'pre-roll'];
		let filteredProducts = filter(products, (o) => {
			let name = o.name.toLowerCase();
			if (
				name.includes('kief') === false 
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
		return filteredProducts
	}
	
	openAboutDialog(){
		const dialogConfig = new MatDialogConfig();
		let counts = [this.originalProducts.length, this.dispensaryList.length];
		dialogConfig.data = counts;		
		this.dialogRef.open(AboutModalComponent, dialogConfig);
	}
	
	openDispensaryDialog(){
		const dialogConfig = new MatDialogConfig();
		let dispensaries = this.productFilters.distance;
		dialogConfig.data = dispensaries;		
		this.dialogRef.open(DispensaryModalComponent, dialogConfig);
	}
	
	openLocationDialog(){
		const dialogConfig = new MatDialogConfig();
		let dialogData = [this.dispensaryList, this.productFilters.locations]
		dialogConfig.data = dialogData;
		this.dialogRef.open(LocationModalComponent, dialogConfig);
	}
	

	getConcentrates() {
			let greenA = this.http.get('http://api.endo86.com:8051/greenA');
			let greenB = this.http.get('http://api.endo86.com:8051/greenB');
			let greenC = this.http.get('http://api.endo86.com:8051/greenC');
			forkJoin([greenA, greenB, greenC]).subscribe(results => {
				let combined = concat(results[0], results[1], results[2]);
				let cleaned = this.removeUnusedProducts(combined); // remove bad items from the list
				let sortedByPrice = sortBy(cleaned, ['price']); // sort by lowest price				
				this.originalProducts = sortedByPrice; // create copy of items
				this.products = sortedByPrice; // out View object
				this.productsFull = sortedByPrice;
				this.getGeo();
				this.loading = false;
				console.log('h88 prod', this.products);
				this.gatherQuickSorts(this.originalProducts);
				this.gatherSales(this.originalProducts);
			});			
	}
	
	getDispensaries() {
		let disp = this.providersService.getDispensaries().subscribe(results=>{
			this.dispensaryList = orderBy(results, ['name'], ['asc']);
		});
	}
	
	paginateItems() {
		this.productCount = this.products.length; 
		this.productsChunks = chunk(this.products, this.pageSize);
		this.products = this.productsChunks[0];			
	}

}
