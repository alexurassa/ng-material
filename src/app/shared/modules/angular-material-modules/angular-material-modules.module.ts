import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule } from "@angular/material/button-toggle"
import { MatBadgeModule } from "@angular/material/badge"
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'




const materialModules: Array<any> = [
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatListModule
]


@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class AngularMaterialModulesModule { }
