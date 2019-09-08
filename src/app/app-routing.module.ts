import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { StoriesComponent } from './stories/stories.component';

import { ProductDetailComponent } from './products/product-detail/product-detail.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'allProducts',
    loadChildren: './modules/lazy-products.module#LazyProductsModule'
  },
  {
    path: 'allAbout',
    loadChildren: './modules/lazy-about.module#LazyAboutModule'
  },
  {
    path: 'users',
    loadChildren: './modules/form.module#FormModule'
  },
  {
    path: 'stories',
    component: StoriesComponent
  },
  {
    path: 'products/:slug',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
