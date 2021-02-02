import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProvidersService } from '../providers.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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

	constructor(private httpClient: HttpClient, private providersService: ProvidersService) { }

	products: any;

	ngOnInit() {
		this.getConcentrates();
	}



	getConcentrates() {
		// this.providersService.getRequest().subscribe((response) => {
		// 	this.products = response.data.filteredProducts.products;
		// 		console.log('h88 res', this.products);
		// 	});
		// this.providersService.getRequest().subscribe((data: Products) => this.products = { ...data });
		this.providersService.getRequest().subscribe((data: Products) => {
			// console.log('h88 data', data.filteredProducts.products);
			console.log('h88 data', data.data.filteredProducts.products);
			this.products = data.data.filteredProducts.products;
		});
	}

}
