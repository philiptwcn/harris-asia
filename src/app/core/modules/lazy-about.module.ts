import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContentfulService } from '../../services/contentful.service';

import { OurStoriesComponent } from '../../about/our-stories/our-stories.component';
import { OurIdeaComponent } from '../../about/our-idea/our-idea.component';
import { EuFashionComponent } from '../../about/eu-fashion/eu-fashion.component';
import { FairPriceComponent } from '../../about/fair-price/fair-price.component';
import { FutureComponent } from '../../about/future/future.component';





const routes: Routes = [
  {
    path: 'ourstories',
    component: OurStoriesComponent
  },
  {
    path: 'ouridea',
    component: OurIdeaComponent
  },
  {
    path: 'eufashion',
    component: EuFashionComponent
  },
  {
    path: 'fairprice',
    component: FairPriceComponent
  },
  {
    path: 'future',
    component: FutureComponent
  },
];

@NgModule({
  declarations: [
    OurStoriesComponent,
    OurIdeaComponent,
    OurIdeaComponent,
    EuFashionComponent,
    FairPriceComponent,
    FutureComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [ContentfulService],
})
export class LazyAboutModule { }
