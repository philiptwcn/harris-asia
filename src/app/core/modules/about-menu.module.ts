import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutMenuComponent } from '../../about/about-menu/about-menu.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AboutMenuComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AboutMenuComponent
  ]
})
export class AboutMenuModule { }
