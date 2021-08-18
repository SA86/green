import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
	selector: 'app-about-modal',
	templateUrl: './about-modal.component.html',
	styleUrls: ['./about-modal.component.scss']
})
export class AboutModalComponent implements OnInit {

	constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

	ngOnInit(): void {
	}

}
