import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogTemplateComponent } from '../mat-dialog-template/mat-dialog-template.component';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styles: [
  ]
})
export class MatDialogComponent implements OnInit {

  public user: User | undefined;

  public openDialog(): void {
    const dialogRef = this.matDialog.open(
      MatDialogTemplateComponent, { 
        data: { user: this.user }, 
        disableClose: true, 
        hasBackdrop: true, 
        height: "500px", width: "700px",
        role: 'alertdialog',
      }
    )

    dialogRef.afterClosed().subscribe(result => console.log(`the dialog close result: ${ result }`))
    dialogRef.backdropClick().subscribe(($event: PointerEvent | MouseEvent) => {
      dialogRef.close()
      $event.type == 'click' ? this.log('backdrop was closed with click') : '';
    })
  }

  public log(message: string): void {
    console.log(message)
  }

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.initUser()
  }

  private initUser(): void {
    this.user = { name: 'Alex', age: 19, city: 'Kilimanjaro', country: 'Tanzania'}
  }

}

export interface User {
  name: string;
  age: number;
  city: string;
  country: string;
}
