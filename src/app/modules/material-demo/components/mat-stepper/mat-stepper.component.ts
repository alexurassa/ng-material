import { Component, OnInit } from '@angular/core';


interface User {
  username: string;
  city: string;
}


const usersList: Array<User> = [
  { username: 'omari', city: 'one'},
  { username: 'jj', city: 'my city'},
  { username: 'rashid', city: 'city two'},
  { username: 'liv22', city: '920 city'},
  { username: 'my username', city: 'new city'}
]

@Component({
  selector: 'app-mat-stepper',
  templateUrl: './mat-stepper.component.html',
  styles: [
  ]
})
export class MatStepperComponent implements OnInit {

  public users: User[] = usersList
  
  constructor() { }

  ngOnInit(): void {
  }

}
