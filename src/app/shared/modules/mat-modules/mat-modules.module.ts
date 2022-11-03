import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from '.';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MatModulesModule { }
