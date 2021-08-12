import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProvidersService } from '../providers.service';
import { Observable, throwError } from 'rxjs';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import { Options, LabelType } from "@angular-slider/ngx-slider";
import { catchError, retry } from 'rxjs/operators';
import { find, pull, filter, times, constant, debounce, set, get, keyBy, reduce, cloneDeep, sortedUniq, sortBy, includes, chunk, sumBy } from 'lodash';

interface Products {
	products: any;
	data: any;
	
}
interface DispensaryList {
	'name' : string;
	'value': any;
	'local': number;
}
@Component({
	selector: 'app-all',
	templateUrl: './all.component.html',
	styleUrls: ['./all.component.scss']
})

export class AllComponent implements OnInit {
	pageEvent: PageEvent;
	dispensary = new FormControl();
	formSearch: FormGroup = new FormGroup({});
	search: string = '';
	pageSize: number = 125;
	pageSizeOptions = [5, 10, 25, 100, 125, 200, 500, 1000];
	currentPage = 0;
	originalProducts: any;
	products: any;
	productsChunks: any;
	productCount: number;
	productBank = [];
	loading:boolean = true;
	quickSorts = ['Purple','PHK','GDP','GMO','Bio Diesel','Blue','Cheese','Cherry','Cookies','Cooks','Dawg','Diesel','Grape','Kush', 'Orange', 'Rosin','Strawberry'];
	sortMap = [];
	saleItems: any;
	removable: boolean = true;
	minValue: number = 5;
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
	
	dispensaryList: DispensaryList[] = [
		{ 'name': 'Cannabis Nation-Beaverton', 'value': 'acMFAfbvyQ9CKsrNy', 'local': 1 },
		{ 'name': 'Nectar-Aloha', 'value': 'YbTHoLFPigH4scErj', 'local': 1 },
		{ 'name': 'Nectar-Beaverton-Allen', 'value': 'CAcMm4qtR9t29dzg6', 'local': 2 },
		{ 'name': 'Nectar-Beaverton-Hall', 'value': 'cynASLBsrjDueyH3A', 'local': 2  },
		{ 'name': 'Nectar-Regatta', 'value': '5f6bdb8157c27500f22d66ea', 'local': 1 },
		{ 'name': 'Kaleafa-Beaverton', 'value': 'KaleafaBeaverton', 'local': 1 },
		{ 'name': 'Broadway-Beaverton', 'value': '605b64fa3da35500d1dd9d05', 'local': 1 },
		{ 'name': 'Electric Lettuce-Beaverton', 'value': '5e7b8808bf130d00a8f6bd30', 'local': 2  },
		{ 'name': 'Growing Releaf-Beaverton', 'value': 115818, 'local': 2  },
		{ 'name': 'Green Planet-Beaverton', 'value': 107819, 'local': 2  },
		{ 'name': 'Stone Age-Beaverton', 'value': 123946, 'local': 2  },
		{ 'name': 'Oregon Bud Comp-Beaverton', 'value': 'OregonBudBeaverton', 'local': 2  },
		{ 'name': 'LaMota-Beaverton', 'value': 'oJN2QYZJHAxvBDWrL', 'local': 1 },
		{ 'name': 'Electric Lettuce-CedarHills', 'value': '5e7b8dfe49f75e00bbdb7b9e', 'local': 1 },
		{ 'name': 'Green Mart-CedarHills', 'value': 143818, 'local': 1 },
		{ 'name': 'Western Oregon-CedarHills', 'value': 301745, 'local': 1 },
		{ 'name': 'Kaleafa-Hillsboro', 'value': 'KaleafaHillsboro', 'local': 2  },
		{ 'name': 'Mr NiceGuy-Hillsboro', 'value': '6YskMw5YxzjN3AP3g', 'local': 2  },
		{ 'name': 'Speedy Janes-Hillsboro', 'value': 300136, 'local': 2  },
		{ 'name': 'The Vth-Hillsboro', 'value': 'HXg4iybZrq6wRbZMb', 'local': 2  },
		{ 'name': 'Western Oregon-Hillsboro', 'value': 319881, 'local': 2  },
		{ 'name': 'CDC-Metzger', 'value': 'CDCMetzger', 'local': 3  },
		{ 'name': 'Lemonnade-Metzger', 'value': 130410, 'local': 3 },
		{ 'name': 'Local Leaf-Metzger', 'value': 144011, 'local': 3 },
		{ 'name': 'Cola Cove-Tigard', 'value': '5e7b9f3bdbf9cc0b3d2e3ff2', 'local': 3 },
		{ 'name': 'Chalice-Tigard', 'value': 'ChaliceTigard', 'local': 3 },
		{ 'name': 'Electric Lettuce-Tigard', 'value': '5f19ecdfa7db3b01086e24fa', 'local': 3 },
		{ 'name': 'Kaleafa-Tigard', 'value': 'kaleafaTigard', 'local': 3 },
		{ 'name': 'Nectar-Barbur', 'value': '4oiKwdDJgmPecXMek', 'local': 3 },
		{ 'name': 'Green Planet-KingCity', 'value': 196138, 'local': 3 },
		{ 'name': 'Green Goddess-SW.PDX', 'value': 85676, 'local': 3 },
		{ 'name': 'Parlour-E.Beaverton', 'value': 'AYYz8RrZ62Zqme9fv', 'local': 3 },
		{ 'name': 'Natural Remedies-Barbur', 'value': 'zBKaBM3hTpspDwMED', 'local': 3 },
		{ 'name': 'Brothers-Oswego', 'value': 328152, 'local': 3 },
	];

	constructor(private httpClient: HttpClient, private providersService: ProvidersService) { }


	ngOnInit() {
		this.getConcentrates();
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
		const part = this.originalProducts.slice(start, end);
		this.products = part;		
	}


	// search by query
	doSearch(e) {
		if (e.keyCode === 13) {
			let query = this.search.toLowerCase();
			let searched = filter(this.originalProducts, (o) => {
				let name = o.Name.toLowerCase();
				if (name.includes(query)) {
					return o;
				}
			});
			this.products = searched;
			this.productCount = this.products.length;
		}
	}
	
	gatherQuickSorts(products) { // build quicksorts
		this.sortMap = this.quickSorts.map((item) => {
			let searched = filter(products, (o) => {
				let name = o.Name.toLowerCase();
				if (name.includes(item.toLowerCase())) {
					return o;
				}
			});			
			return { 'name': item, 'count': searched.length, 'items': searched, 'type': 'quick-sort', 'active': false }
		});
		this.sortSales(products);
		this.sortMap.push({
			'name': 'Sales',
			'count': this.saleItems.length,
			'items': this.saleItems,
			'type': 'quick-sales',
			'active': false
		});
		this.sortMap.splice(0, 0, this.sortMap.splice(this.sortMap.length-1, 1)[0]); // move sales to start of array
		console.log('h88 this.sortMap', this.sortMap);

	}

	//sort by dispensary
	sortByDispensary(o) {
		let dispensary;
		if (o.value.length === 1) { // one selection
			dispensary = filter(this.originalProducts, ['DispensaryID', o.value[0]]);
			this.products = dispensary;
		} else if (o.value.length === 0) { // no selection, show all
			this.products = this.originalProducts;
		} else { // multi select
			dispensary = filter(this.originalProducts, (e) => {
				for (let i = 0; i < o.value.length; i++) {
					if (e.DispensaryID === o.value[i]) {
						return o
					}
				}
			});
			this.products = dispensary;
			this.productCount = this.products.length;
		}
	}

	// filter sales
	sortSales(products): any {
		let filteredForSale = filter(products, (o) => {
			if (o.recSpecialPrices.length > 0 && o.recSpecialPrices[0] < o.Prices[0]) {
				let diff = o.Prices[0] - o.recSpecialPrices[0];
				let off = diff / o.Prices[0];
				o.discount = off.toFixed(2);
				o.discount = o.discount * 100;
				o.discount = `$${diff.toFixed(2)} (${o.discount.toFixed()}%)`;
				return o
			}
		});
		let sortedBySale = sortBy(filteredForSale, ['recSpecialPrices[0]']);
		this.saleItems = sortedBySale;
		return sortedBySale
	}

	// show all
	sortByAll() {
		let products = this.originalProducts;
		this.quickFilterActive(null);
		this.productCount = products.length;
		this.productsChunks = chunk(products, this.pageSize);
		this.products = this.productsChunks[0];			
		this.gatherQuickSorts(products);
	}

	sort(name) {
		let query = name.toLowerCase();
		if (query === 'sales') {
			this.quickFilterActive(name);
			this.products = this.saleItems;
			this.productCount = this.products.length;
		} else {
			let item = find(this.sortMap, { 'name' : name});
			this.quickFilterActive(name);
			this.products = item.items;
			this.productCount = this.products.length;
		}
	}
	
	distance(range) {
		let productsRange = filter(this.originalProducts, (item)=> {
			let foundLocal = find(this.dispensaryList, { 'value' : item.DispensaryID})
			if (foundLocal.local === range) {
				return item
			}
		});
		
		this.productCount = productsRange.length;
		this.productsChunks = chunk(productsRange, this.pageSize);
		this.products = this.productsChunks[0];	
		this.products = productsRange;	
		console.log('h88 productsRange', productsRange);	
		this.gatherQuickSorts(productsRange);		
	}
	
	// toggles active quick sort 
	quickFilterActive(name) { 
		this.sortMap.map((e) => {
			if(e.name === name) {
				e.active = !e.active;
			} else {
				e.active = false;
			}
			return e
		});			
	}
	
	removeSortChip(name){
		this.sortMap.map((e) => {
			if(e.name === name) {
				e.active = !e.active;
				return e
			}
		});		
	}

	removeUnusedProducts(products) { // remove select items from product list
		// let productsToRemove = ['kief', 'syringe', 'dabaratus', 'dripper', 'moonrock', 'cartridge', 'cart', 'rso', 'preroll', 'pre-roll'];
		let filteredProducts = filter(products, (o) => {
			let name = o.Name.toLowerCase();
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

	// fixAberrations(products) { // remove select items from product list
	// 	// let productsToRemove = ['kief', 'syringe', 'dabaratus', 'dripper', 'moonrock', 'cartridge', 'cart', 'rso', 'preroll', 'pre-roll'];
	// 	let fixProducts = filter(products, (o) => {
	// 		let name = o.Name.toLowerCase();
	// 		console.log('h88 o', o);
	// 
	// 	});
	// 	return filteredProducts
	// }

	getConcentrates() {
		this.providersService.getRequest().subscribe((data: Products) => {
			let sortedByPrice = sortBy(data, ['Prices[0]']);
			this.products = this.removeUnusedProducts(sortedByPrice);
			// this.products = this.fixAberrations(this.products);
			this.originalProducts = this.products;
			this.productCount = this.products.length;
			this.productsChunks = chunk(this.products, this.pageSize);
			this.products = this.productsChunks[0];			
			this.loading = false;
			console.log('h88 prod', this.products);
			this.gatherQuickSorts(this.originalProducts);
		});
	}

}
