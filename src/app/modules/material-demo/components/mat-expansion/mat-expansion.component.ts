import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-expansion',
  templateUrl: './mat-expansion.component.html',
  styles: [
  ]
})
export class MatExpansionComponent implements OnInit {


  public log(status: string): void {
    console.log(`The panel status is ${status}`)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
