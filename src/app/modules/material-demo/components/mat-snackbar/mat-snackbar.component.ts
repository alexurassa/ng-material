import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mat-snackbar',
  templateUrl: './mat-snackbar.component.html',
  styles: [
  ]
})
export class MatSnackbarComponent implements OnInit {

  public openSnackBar(message: string, action: string): void {
    const snackbarRef: MatSnackBarRef<any> = this.snackBar.open(
      message, action, { duration: 2000 })

    snackbarRef.onAction().subscribe(() => {
      console.log("SnackBar was triggered")
    })

    snackbarRef.afterDismissed().subscribe(() => {
      console.log("snackBar was dismissed")
    })

    snackbarRef.afterOpened().subscribe(_ => console.log("snackBar was opened"))
  }

  public openCustomSnackBarComponent(): void {
    this.snackBar.openFromComponent(CustomSnackBarComponent, { duration: 2000 })
  }

  ngOnInit(): void {
  }

  constructor(private snackBar: MatSnackBar) { }
}


@Component({
  selector: 'app-custom-snackbar',
  template: `
  <span class="mat-headline">custom component</span>
  `
})
export class CustomSnackBarComponent {

}
