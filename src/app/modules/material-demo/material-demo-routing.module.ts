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
