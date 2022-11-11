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
  selectedDate!: Date;
  startDate: Date = new Date(2022, 8, 14)

  groupOne: FormGroup = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date())
  })

  groupTwo: FormGroup = new FormGroup({
    start: new FormControl(new Date()),
    end: new FormControl(new Date())
  })

  range: FormGroup = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null)
  })

  dateFilter = (dateInput: Date | null): boolean => {
    const day = dateInput?.getDay()
    return day !== 0 && day !== 6
  }

  constructor() { }

  ngOnInit(): void {
  }

}
