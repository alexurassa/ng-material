import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-menu',
  templateUrl: './mat-menu.component.html',
  styles: [
  ]
})
export class MatMenuComponent implements OnInit {

  friend1: Object = { name: 'Some Name', hobby: 'Football'}
  friend2: Object = { name: 'New name', hobby: 'Basketball'}

  constructor() { }

  ngOnInit(): void {
  }

}
