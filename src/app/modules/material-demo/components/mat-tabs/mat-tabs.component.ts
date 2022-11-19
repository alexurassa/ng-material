import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatTabLink } from '@angular/material/tabs';
import { Observable, Observer } from 'rxjs';

interface AsyncTab {
  label: string;
  content: string;
}

interface BasicTabItem {
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
  materialThemes: ThemePalette[] = ['primary', 'accent', 'warn']

  asyncTabs!: Observable<AsyncTab[]>;

  tabItems: BasicTabItem[] = [
    {label: 'First', content: 'Content - 1'},
    {label: 'Second', content: 'Content - 2'},
    {label: 'Third', content: 'Content - 3'},
  ]

  lotsOfTabs: Array<BasicTabItem> = new Array(25).fill(0).map(
    (item: BasicTabItem, index) => {
      return { label: `Tab ${index}`, content: `Content ${index}`}
    })

  tabs: string[] = ['First', 'Second', 'Third']
  activeTabIndex: FormControl = new FormControl<number>(0)

  public addNewTab(addWithActiveStatus: boolean): void {
    // add first 
    this.tabs.push("New tab")

    // make selected if active checkbox is clicked
    if(addWithActiveStatus) {
      this.activeTabIndex.setValue(this.tabs.length -1)
    }
  }

  public removeTab(index: number): void {
    this.tabs.splice(index, 1)
  }

  constructor() { 
  }


  ngOnInit(): void {
    this.asyncTabs = new Observable<AsyncTab[]>((observer: Observer<AsyncTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'First', content: 'Content 1'},
          { label: 'Second', content: 'Content 2'},
          { label: 'Last', content: 'Content 3'},
        ])
      }, 2000)
    })
  }

}
