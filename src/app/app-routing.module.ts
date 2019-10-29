import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ProductDetailComponent } from './products/product-detail/product-detail.component';




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
    path: 'series',
    loadChildren: './core/modules/lazy-series.module#LazySeriesModule'
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
    path: 'stories',
    loadChildren: './core/modules/lazy-story.module#LazyStoryModule'
  },
  {
    path: 'iniusers',
    loadChildren: './core/modules/init-user.module#InitUserModule'
  },
  {
    path: 'users',
    loadChildren: './core/modules/form.module#FormModule'
  },
  {
    path: 'products/:slug',
    component: ProductDetailComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
