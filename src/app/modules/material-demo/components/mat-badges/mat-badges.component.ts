import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-badges',
  templateUrl: './mat-badges.component.html',
  styles: [
  ]
})
export class MatBadgesComponent implements OnInit {

  messages: number  = 2

  constructor() { }

  ngOnInit(): void {
  }

}
