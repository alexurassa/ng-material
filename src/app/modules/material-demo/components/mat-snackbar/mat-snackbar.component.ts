import { Component, OnInit, Inject, ViewChild, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA, SimpleSnackBar, TextOnlySnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mat-snackbar',
  templateUrl: './mat-snackbar.component.html',
  styles: [
  ]
})
export class MatSnackbarComponent implements OnInit {

  horizontalOptions: string[] = ['start', 'end', 'center', 'left', 'right']
  verticalOptions: string[]  = ['bottom', 'top']
  yPosition: FormControl = new FormControl<string>('top');
  xPosition: FormControl = new FormControl<string>('right');
  snackbarDuration: FormControl = new FormControl<number>(1000)

  @ViewChild("snackbarTemplate") public template!: TemplateRef<any>
  simpleSnackBar!: SimpleSnackBar

  public openSnackbar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: this.snackbarDuration.value,
      horizontalPosition: this.xPosition.value,
      verticalPosition: this.yPosition.value 
    })

  }

  public openFromTemplate(): void {
    this.snackBar.openFromTemplate(this.template, { 
      duration: this.snackbarDuration.value,
      horizontalPosition: this.xPosition.value,
      verticalPosition: this.yPosition.value 
    })
  }

  public openSimpleSnackbar(message: string, action: string): void {
    this.simpleSnackBar.hasAction 
    this.simpleSnackBar.data = {message: message, action: action}
  }

  public openSnackBar(message: string, action: string): void {
    const snackbarRef: MatSnackBarRef<TextOnlySnackBar> = this.snackBar.open(
      message, action, { 
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'})

    snackbarRef.onAction().subscribe(() => {
      console.log("SnackBar was triggered")
    })

    snackbarRef.afterDismissed().subscribe(() => {
      console.log("snackBar was dismissed")
    })

    snackbarRef.afterOpened().subscribe(_ => console.log("snackBar was opened"))
  }

  public openCustomSnackBarComponent(): void {
    this.snackBar.openFromComponent(CustomSnackBarComponent, 
      { duration: 2000, data: { username: 'Peterson'} })
  }

  ngOnInit(): void {
  }

  constructor(private snackBar: MatSnackBar) { }
}


@Component({
  selector: 'app-custom-snackbar',
  template: `
  <span class="mat-body-2">Hi {{ data.username ? data.username + ', This is' : ',' }} custom component</span>
  `
})
export class CustomSnackBarComponent {


  public constructor(@Inject(MAT_SNACK_BAR_DATA) public data: { username: string | undefined }) {}
}
