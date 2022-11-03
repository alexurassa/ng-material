import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-button-toggle',
  templateUrl: './mat-button-toggle.component.html',
  styles: [
  ]
})
export class MatButtonToggleComponent implements OnInit {

  fruits: Array<string> = [
    "Orange", "Mango", "Apple", "Pawpaw"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
