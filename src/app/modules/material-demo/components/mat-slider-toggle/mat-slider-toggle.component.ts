import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-mat-slider-toggle',
  templateUrl: './mat-slider-toggle.component.html',
  styleUrls: ['./mat-slider-toggle.component.css']
})
export class MatSliderToggleComponent implements OnInit {

  meterialThemes: ThemePalette[] = ['primary', 'accent', 'warn']
  slideTheme: ThemePalette;
  checked: boolean = false;
  disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
