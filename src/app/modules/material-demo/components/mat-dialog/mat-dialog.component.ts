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

  user!: User;

  public openDialog(): void {
    const dialogRef = this.matDialog.open(
      MatDialogTemplateComponent, { data: { user: this.user }})

    dialogRef.afterClosed().subscribe(
      result => console.log(`Dialog result is: ${result}`))
  }

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.initUser()
  }

  private initUser(): void {
    this.user = { name: 'Alex', age: 19, city: 'Kilimanjaro', country: 'Tanzania'}
  }

}

interface User {
  name: string;
  age: number;
  city: string;
  country: string;
}
