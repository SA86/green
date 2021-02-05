import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dispensary'
})
export class DispensaryPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		switch (value) {
			case 'oJN2QYZJHAxvBDWrL':
				return 'La Mota - Beaverton'
				break;
			case 'YbTHoLFPigH4scErj':
				return 'Nectar - Aloha'
				break;
				case '5f6bdb8157c27500f22d66ea':
				return 'Nectar - Regatta'
				break;
			case 'acMFAfbvyQ9CKsrNy':
				return 'Cannabis Nation - Beaverson'
				break;
			case 'CAcMm4qtR9t29dzg6':
				return 'Nectar - Beaverson-Allen'
				break;
			case 'cynASLBsrjDueyH3A':
				return 'Nectar - Beaverson-Hall'
				break;
		
			default:
				return ''
				break;
		}
	}

}
