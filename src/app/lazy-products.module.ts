import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { HandbagsComponent } from './handbags/handbags.component';
import { CrossbodyComponent } from './crossbody/crossbody.component';
import { FotograficaComponent } from './products/fotografica/fotografica.component';
import { ClassicFlapComponent } from './products/classic-flap/classic-flap.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

import { CarouselComponent } from './carousel/carousel.component';

import { ContentfulService } from './services/contentful.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: 'allProducts',
    component: ProductsComponent
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

];


@NgModule({
  declarations: [
    ProductsComponent,
    HandbagsComponent,
    CrossbodyComponent,
    FotograficaComponent,
    ClassicFlapComponent,
    ProductDetailComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
  ],
  providers: [ContentfulService],
})
export class LazyProductsModule { }
