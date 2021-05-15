import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'unit'
})
export class UnitPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		switch (value) {
			case 'PERCENTAGE':
				return '%'
				break;
			case 'percent':
				return '%'
				break;
			case 'MILLIGRAMS':
				return 'mg'
				break;
			case 'mg':
				return 'mg'
				break;
		
			default:
				console.log('h88 value pipe', value);
				return ''
				break;
		}
	}

}
