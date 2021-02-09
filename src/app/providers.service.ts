import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ProvidersService {

	constructor(private httpClient: HttpClient) { }

	getRequest() {
		return this.httpClient.get('http://api.endo86.com:8051/green');
	}
}
