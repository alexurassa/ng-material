import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'

@Component({
  selector: 'app-mat-autocomplete',
  templateUrl: './mat-autocomplete.component.html',
  styles: [
  ]
})
export class MatAutocompleteComponent implements OnInit {

  fruits!: Array<string>
  customers!: Array<Customer>
  filteredCustomers!: Observable<Array<Customer>>
  customerName: FormControl = new FormControl()

  public displayFn(customer: any): string {
    return customer.name || undefined 
  }

  public initCustomers(): void {
    this.customers = [
      { name: 'Omari'}, { name: 'Livingstone'}, { name: 'John'}
    ]
  }

  private _filterCustomer(value: string): Customer[] {
    const filteredValue: string = value.toLowerCase()
    return this.customers.filter(
      (customer: Customer) => customer.name.toLowerCase().includes(filteredValue)
    )
  }

  constructor() { }

  ngOnInit(): void {
    this.fruits = ['Banana', 'Orange', 'Overcado']
    this.initCustomers()

    this.filteredCustomers = this.customerName.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filterCustomer(value))
    )
  }

}



interface Customer {
  name: string 
}