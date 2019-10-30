import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContentfulService } from '../../services/contentful.service';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { ProductDetailComponent } from '../../products/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: 'detail/:slug',
    component: ProductDetailComponent,
  },
];

@NgModule({
  declarations: [
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCarouselModule.forRoot(),
  ],
  providers: [ContentfulService],
})
export class LazyDetailModule { }
