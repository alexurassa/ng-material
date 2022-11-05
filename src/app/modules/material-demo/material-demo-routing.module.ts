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
