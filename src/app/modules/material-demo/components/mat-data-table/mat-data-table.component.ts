import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort'
import { MatPaginator } from '@angular/material/paginator'


interface User {
  fullName: string;
  age: number;
  country: string;
}


const USERS: Array<User> = [
  { fullName: 'John Peterson', age: 15, country: 'Ireland' },
  { fullName: 'Alex Urassa', age: 13, country: 'Tanzania' },
  { fullName: 'Alice Linda', age: 27, country: 'Ethiopia' },
  { fullName: 'Mary Frankfurt', age: 41, country: 'Uganda' },
  { fullName: 'Doe Alsen', age: 10, country: 'Malawi' },
  { fullName: 'Livingstone Omari', age: 23, country: 'South Africa' },
]


@Component({
  selector: 'app-mat-data-table',
  templateUrl: './mat-data-table.component.html',
  styles: [
  ]
})
export class MatDataTableComponent implements OnInit, AfterViewInit {

  usersDataSource!: MatTableDataSource<User>;
  usersTableColumns: string[] = ['fullName', 'age', 'country']

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public logToConsole(row: User): void {
    console.table(row)
  }

  public applyFilter($event: any): void {
    const filterValue: string = $event.target.value
    this.usersDataSource.filter = filterValue.trim().toLowerCase()
  }

  constructor() { }

  public ngOnInit(): void {
    this.usersDataSource = new MatTableDataSource<User>(USERS)
  }

  public ngAfterViewInit(): void {
    this.usersDataSource.sort = this.sort 
    this.usersDataSource.paginator = this.paginator 
  }

}
