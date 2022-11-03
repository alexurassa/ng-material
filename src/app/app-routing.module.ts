import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDemoModule } from '@material-demo/material-demo.module';



const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@material-demo/material-demo.module').then(mod => mod.MaterialDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
