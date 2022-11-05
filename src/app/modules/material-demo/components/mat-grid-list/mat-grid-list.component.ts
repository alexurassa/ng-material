import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-grid-list',
  templateUrl: './mat-grid-list.component.html',
  styles: [
  ]
})
export class MatGridListComponent implements OnInit {

  gutterSize: string = '8px'
  rowHeight: string = "190px"

  tiles!: Array<number>;

  constructor() { }

  ngOnInit(): void {
    this.tiles = [1, 2, 3, 4, 5, 6]
  }

}
