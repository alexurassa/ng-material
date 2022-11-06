import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styles: [
  ]
})
export class MatSelectComponent implements OnInit {

  public selectedValue: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
