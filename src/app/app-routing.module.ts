import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

import { FotograficaComponent } from './products/fotografica/fotografica.component';
import { ClassicFlapComponent } from './products/classic-flap/classic-flap.component';

import { HandbagsComponent } from './handbags/handbags.component';
import { CrossbodyComponent } from './crossbody/crossbody.component';

import { StoriesComponent } from './stories/stories.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product-detail',
    component: ProductDetailComponent
  },
  {
    path: 'products/:slug',
    component: ProductDetailComponent
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
  {
    path: 'stories',
    component: StoriesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
