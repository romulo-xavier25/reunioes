import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MeetingFormComponent } from '../meeting-form/meeting-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
	}

	addMeeting(): void {
		const dialogRef = this.dialog.open(MeetingFormComponent, {
		width: '500px',
		// data: {name: this.name, animal: this.animal}
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			// this.animal = result;
		  });
	}

}
