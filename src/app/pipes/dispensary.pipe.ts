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
				return 'Cannabis Nation - Beaverton'
				break;
			case 'CAcMm4qtR9t29dzg6':
				return 'Nectar - Beaverton-Allen'
				break;
			case 'cynASLBsrjDueyH3A':
				return 'Nectar - Beaverton-Hall'
				break;
			case 'KaleafaBeaverton':
				return 'Kaleafa-Beaverton'
				break;
			case 'KaleafaHillsboro':
				return 'Kaleafa-Hillsboro'
				break;
			case '605b64fa3da35500d1dd9d05':
				return 'Broadway-Beaverton'
				break;
		
			default:
				return ''
				break;
		}
	}

}
