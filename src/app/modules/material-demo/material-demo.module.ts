import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { AngularMaterialModulesModule } from '@ng-material-modules/angular-material-modules.module';




@NgModule({
  declarations: [
    MaterialDemoComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModulesModule
  ],
  exports: [
    MaterialDemoComponent
  ]
})
export class MaterialDemoModule { }
