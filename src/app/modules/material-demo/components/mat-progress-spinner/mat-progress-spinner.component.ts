import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-mat-progress-spinner',
  templateUrl: './mat-progress-spinner.component.html',
  styles: [
  ]
})
export class MatProgressSpinnerComponent implements OnInit {

  progressValue: number = 10;
  value: number = 5;
  progressMode: ProgressSpinnerMode = 'determinate'
  colorTheme: ThemePalette = 'warn'

  updateProgressValue(): void {
    setTimeout(() => {
      this.progressValue = this.progressValue + 5
    }, 1000)
  }

  materialColors: string[] = ['accent', 'primary', 'warn']
  color: string = 'primary'

  constructor() { }

  ngOnInit(): void {
  }

}
