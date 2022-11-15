import { Component, OnInit } from '@angular/core';
import { MatSlider } from '@angular/material/slider';

@Component({
  selector: 'app-mat-slider',
  templateUrl: './mat-slider.component.html',
  styleUrls: ['./mat-slider.component.css']
})
export class MatSliderComponent implements OnInit {

  value: number = 0;
  minValue: number = 0;
  maxValue: number = 100;
  disabled: boolean = false;
  inverted: boolean = false;
  showTicks: boolean = false;
  tickInterval: number = 1;
  vertical: boolean = false;
  sliderStep: number = 1;
  autoTicks: boolean = false;
  showThumbLabel: boolean = false;
  color: string = 'primary'

  materialColors: string[] = ['primary', 'accent', 'warn']

  public getSliderTickInterval(): number | string {
    if(this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval
    }
    return 0;
  }

  public formatLabel(value: number): number | string {
    if(value > 1000) {
      return Math.floor(value / 1000) + 'k'
    }
    return value 
  } 


  constructor() { }

  ngOnInit(): void {
  }

}
