import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
	selector: 'app-dispensary-modal',
	templateUrl: './dispensary-modal.component.html',
	styleUrls: ['./dispensary-modal.component.scss']
})
export class DispensaryModalComponent implements OnInit {

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit(): void {
	}

}
