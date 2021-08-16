import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
// import { AppState } from '../../all/all.component';
import { ProductFilters } from '../..//models/product-filters/product-filters.model';


export interface AppState {
	readonly productFilters: ProductFilters;
}


@Component({
	selector: 'app-about-modal',
	templateUrl: './about-modal.component.html',
	styleUrls: ['./about-modal.component.scss']
})
export class AboutModalComponent implements OnInit {
	productFilters: Observable<ProductFilters>;

	constructor(private store: Store<AppState>) {
		this.productFilters = this.store.select(state => state.productFilters);
	}

	ngOnInit(): void {
		this.productFilters.subscribe((res)=>{
				console.log('h88 res', res);
		
		}, error => {
			console.log('h88 err', error);
		});

		// this.store.select('todos').subscribe(response => {
		// 
		// 	this.todos = response.todoList;
		// 
		// 
		// }, error => {
		// 	console.log(error);
		// });

	}

}
