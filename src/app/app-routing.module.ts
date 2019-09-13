import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AboutUsComponent } from './about/about-us/about-us.component';

import { StoriesComponent } from './stories/stories.component';

import { ProductDetailComponent } from './products/product-detail/product-detail.component';

import { CartComponent } from './cart/cart.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'allProducts',
    loadChildren: './core/modules/lazy-products.module#LazyProductsModule'
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'about',
    loadChildren: './core/modules/lazy-about.module#LazyAboutModule'
  },
  {
    path: 'leather',
    loadChildren: './core/modules/lazy-leather.module#LazyLeatherModule'
  },
  {
    path: 'users',
    loadChildren: './core/modules/form.module#FormModule'
  },
  {
    path: 'stories',
    component: StoriesComponent
  },
  {
    path: 'products/:slug',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
