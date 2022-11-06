import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-datepicker',
  templateUrl: './mat-datepicker.component.html',
  styles: [
  ]
})
export class MatDatepickerComponent implements OnInit {

  minDate: Date = new Date()
  maxDate: Date = new Date(2022, 10, 20)

  // dateFilter = (date: Date | null) => {
  //   const day: number = date.getDay()
  //   return day !== 0 && day !== 6
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
