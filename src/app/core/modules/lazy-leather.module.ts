import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContentfulService } from '../../services/contentful.service';

import { LeatherComponent } from '../../leather/leather.component';


const routes: Routes = [
  {
    path: 'technique',
    component: LeatherComponent
  },
];

@NgModule({
  declarations: [
    LeatherComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [ContentfulService],
})
export class LazyLeatherModule { }
