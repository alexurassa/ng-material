import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styles: [
  ]
})
export class MatSelectComponent implements OnInit {

  public selectedValue: string = ''

  numbers: number[] = [1,2,3,4]

  constructor() { }

  ngOnInit(): void {
  }

}
