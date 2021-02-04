import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProvidersService } from '../providers.service';
import { Observable, throwError } from 'rxjs';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, retry } from 'rxjs/operators';
import { find, pull, filter, times, constant, debounce, set, get, keyBy, reduce, cloneDeep, sortedUniq, sortBy, includes } from 'lodash';

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

	dispensary = new FormControl();
	// { 'name': 'dat', 'value':'dat' }
	dispensaryList: any[] = [
		{ 'name': 'Cannabis Nation-Beaverton', 'value':'acMFAfbvyQ9CKsrNy' }, { 'name': 'Nectar-Aloha', 'value':'YbTHoLFPigH4scErj' }, { 'name': 'Nectar-Regatta', 'value':'5f6bdb8157c27500f22d66ea' }, { 'name': 'LaMota-Beaverton', 'value':'oJN2QYZJHAxvBDWrL' }
	];
	formSearch: FormGroup = new FormGroup({});
	form = fb.group({
		query: ['', [Validators.required]],
	});
		

	constructor(private httpClient: HttpClient, private providersService: ProvidersService, private fb: FormBuilder) { }
	
	originalProducts: any;
	products: any;

	ngOnInit() {
		this.getConcentrates();
	}


	doSearch() {
		console.log(this.search);
		let query = this.search;
		let searched = filter(this.originalProducts, function(o){
			if(includes(o.Name, query)){
				console.log('h88', o.Name, query);
				return o;
			}			
		});
		console.log('h88 searched', searched);
		this.products = searched;
	}

	sortByDispensary(o) {
		let dispensary = filter(this.originalProducts, ['DispensaryID', o.value[0]]);
		console.log('h88 oooo', o.value[0], dispensary);
		this.products = dispensary;
	}

	// show sales
	sortBySale() {
		let filteredForSale = filter(this.products, function(o){
			if(o.recSpecialPrices.length > 0) {
				console.log('h88 diff', o.recSpecialPrices[0], o.Prices[0]);
				let diff = o.Prices[0] - o.recSpecialPrices[0];
				let off = diff / o.Prices[0];
				o.discount = off.toFixed(2);
				console.log('h88 oo', o);
				return o
			}
		});
		let sortedBySale = sortBy(filteredForSale, ['recSpecialPrices[0]']);
		this.products = sortedBySale;
	}

	// show all
	sortByAll() {
		this.products = this.originalProducts;
	}

	getConcentrates() {
		this.providersService.getRequest().subscribe((data: Products) => {
			console.log('h88 data', data);
			let sortedByPrice = sortBy(data, ['Prices[0]']);
			this.products = sortedByPrice;
			this.originalProducts = sortedByPrice;
		});
	}

}
