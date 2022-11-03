import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { AngularMaterialModulesModule } from '@ng-material-modules/angular-material-modules.module';
import { TypographyComponent } from './components/typography/typography.component';
import { MaterialDemoRoutingModule } from './material-demo-routing.module';




@NgModule({
  declarations: [
    MaterialDemoComponent,
    TypographyComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModulesModule,
    MaterialDemoRoutingModule
  ],
  exports: [
    MaterialDemoComponent
  ]
})
export class MaterialDemoModule { }
