import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css']
})
export class MeetingFormComponent implements OnInit {

  	constructor(
		public dialogRef: MatDialogRef<MeetingFormComponent>,
		// @Inject(MAT_DIALOG_DATA) public data: DialogData
		) 
		{ }

  	ngOnInit(): void {
	}
	
	cancel(): void {
		this.dialogRef.close();
	}

}
