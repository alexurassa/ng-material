import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mat-datepicker',
  templateUrl: './mat-datepicker.component.html',
  styleUrls: ['./mat-datepicker.component.css']
})
export class MatDatepickerComponent implements OnInit {

  minDate: Date = new Date()
  maxDate: Date = new Date(2022, 10, 20)

  groupOne: FormGroup = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date())
  })

  groupTwo: FormGroup = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date())
  })

  // dateFilter = (date: Date | null) => {
  //   const day: number = date.getDay()
  //   return day !== 0 && day !== 6
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
