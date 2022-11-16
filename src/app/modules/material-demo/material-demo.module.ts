import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { AngularMaterialModulesModule } from '@ng-material-modules/angular-material-modules.module';
import { TypographyComponent } from './components/typography/typography.component';
import { MaterialDemoRoutingModule } from './material-demo-routing.module';
import { MatButtonsComponent } from './components/mat-buttons/mat-buttons.component';
import { MatButtonToggleComponent } from './components/mat-button-toggle/mat-button-toggle.component';
import { MatBadgesComponent } from './components/mat-badges/mat-badges.component';
import { MatProgressSpinnerComponent } from './components/mat-progress-spinner/mat-progress-spinner.component';
import { MatToolbarComponent } from './components/mat-toolbar/mat-toolbar.component';
import { MatSidenavComponent } from './components/mat-sidenav/mat-sidenav.component';
import { MatMenuComponent } from './components/mat-menu/mat-menu.component';
import { MatListComponent } from './components/mat-list/mat-list.component';
import { MatGridListComponent } from './components/mat-grid-list/mat-grid-list.component';
import { MatExpansionComponent } from './components/mat-expansion/mat-expansion.component';
import { MatCardComponent } from './components/mat-card/mat-card.component';
import { MatStepperComponent } from './components/mat-stepper/mat-stepper.component';
import { MatInputComponent } from './components/mat-input/mat-input.component';
import { MatSelectComponent } from './components/mat-select/mat-select.component';
import { MatAutocompleteComponent } from './components/mat-autocomplete/mat-autocomplete.component';
import { MatCheckboxRadioComponent } from './components/mat-checkbox-radio/mat-checkbox-radio.component';
import { MatDatepickerComponent } from './components/mat-datepicker/mat-datepicker.component';
import { MatTooltipComponent } from './components/mat-tooltip/mat-tooltip.component';
import { CustomSnackBarComponent, MatSnackbarComponent } from './components/mat-snackbar/mat-snackbar.component';
import { MatDialogComponent } from './components/mat-dialog/mat-dialog.component';
import { MatDialogTemplateComponent } from './components/mat-dialog-template/mat-dialog-template.component';
import { MatDataTableComponent } from './components/mat-data-table/mat-data-table.component';
import { VirtualScrollingComponent } from './components/virtual-scrolling/virtual-scrolling.component';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { MatSliderComponent } from './components/mat-slider/mat-slider.component';
import { MatSliderToggleComponent } from './components/mat-slider-toggle/mat-slider-toggle.component';




@NgModule({
  declarations: [
    MaterialDemoComponent,
    TypographyComponent,
    MatButtonsComponent,
    MatButtonToggleComponent,
    MatBadgesComponent,
    MatProgressSpinnerComponent,
    MatToolbarComponent,
    MatSidenavComponent,
    MatMenuComponent,
    MatListComponent,
    MatGridListComponent,
    MatExpansionComponent,
    MatCardComponent,
    MatStepperComponent,
    MatInputComponent,
    MatSelectComponent,
    MatAutocompleteComponent,
    MatDialogComponent,
    MatDialogTemplateComponent,
    MatCheckboxRadioComponent,
    MatDatepickerComponent,
    MatTooltipComponent,
    MatSnackbarComponent,
    CustomSnackBarComponent,
    MatDataTableComponent,
    VirtualScrollingComponent,
    MatTableComponent,
    MatSliderComponent,
    MatSliderToggleComponent
  ],
  entryComponents: [CustomSnackBarComponent, MatDialogTemplateComponent],
  imports: [
    CommonModule,
    AngularMaterialModulesModule,
    MaterialDemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  exports: [
    MaterialDemoComponent
  ]
})
export class MaterialDemoModule { }
