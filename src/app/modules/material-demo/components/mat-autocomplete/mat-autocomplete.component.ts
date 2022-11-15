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
  filteredCustomers!: Observable<Customer[]>
  customerFormControl: FormControl = new FormControl()

  numberControl: FormControl = new FormControl()
  options: string[] = ['One', 'Two', 'Three']
  filteredOptions!: Observable<string[]>

  private filterNumber(value: string): string[] {
    return this.options.filter((option: string) => option.includes(this.normalizeValue(value)) )
  }

  public customerDisplayFn(customer: any): string {
    return customer.customerName || null 
  }

  private initCustomers(): void {
    this.customers = [
      { customerName: 'Omari'}, { customerName: 'Livingstone'}, { customerName: 'John'}
    ]
  }

  private updateOptionsObs(): void {
    this.filteredOptions = this.numberControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filterNumber(value || ''))
    )
  }

  private filterCustomer(value: string): Customer[] {
    const filteredValue: string = this.normalizeValue(value)
    return this.customers.filter(
      (customer: Customer) => customer.customerName.toLowerCase().includes(filteredValue || '')
    )
  }

  private updateCustomersObservable(): void {
    this.filteredCustomers = this.customerFormControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filterCustomer(value || ''))
    )
  }


  private normalizeValue(value: string): string {
    return value.trim().toLowerCase()
  }

  constructor() { }

  ngOnInit(): void {
    this.fruits = ['Banana', 'Orange', 'Overcado']
    this.initCustomers()
    this.updateOptionsObs()
    this.updateCustomersObservable()
  }

}



interface Customer {
  customerName: string 
}