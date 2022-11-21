import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroupDirective,
  FormControl,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/**
 * @usageNotes
 * Custom ErrorStateMatcher that returns the invalid control when touched or dirty
 */
class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    formControl: FormControl,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const submitted: boolean | null = form && form.submitted;

    return !!(
      formControl &&
      formControl.invalid &&
      (formControl.touched || formControl.dirty || submitted)
    );
  }
}

@Component({
  selector: 'app-mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.css'],
})
export class MatInputComponent implements OnInit {
  public customErrorStateMatcher: CustomErrorStateMatcher =
    new CustomErrorStateMatcher();

  emailControl: FormControl<string | null> = new FormControl<string>('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() {}

  ngOnInit(): void {}
}
