import { Component, OnInit } from '@angular/core';

interface SidenavMode {
  name: string;
  explanation: string;
}

@Component({
  selector: 'app-mat-sidenav',
  templateUrl: './mat-sidenav.component.html',
  styles: [
  ]
})
export class MatSidenavComponent implements OnInit {

  opened: boolean = false;

  sidenavModes!: Array<SidenavMode>

  /*
  @usageNotes
  Logs the status of the sidenav
  @param { status } string
  @ public 
  @ returns { void }

   */
  public log(status: string): void {
    console.log(`The status of the sidenav is: ${status}`)
  }

  constructor() { }

  ngOnInit(): void {
    this.sidenavModes = [
      {name: 'over', explanation: 'The default mode that makes the sidenav to be OnTop of the body contents'},
      { name: 'push', explanation: 'pushes the main content with an overlay on top'},
      { name: 'side', explanation: 'Makes the sidenav to come side by side with the main content'}
    ]
  }

}
