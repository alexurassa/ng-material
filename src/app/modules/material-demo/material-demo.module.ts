import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { AngularMaterialModulesModule } from '@ng-material-modules/angular-material-modules.module';
import { TypographyComponent } from './components/typography/typography.component';
import { MaterialDemoRoutingModule } from './material-demo-routing.module';
import { MatButtonsComponent } from './components/mat-buttons/mat-buttons.component';
import { MatButtonToggleComponent } from './components/mat-button-toggle/mat-button-toggle.component';
import { MatBadgesComponent } from './components/mat-badges/mat-badges.component';
import { MatProgressSpinnerComponent } from './components/mat-progress-spinner/mat-progress-spinner.component';
import { MatToolbarComponent } from './components/mat-toolbar/mat-toolbar.component';




@NgModule({
  declarations: [
    MaterialDemoComponent,
    TypographyComponent,
    MatButtonsComponent,
    MatButtonToggleComponent,
    MatBadgesComponent,
    MatProgressSpinnerComponent,
    MatToolbarComponent
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
