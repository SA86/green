import { ProductFilters } from './models/product-filters/product-filters.model';
import { Action } from '@ngrx/store';

// export const PRODUCT_COUNT = 'PRODUCT_COUNT';

export function productFilterReducer(state: ProductFilters[], action) {
	switch (action.type) {
		case 'PRODUCT_COUNT':
      console.log('h88 action', action);
      console.log('h88 reduce', state );
			return [...state, action.payload];
		default:
      console.log('h88 action', action);
      console.log('h88 reduce 2', state );
			return state;
	}
} 
