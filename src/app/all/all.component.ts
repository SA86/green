import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProvidersService } from '../providers.service';
import { Observable, throwError, forkJoin } from 'rxjs';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import PostalCodeData from "./postal-codes.json";
// import DispensaryListData from "./dispensary-list.json";
import { catchError, retry } from 'rxjs/operators';
import { find, pull, filter, times, constant, debounce, set, get, keyBy, reduce, cloneDeep, sortedUniq, sortBy, includes, chunk, sumBy, orderBy, concat } from 'lodash';

interface Products {
	products: any;
	data: any;
	
}
interface DispensaryList {
	'name' : string;
	'value': any;
	'postal': number;
	'geo': object;
	'url': string;
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
	formSearch: FormGroup = new FormGroup({});
	search: string = '';
	postal: number = 97006;
	pageSize: number = 125;
	pageSizeOptions = [5, 10, 25, 100, 125, 200, 500, 1000];
	currentPage = 0;
	originalProducts: any;
	products: any;
	productsChunks: any;
	productCount: number;
	productBank = [];
	loading:boolean = true;
	// menu display
	menuQuickFiltersView: boolean = false;
	menuSearchView: boolean = false;
	menuLocationView: boolean = false;
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
	maxValue: number = 120;
	soptions: Options = {
		floor: 0,
		ceil: 120,
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
		'pricerange': [1,120],
		'cost': ['sales', 'low/high'],
		'distance': [],
		'range': '5',
		'sales': [],
		'priceSort': 'Low'
	};			
	
	// dispensaryList: DispensaryList[] = DispensaryListData;
	dispensaryList: DispensaryList[] = [
		{ 'name': 'Cannabis Nation-Beaverton', 'value': 'acMFAfbvyQ9CKsrNy', 'postal': 97006, 'geo':[45.5203821,-122.8431368], 'url':'dat'  },
		{ 'name': 'Nectar-Aloha', 'value': 'YbTHoLFPigH4scErj', 'postal': 97006, 'geo':[45.4966407,-122.8912542], 'url':'dat'  },
		{ 'name': 'Nectar-Beaverton-Allen', 'value': 'CAcMm4qtR9t29dzg6', 'postal': 97005, 'geo':[45.4766619,-122.8250877], 'url':'dat'  },
		{ 'name': 'Nectar-Beaverton-Hall', 'value': 'cynASLBsrjDueyH3A', 'postal': 97008, 'geo':[45.457036,-122.7856972], 'url':'dat'},
		{ 'name': 'Nectar-Regatta', 'value': '5f6bdb8157c27500f22d66ea', 'postal': 97006, 'geo':[45.5160132,-122.8435447], 'url':'dat'  },
		{ 'name': 'Kaleafa-Beaverton', 'value': 'KaleafaBeaverton', 'postal': 97005, 'geo':[45.4862895,-122.7912229], 'url':'dat'  },
		{ 'name': 'Broadway-Beaverton', 'value': '605b64fa3da35500d1dd9d05', 'postal': 97005, 'geo':[45.4862065,-122.7813575], 'url':'dat'  },
		{ 'name': 'Electric Lettuce-Beaverton', 'value': '5e7b8808bf130d00a8f6bd30', 'postal': 97008, 'geo':[45.4695997,-122.7862657], 'url':'dat'},
		{ 'name': 'Growing Releaf-Beaverton', 'value': 115818, 'postal': 97005, 'geo':[45.4899831,-122.7907909], 'url':'dat'},
		{ 'name': 'Green Planet-Beaverton', 'value': 107819, 'postal': 97005, 'geo':[45.4928959,-122.7829708], 'url':'dat'},
		{ 'name': 'Stone Age-Beaverton', 'value': 123946, 'postal': 97225, 'geo':[45.498724,-122.767445], 'url':'dat'},
		{ 'name': 'Oregon Bud Comp-Beaverton', 'value': 'OregonBudBeaverton', 'postal': 97005, 'geo':[45.496279,-122.8103849], 'url':'dat'},
		{ 'name': 'LaMota-Beaverton', 'value': 'oJN2QYZJHAxvBDWrL', 'postal': 97003, 'geo':[45.4930636,-122.855204], 'url':'dat'  },
		{ 'name': 'Electric Lettuce-CedarHills', 'value': '5e7b8dfe49f75e00bbdb7b9e', 'postal': 97225, 'geo':[45.5093087,-122.7853587], 'url':'dat'  },
		{ 'name': 'Green Mart-CedarHills', 'value': 143818, 'postal': 97005, 'geo':[45.5027025,-122.8104366], 'url':'dat'  },
		{ 'name': 'Western Oregon-CedarHills', 'value': 301745, 'postal': 97229, 'geo':[45.4798169,-122.8497282], 'url':'dat'  },
		{ 'name': 'Kaleafa-Hillsboro', 'value': 'KaleafaHillsboro', 'postal': 97123, 'geo':[45.5178175,-122.9963372], 'url':'dat'  },
		{ 'name': 'Mr NiceGuy-Hillsboro', 'value': '6YskMw5YxzjN3AP3g', 'postal': 97113, 'geo':[45.5203924,-123.0348346], 'url':'https://www.mrniceguyretail.com/mr-nice-guy-cornelius'  },
		{ 'name': 'Speedy Janes-Hillsboro', 'value': 300136, 'postal': 97123, 'geo':[45.514556,-122.9983446], 'url':'http://www.speedyjanes.com/' },
		{ 'name': 'The Vth-Hillsboro', 'value': 'HXg4iybZrq6wRbZMb', 'postal': 97123, 'geo':[45.5201985,-123.0053237], 'url':'https://thevth.com/' },
		{ 'name': 'Western Oregon-Hillsboro', 'value': 319881, 'postal': 97123, 'geo':[45.5261959,-123.0056568], 'url':'http://westernoregondispensary.com/' },
		{ 'name': 'CDC-Metzger', 'value': 'CDCMetzger', 'postal': 97223, 'geo':[45.4476039,-122.7679728], 'url':'http://cdcpdx.com/' },
		{ 'name': 'Lemonnade-Metzger', 'value': 130410, 'postal': 97219, 'geo':[45.4435975,-122.7452872], 'url':'https://magic-castle-cannabis-store.business.site/' },
		{ 'name': 'Local Leaf-Metzger', 'value': 144011, 'postal': 97223, 'geo':[45.4650255,-122.7570999], 'url':'http://www.localleaf420.com/#!contact_us/c1z0x' },
		{ 'name': 'Cola Cove-Tigard', 'value': '5e7b9f3bdbf9cc0b3d2e3ff2', 'postal': 97223, 'geo':[45.4221154,-122.7869961], 'url':'https://dutchie.com/store/cola-cove/menu' },
		{ 'name': 'Chalice-Tigard', 'value': 'ChaliceTigard', 'postal': 97224, 'geo':[45.3989266,-122.8014775], 'url':'https://www.chalicefarms.com/locations/tigard-cannabis-dispensary'  },
		{ 'name': 'Electric Lettuce-Tigard', 'value': '5f19ecdfa7db3b01086e24fa', 'postal': 97223, 'geo':[45.4380797,-122.7564607], 'url':'https://electriclettuce.com/location/tigard-dispensary?utm_source=google&utm_medium=local&utm_campaign=website_button' },
		{ 'name': 'Kaleafa-Tigard', 'value': 'kaleafaTigard', 'postal': 97223, 'geo':[45.4404432,-122.7514242], 'url':'http://kaleafa.com/' },
		{ 'name': 'Nectar-Barbur', 'value': '4oiKwdDJgmPecXMek', 'postal': 97216, 'geo':[45.4462891,-122.7334938], 'url':'https://nectar.store/barbur/' },
		{ 'name': 'Green Planet-KingCity', 'value': 196138, 'postal': 97224, 'geo':[45.4085658,-122.7974766], 'url':'https://www.thegreenplanet.net/' },
		{ 'name': 'Green Goddess Remedies', 'value': 85676, 'postal': 97215, 'geo':[45.4549689,-122.7353912], 'url':'https://greengoddesspdx.com/' },
		{ 'name': 'Parlour-Beaverton', 'value': 'AYYz8RrZ62Zqme9fv', 'postal': 97225, 'geo':[45.4927978,-122.8394032], 'url':'http://www.parlourcannabis.com/' },
		{ 'name': 'Natural Remedies-Barbur', 'value': 'zBKaBM3hTpspDwMED', 'postal': 97219, 'geo':[45.4615768,-122.7055526], 'url':'https://naturalremediespdx.com/' },
		{ 'name': 'Brothers-Oswego', 'value': 328152, 'postal': 97202, 'geo':[45.5048869,-122.6283683], 'url':'https://brothers-cannabis.com/' },
	];

	constructor(private http: HttpClient, private providersService: ProvidersService) {
		this.postalCodes = PostalCodeData;
		// this.dispensaryListData = DispensaryListData;
	}

	ngOnInit() {
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
				break;
		}
	}	
	
	filterProducts(type:string): void {
		let filtered = filter(this.originalProducts, (product) => {
			let inDispensary = this.productFilters.locations.indexOf(product.id);
			let inRange = find(this.productFilters.distance, { 'value' : product.id});
			let name = product.name.toLowerCase();
			if ((product.price >= this.productFilters.pricerange[0] && product.price <= this.productFilters.pricerange[1]) // 0-120
						&&
					(inDispensary > -1 || this.productFilters.locations.length === 0) // products is in our location array
						&&
					(inRange || this.productFilters.distance.length === 0 || type === 'locations') // distance // bypass on locations
						&&
					(name.includes(this.productFilters.query))	// QUERY search
						&&
					((product.discountPrice && product.discountPrice < product.price) || type !== 'sales' )	// sales			
							
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
		this.products = filtered;
		// this.paginateItems();			
	}
	
	removeSortChip(type): void {
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
		if (type === 'sales') {
			this.productFilters.sales = '';
			this.sortByAll();
		}
	}
	
	quickSort(name:string): void {
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
		this.productFilters.locations = o.value;
		this.processSorting('locations');
	}	


	setPageSizeOptions(setPageSizeOptionsInput: string) {
		this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
	}

	// pagination event change
	handlePage(e: any) { 
		//& TOTO need to get products rather than originalproducts
		this.currentPage = e.pageIndex;
		this.pageSize = e.pageSize;
		const end = (this.currentPage + 1) * this.pageSize;
		const start = this.currentPage * this.pageSize;
		const part = this.originalProducts.slice(start, end);
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
		this.bestSaleItems = orderBy(filteredForSale, ['discountraw'], ['desc']);		
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
		this.products = this.originalProducts;
		this.productFilters.sales = '';
		this.productFilters.query = '';
		this.paginateItems();
		this.quickFilterActive(null, null);
		this.gatherQuickSorts(this.products);
	}
	
	// sorts by low/high price
	sortPrice(direction) {
		let sortedByPrice;
		if (direction === 'high') {
			this.productFilters.priceSort = 'High';
			sortedByPrice = orderBy(this.originalProducts, ['price'], ['desc']); 
		} else if (direction === 'low') {
			this.productFilters.priceSort = 'Low';
			sortedByPrice = orderBy(this.originalProducts, ['price'], ['asc']); 
		} else if (direction === 'toggle') {
			if(this.productFilters.priceSort === 'Low') {
				this.productFilters.priceSort = 'High';
				sortedByPrice = orderBy(this.originalProducts, ['price'], ['desc']); 
			} else {
				this.productFilters.priceSort = 'Low';
				sortedByPrice = orderBy(this.originalProducts, ['price'], ['asc']); 
			}
			
		}
		this.products = sortedByPrice;
		this.paginateItems();
	}

	
	// toggles active quick sort class
	quickFilterActive(name, type) { 
		this.sortTypeMap.map((e) => {
			if(e.name === name) {
				e.active = !e.active;
			} else {
				e.active = false;
			}
			return e
		});			
		this.sortStrainMap.map((e) => {
			if(e.name === name) {
				e.active = !e.active;
			} else {
				e.active = false;
			}
			return e
		});			
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
					this.getGeo();
					this.paginateItems();
					this.loading = false;
					console.log('h88 prod', this.products);
					this.gatherQuickSorts(this.originalProducts);
					this.gatherSales(this.originalProducts);
				});			
	}
	paginateItems() {
		this.productCount = this.products.length; 
		this.productsChunks = chunk(this.products, this.pageSize);
		this.products = this.productsChunks[0];			
	}

}
