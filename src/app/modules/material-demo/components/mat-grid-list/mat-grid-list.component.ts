import { Component, OnInit } from '@angular/core';


interface Tile {
  text: string;
  cols: number;
  rows: number;
  color: string;
}

interface SampleTile {
  header: string;
  footer: string;
}

@Component({
  selector: 'app-mat-grid-list',
  templateUrl: './mat-grid-list.component.html',
  styles: [
  ]
})
export class MatGridListComponent implements OnInit {

  gutterSize: string = '8px'
  rowHeight: string = "190px"

  tiles: Array<SampleTile> = new Array<SampleTile>(6).fill({ header: '', footer: ''}).map(
    (_: SampleTile, index: number) => {
      return {
        header: `List Tile Header ${index}`,
        footer: `List Tile Footer ${ index }`
      }
    }
  )
  gridTiles: Tile[] = []

  public createGridTiles(): void {
    this.gridTiles = [
      { text: 'One', cols: 2, rows: 1, color: 'gray' },
      { text: 'Two', cols: 2, rows: 1, color: 'orange' },
      { text: 'Three', cols: 3, rows: 2, color: 'yellow' },
      { text: 'Four', cols: 1, rows: 1, color: '#fbdcca' },
      { text: 'Four', cols: 1, rows: 1, color: 'lightgreen' },
      { text: 'Four', cols: 1, rows: 1, color: 'lightblue' },
    ]
  }

  constructor() { }

  ngOnInit(): void {
    this.createGridTiles()
  }

}
