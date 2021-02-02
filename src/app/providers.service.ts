import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private httpClient: HttpClient) { }
	
	getRequest() {
		return this.httpClient.get('https://v3.dutchie.com/graphql?operationName=FilteredProducts&variables=%7B%22productsFilter%22%3A%7B%22dispensaryId%22%3A%22acMFAfbvyQ9CKsrNy%22%2C%22pricingType%22%3A%22rec%22%2C%22strainTypes%22%3A%5B%5D%2C%22subcategories%22%3A%5B%5D%2C%22Status%22%3A%22Active%22%2C%22removeProductsBelowOptionThresholds%22%3Atrue%2C%22types%22%3A%5B%22Concentrate%22%5D%2C%22useCache%22%3Afalse%2C%22sortDirection%22%3A-1%2C%22sortBy%22%3A%22price%22%2C%22bypassOnlineThresholds%22%3Afalse%2C%22isKioskMenu%22%3Afalse%7D%2C%22page%22%3A0%2C%22perPage%22%3A100%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%226d0da47985af9f8de78435e69a87e2e363eea94d58bb4324b0bedc12f8fb8ab4%22%7D%7D');
	}
}
