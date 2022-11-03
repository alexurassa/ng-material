import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'



const materialModules: Array<any> = [
  MatButtonModule
]


@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class AngularMaterialModulesModule { }
