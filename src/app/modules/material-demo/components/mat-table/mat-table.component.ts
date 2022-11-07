import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator'


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

  constructor() { }

  ngOnInit(): void {
    this.customersDataSource = new MatTableDataSource<Customer>(CUSTOMERS)
  }

  public ngAfterViewInit(): void {
    this.customersDataSource.paginator = this.customersPaginator
  }

}
