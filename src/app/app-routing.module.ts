import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'material', pathMatch: 'full' },
  {
    path: 'material',
    loadChildren: () => import('@material-demo/material-demo.module').then(mod => mod.MaterialDemoModule)
  },
  { path: '**', redirectTo: 'material', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
