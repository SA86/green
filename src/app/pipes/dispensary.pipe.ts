import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'dispensary'
})
export class DispensaryPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		switch (value) {
			case 'acMFAfbvyQ9CKsrNy':
				return 'Cannabis Nation - Beaverton'
				break;
			case 'YbTHoLFPigH4scErj':
				return 'Nectar - Aloha'
				break;
				case '5f6bdb8157c27500f22d66ea':
				return 'Nectar - Regatta'
				break;
			case 'CAcMm4qtR9t29dzg6':
				return 'Nectar - Beaverton-Allen'
				break;
			case 'cynASLBsrjDueyH3A':
				return 'Nectar - Beaverton-Hall'
				break;
			case '4oiKwdDJgmPecXMek':
				return 'Nectar - Barbur'
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
			case '5e7b8dfe49f75e00bbdb7b9e':
				return 'Electric Lettuce - CedarHills'
				break;
			case '5f19ecdfa7db3b01086e24fa':
				return 'Electric Lettuce - Tigard'
				break;
			case '5e7b8808bf130d00a8f6bd30':
				return 'Electric Lettuce - Beaverton'
				break;
			case 'oJN2QYZJHAxvBDWrL':
				return 'La Mota - Beaverton'
				break;
			case 'OregonBudBeaverton':
				return 'Oregon Bud - Beaverton'
				break;
			case 319881:
				return 'Stone Age - Beaverton'
				break;
			case 'CDCMetzger':
				return 'CDC - Metzger'
				break;
			case '5e7b9f3bdbf9cc0b3d2e3ff2':
				return 'Cola Cova - Tigard'
				break;
			case 'ChaliceTigard':
				return 'Chalice - Tigard'
				break;
			case 'HXg4iybZrq6wRbZMb':
				return 'The Vth - Hillsboro'
				break;
			case 85676:
				return 'Green Goddess Remedies - SW.Portland'
				break;
			case 'AYYz8RrZ62Zqme9fv':
				return 'Parlour - E.Beaverton'
				break;
			case 'zBKaBM3hTpspDwMED':
				return 'Natural Remedies - Barbur'
				break;
			case 328152:
				return 'Brothers - Oswego'
				break;
			case 300136:
				return 'Speedy Janes - Hillsboro'
				break;
			case 143818:
				return 'Green Mart - Cedar Mills'
				break;
			case 301745:
				return 'Western Oregon - Cedar Mills'
				break;
			case 115818:
				return 'Growing Releaf - Beaverton'
				break;
			case 107819:
				return 'Green Planet - Beaverton'
				break;
			case 196138:
				return 'Green Planet - King City'
				break;
			case 319881:
				return 'Western Oregon - Hillsboro'
				break;
			case '6YskMw5YxzjN3AP3g':
				return 'Mr NiceGuy - Hillsboro'
				break;
		
			default:
				return ''
				break;
		}
	}

}
