import { Component, OnInit } from '@angular/core';
import { MatTabLink } from '@angular/material/tabs';
import { Observable, Observer } from 'rxjs';

interface AsyncTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-mat-tabs',
  templateUrl: './mat-tabs.component.html',
  styleUrls: ['./mat-tabs.component.css']
})
export class MatTabsComponent implements OnInit {

  links: string[] = ['home', 'about', 'services', 'activities']
  activeLink: string = 'home';

  asyncTabs!: Observable<AsyncTab[]>;

  constructor() { 
    this.asyncTabs = new Observable<AsyncTab[]>((observer: Observer<AsyncTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'First', content: 'Content 1'},
          { label: 'Second', content: 'Content 2'},
          { label: 'Last', content: 'Content 3'},
        ])
      }, 3000)
    })
  }

  ngOnInit(): void {
  }

}
