import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-mat-tooltip',
  templateUrl: './mat-tooltip.component.html',
  styleUrls: ['./mat-tooltip.component.css']
})
export class MatTooltipComponent implements OnInit {

  showDelay: number = 1000;
  hideDelay: number = 1000;
  tooltipPosition: TooltipPosition = "below"

  tooltipPositions: TooltipPosition[] = ['above', 'below', 'before', 'after', 'left', 'right']

  constructor() { }

  ngOnInit(): void {
  }

}
