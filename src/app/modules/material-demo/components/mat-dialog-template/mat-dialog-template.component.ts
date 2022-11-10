import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { User } from '../mat-dialog/mat-dialog.component';

@Component({
  selector: 'app-mat-dialog-template',
  templateUrl: './mat-dialog-template.component.html',
  styles: [
  ]
})
export class MatDialogTemplateComponent implements OnInit {


  public ngOnInit(): void {
    
  }

  public constructor(@Inject(MAT_DIALOG_DATA) public data: { user: User}) {

  }
}
