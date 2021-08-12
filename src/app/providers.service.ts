import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProvidersService {

	constructor(private http: HttpClient) { }

	// getRequest() {
	// 	return this.http.get('http://api.endo86.com:8051/green');
	// }

	getRequestA() {
		return this.http.get('http://api.endo86.com:8051/greenA');
	}
	getRequestB() {
		return this.http.get('http://api.endo86.com:8051/greenB');
	}
	getRequestC() {
		return this.http.get('http://api.endo86.com:8051/greenC');
	}

	// getRequest() {
	// 	let greenA = this.http.get('http://api.endo86.com:8051/greenA');
	// 	let greenB = this.http.get('http://api.endo86.com:8051/greenB');
	// 	let greenC = this.http.get('http://api.endo86.com:8051/greenC');
	// 	forkJoin([greenA, greenB, greenC]).subscribe(results => {
	// 		console.log('h88 fk', results);
	// 		return results
	// 	});
	// }
	
}
