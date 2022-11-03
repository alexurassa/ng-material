import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDemoComponent } from './components/material-demo/material-demo.component';


const routes: Routes = [
  { path: '', component: MaterialDemoComponent }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MaterialDemoRoutingModule { }
