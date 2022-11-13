import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mat-expansion',
  templateUrl: './mat-expansion.component.html',
  styleUrls: ['./mat-expansion.component.css']
})
export class MatExpansionComponent implements OnInit {

  items: Array<number> = [1, 2, 3, 4, 5, 6]
  public log(status: string): void {
    console.log(`The panel status is ${status}`)
  }

  constructor() { }

  ngOnInit(): void {
  }
}
