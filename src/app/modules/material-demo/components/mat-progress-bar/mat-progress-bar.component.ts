import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-mat-progress-bar',
  templateUrl: './mat-progress-bar.component.html',
  styleUrls: ['./mat-progress-bar.component.css']
})
export class MatProgressBarComponent implements OnInit {

  materialThemes: ThemePalette[] = ['primary', 'accent', 'warn']
  progressModes: ProgressBarMode[] = ['determinate', 'buffer', 'indeterminate', 'query']
  colorTheme: ThemePalette;
  progressValue: number = 20;
  progressMode: ProgressBarMode = "determinate"
  bufferValue: number = 40

  constructor() { }

  ngOnInit(): void {
  }

}
