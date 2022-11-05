import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styles: [],
})
export class MatCardComponent implements OnInit {
  text!: string;

  constructor() {}

  ngOnInit(): void {
    this.text =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nemo dolores est neque doloribus ipsam facere ut praesentium consectetur aspernatur officia quia excepturi ratione assumenda ex illum, numquam iure beatae!';
  }
}
