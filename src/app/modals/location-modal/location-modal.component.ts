import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig,  MAT_DIALOG_DATA } from  '@angular/material/dialog';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllSharedService } from '../../services/all-shared.service';
import { filter } from 'lodash';
@Component({
	selector: 'app-location-modal',
	templateUrl: './location-modal.component.html',
	styleUrls: ['./location-modal.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LocationModalComponent implements OnInit {
	dispensary = new FormControl();
	dispensaryList:object = [];
	dispensaryListFull = [];
	constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, private allShared: AllSharedService) { }

	ngOnInit(): void {
		this.dispensaryList = this.dialogData[0];
		this.dispensaryListFull = this.dialogData[0];
		if(this.dialogData[1] && this.dialogData[1] !== undefined && this.dialogData[1].length > 0) {
			this.dispensary = new FormControl(this.dialogData[1]);
		}
	}
	
	filterLocation(event) {
		let filtered = filter(this.dispensaryListFull, (item) => {
			let name = item.name.toLowerCase();
			let query = event.toLowerCase();
				if(name.includes(query)) {
					return item
				}			
		});
		this.dispensaryList = filtered;
	}

	sortByDispensary(event):void {
		this.allShared.sortByDispensary(this.dispensary.value);
	}

}
