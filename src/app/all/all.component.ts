import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProvidersService } from '../providers.service';
import { Observable, throwError } from 'rxjs';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material';
import { catchError, retry } from 'rxjs/operators';
import { find, pull, filter, times, constant, debounce, set, get, keyBy, reduce, cloneDeep, sortedUniq, sortBy, includes, chunk } from 'lodash';

interface Products {
	products: any;
	data: any;
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
	pageSize: any = 125;
	pageSizeOptions: Object = [5, 10, 25, 100, 125, 200, 500, 1000];
	currentPage = 0;
	originalProducts: any;
	products: any;
	productsChunks: any;
	productCount: number;
	
	dispensaryList: any[] = [
		{ 'name': 'Cannabis Nation-Beaverton', 'value': 'acMFAfbvyQ9CKsrNy' },
		{ 'name': 'Nectar-Aloha', 'value': 'YbTHoLFPigH4scErj' },
		{ 'name': 'Nectar-Beaverton-Allen', 'value': 'CAcMm4qtR9t29dzg6' },
		{ 'name': 'Nectar-Beaverton-Hall', 'value': 'cynASLBsrjDueyH3A' },
		{ 'name': 'Nectar-Regatta', 'value': '5f6bdb8157c27500f22d66ea' },
		{ 'name': 'Nectar-Barbur', 'value': '4oiKwdDJgmPecXMek' },
		{ 'name': 'Kaleafa-Beaverton', 'value': 'KaleafaBeaverton' },
		{ 'name': 'Kaleafa-Hillsboro', 'value': 'KaleafaHillsboro' },
		{ 'name': 'Broadway-Beaverton', 'value': '605b64fa3da35500d1dd9d05' },
		{ 'name': 'Speedy Janes-Hillsboro', 'value': 300136 },
		{ 'name': 'Electric Lettuce-CedarHills', 'value': '5e7b8dfe49f75e00bbdb7b9e' },
		{ 'name': 'Green Mart-CedarHills', 'value': 143818 },
		{ 'name': 'Western Oregon-CedarHills', 'value': 301745 },
		{ 'name': 'LaMota-Beaverton', 'value': 'oJN2QYZJHAxvBDWrL' },
		{ 'name': 'Oregon Bud Comp-Beaverton', 'value': 'OregonBudBeaverton' },
		{ 'name': 'CDC-Metzger', 'value': 'CDCMetzger' },
		{ 'name': 'Cola Cove-Tigard', 'value': '5e7b9f3bdbf9cc0b3d2e3ff2' },
		{ 'name': 'Chalice-Tigard', 'value': 'ChaliceTigard' },
		{ 'name': 'The Vth-Hillsboro', 'value': 'HXg4iybZrq6wRbZMb' },
		{ 'name': 'Green Goddess-SW.PDX', 'value': 85676 },
		{ 'name': 'Parlour-E.Beaverton', 'value': 'AYYz8RrZ62Zqme9fv' },
		{ 'name': 'Natural Remedies-Barbur', 'value': 'zBKaBM3hTpspDwMED' },
		{ 'name': 'Brothers-Oswego', 'value': 328152 },
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
		}
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
		}
	}

	// show sales
	sortBySale() {
		this.products = this.originalProducts;
		let filteredForSale = filter(this.products, (o) => {
			if (o.recSpecialPrices.length > 0 && o.recSpecialPrices[0] < o.Prices[0]) {
				console.log('h88 o.o.recSpecialPrices', o.recSpecialPrices, o.Prices[0]);
				let diff = o.Prices[0] - o.recSpecialPrices[0];
				let off = diff / o.Prices[0];
				o.discount = off.toFixed(2);
				o.discount = o.discount * 100;
				o.discount = `$${diff.toFixed(2)} (${o.discount.toFixed()}%)`;
				return o
			}
		});
		let sortedBySale = sortBy(filteredForSale, ['recSpecialPrices[0]']);
		this.products = sortedBySale;
	}

	// show all
	sortByAll() {
		this.products = this.productsChunks[0];
	}

	sort(name) {
		let query = name.toLowerCase();
		let searched = filter(this.originalProducts, (o) => {
			let name = o.Name.toLowerCase();
			if (name.includes(query)) {
				return o;
			}
		});
		this.products = searched;
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
			this.productCount = this.products.length
			this.productsChunks = chunk(this.products, this.pageSize);
			this.products = this.productsChunks[0];			
			console.log('h88 prod', this.products);
		});
	}

}
