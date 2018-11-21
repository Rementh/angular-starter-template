import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent, DialogData } from 'src/app/components/dialog/dialog.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    private dialogData: DialogData = {
        message: 'Are you sure, you want to proceed on this?',
        action: () => alert('done')
    };

    constructor(public dialog: MatDialog) { }

    openDialog(): void {
        this.dialog.open(DialogComponent, {
            data: this.dialogData
        });
    }
}

