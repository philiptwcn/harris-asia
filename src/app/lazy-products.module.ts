import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { HandbagsComponent } from './handbags/handbags.component';
import { CrossbodyComponent } from './crossbody/crossbody.component';
import { FotograficaComponent } from './products/fotografica/fotografica.component';
import { ClassicFlapComponent } from './products/classic-flap/classic-flap.component';


import { ContentfulService } from './services/contentful.service';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'fotografica',
    component: FotograficaComponent
  },
  {
    path: 'classic-flap',
    component: ClassicFlapComponent
  },
  {
    path: 'handbags',
    component: HandbagsComponent
  },
  {
    path: 'crossbody',
    component: CrossbodyComponent
  },

];


@NgModule({
  declarations: [
    ProductsComponent,
    HandbagsComponent,
    CrossbodyComponent,
    FotograficaComponent,
    ClassicFlapComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [ContentfulService],
})
export class LazyProductsModule { }
