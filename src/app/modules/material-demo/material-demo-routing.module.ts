import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { TypographyComponent } from './components/typography/typography.component';
import { MatButtonsComponent } from './components/mat-buttons/mat-buttons.component';
import { MatButtonToggleComponent } from './components/mat-button-toggle/mat-button-toggle.component';
import { MatBadgesComponent } from './components/mat-badges/mat-badges.component';
import { MatProgressSpinnerComponent } from './components/mat-progress-spinner/mat-progress-spinner.component';
import { MatToolbarComponent } from './components/mat-toolbar/mat-toolbar.component';
import { MatSidenavComponent } from '@material-demo/components/mat-sidenav/mat-sidenav.component';
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
import { MatSnackbarComponent } from './components/mat-snackbar/mat-snackbar.component';
import { MatDialogComponent } from './components/mat-dialog/mat-dialog.component';
import { MatDataTableComponent } from './components/mat-data-table/mat-data-table.component';
import { VirtualScrollingComponent } from './components/virtual-scrolling/virtual-scrolling.component';
import { MatTableComponent } from './components/mat-table/mat-table.component';
import { MatSliderComponent } from './components/mat-slider/mat-slider.component';
import { MatSliderToggleComponent } from './components/mat-slider-toggle/mat-slider-toggle.component';
import { MatProgressBarComponent } from './components/mat-progress-bar/mat-progress-bar.component';
import { MatTabsComponent } from './components/mat-tabs/mat-tabs.component';
import { NestedTreeComponent } from './components/nested-tree/nested-tree.component';
import { MatFlatTreeComponent } from './components/mat-flat-tree/mat-flat-tree.component';


const routes: Routes = [
  { 
    path: '',
     component: MaterialDemoComponent,
     children: [
       { path: 'typo', component: TypographyComponent, title: 'Typography' },
       { path: 'buttons', component: MatButtonsComponent, title: 'Buttons' },
       { path: 'button-toggle', component: MatButtonToggleComponent, title: 'Button Toggle' },
       { path: 'badges', component: MatBadgesComponent, title: 'Badges Demostration' },
       { path: 'progress-spinner', component: MatProgressSpinnerComponent, title: 'Progress Spinner' },
       { path: 'toolbar', component: MatToolbarComponent, title: 'Toolbar' },
       { path: 'sidenav', component: MatSidenavComponent, title: 'Sidenav' },
       { path: 'menu', component: MatMenuComponent, title: 'Menu' },
       { path: 'lists', component: MatListComponent, title: 'Lists' },
       { path: 'grid-list', component: MatGridListComponent, title: 'Grid List' },
       { path: 'expansions', component: MatExpansionComponent, title: 'Expansions' },
       { path: 'cards', component: MatCardComponent, title: 'mat-cards' },
       { path: 'stepper', component: MatStepperComponent, title: 'mat stepper' },
       { path: 'input', component: MatInputComponent, title: 'Form Inputs' },
       { path: 'select', component: MatSelectComponent, title: 'Form Select' },
       { path: 'autocomplete', component: MatAutocompleteComponent, title: 'autocomplete' },
       { path: 'checkbox-radio', component: MatCheckboxRadioComponent, title: 'checkbox and radio' },
       { path: 'datepicker', component: MatDatepickerComponent, title: 'datePicker' },
       { path: 'tooltip', component: MatTooltipComponent, title: 'Tooltip' },
       { path: 'snackbar', component: MatSnackbarComponent, title: 'SnackBar' },
       { path: 'dialog', component: MatDialogComponent, title: 'Dialog Demo' },
       { path: 'data-table', component: MatDataTableComponent, title: 'Data Table' },
       { path: 'table', component: MatTableComponent, title: 'Data Table' },
       { path: 'virtual-scrolling', component: VirtualScrollingComponent, title: 'Virtual Scrolling' },
       { path: 'slider', component: MatSliderComponent, title: 'Slider' },
       { path: 'slide-toggle', component: MatSliderToggleComponent, title: 'Slider' },
       { path: 'progress-bar', component: MatProgressBarComponent, title: 'Progress Bar' },
       { path: 'tabs', component: MatTabsComponent, title: 'Mat Tabs' },
       { path: 'nested-tree', component: NestedTreeComponent, title: 'Nested Tree' },
       { path: 'flat-tree', component: MatFlatTreeComponent, title: 'Flat Tree' },
     ]
  },
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MaterialDemoRoutingModule { }
