import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';
import { TypographyComponent } from './components/typography/typography.component';
import { MatButtonsComponent } from './components/mat-buttons/mat-buttons.component';


const routes: Routes = [
  { 
    path: '',
     component: MaterialDemoComponent,
     children: [
       { path: 'typo', component: TypographyComponent, title: 'Typography' },
       { path: 'buttons', component: MatButtonsComponent, title: 'Maerial Buttons' },
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
