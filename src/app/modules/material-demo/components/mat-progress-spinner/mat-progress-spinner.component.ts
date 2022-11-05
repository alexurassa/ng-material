import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-progress-spinner',
  templateUrl: './mat-progress-spinner.component.html',
  styles: [
  ]
})
export class MatProgressSpinnerComponent implements OnInit {

  progressValue: number = 10;

  updateProgressValue(): void {
    setTimeout(() => {
      this.progressValue = this.progressValue + 5
    }, 1000)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
