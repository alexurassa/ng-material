import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from "@angular/material/button-toggle"




const materialModules: Array<any> = [
  MatButtonModule,
  MatButtonToggleModule
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
