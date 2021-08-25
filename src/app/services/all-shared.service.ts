import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AllSharedService {
	dispensaries = [];
	private subject = new Subject<any>();

	sortByDispensary(dispensaries) {
		this.dispensaries = dispensaries;
		this.subject.next(this.dispensaries);
	}

	getClickEvent(): Observable<any> {
		return this.subject.asObservable();
	}
}
