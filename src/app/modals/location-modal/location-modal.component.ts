import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig,  MAT_DIALOG_DATA } from  '@angular/material/dialog';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-location-modal',
	templateUrl: './location-modal.component.html',
	styleUrls: ['./location-modal.component.scss']
})
export class LocationModalComponent implements OnInit {
	dispensary = new FormControl();
	constructor(@Inject(MAT_DIALOG_DATA) public dispensaryList: any) { }

	ngOnInit(): void {
	}

}
