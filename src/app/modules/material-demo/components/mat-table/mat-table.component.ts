import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'
import { MatSort, Sort } from '@angular/material/sort'
import { LiveAnnouncer } from '@angular/cdk/a11y'


interface Customer {
  customerName: string;
  city: string;
}


const CUSTOMERS: Customer[] = [
  { customerName: 'omari', city: 'Washington DC' },
  { customerName: 'John', city: 'Washington DC' },
  { customerName: 'Doe', city: 'Washington DC' },
  { customerName: 'Perterson', city: 'North Ireland' },
  { customerName: 'Alex', city: 'Kilimanjaro' },
  { customerName: 'Jonathan', city: 'Kenya' },
  { customerName: 'Linda', city: 'Arusha' },
]

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css']
})
export class MatTableComponent implements OnInit, AfterViewInit {


  customersDataSource!: MatTableDataSource<Customer>;
  fields: Array<string> = ['customerName', 'city']
  clickedRows: Set<Customer> = new Set<Customer>()
  @ViewChild(MatPaginator) public customersPaginator!: MatPaginator
  @ViewChild(MatSort) public matSort!: MatSort 


  public annouceMatSortChange(sortState: Sort): void {
    if(sortState.direction) {
      console.log(`Sorted ${sortState.direction}`)
    }else {
      console.info("The sort has cleared")
    }

    console.info(`Sort has been done on ${sortState.active} column`)
  }


  public filterTable($event: Event): void {
    const filterValue: string = ($event.target as HTMLInputElement).value
    this.customersDataSource.filter = filterValue.trim().toLowerCase()
  }


  public ngOnInit(): void {
    this.customersDataSource = new MatTableDataSource<Customer>(CUSTOMERS)
  }

  public ngAfterViewInit(): void {
    this.customersDataSource.paginator = this.customersPaginator
    this.customersDataSource.sort = this.matSort 
  }

  public constructor(private _liveAnnouncer: LiveAnnouncer) {}

}
