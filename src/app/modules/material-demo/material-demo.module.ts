import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { AngularMaterialModulesModule } from '@ng-material-modules/angular-material-modules.module';
import { TypographyComponent } from './components/typography/typography.component';
import { MaterialDemoRoutingModule } from './material-demo-routing.module';
import { MatButtonsComponent } from './components/mat-buttons/mat-buttons.component';




@NgModule({
  declarations: [
    MaterialDemoComponent,
    TypographyComponent,
    MatButtonsComponent
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
