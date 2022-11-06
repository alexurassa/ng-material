import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scrolling',
  templateUrl: './virtual-scrolling.component.html',
  styles: [
  ]
})
export class VirtualScrollingComponent implements OnInit {

  public numbers: number[] = [1, 2,3, 4, 5, 6]

  constructor() {
    // this.populateNumbers()
   }

   public populateNumbers(): void {
    for(let num = 1; num <= 500; num++) {
      this.numbers.push(num)
    } 
   }

  ngOnInit(): void {
  }

}
