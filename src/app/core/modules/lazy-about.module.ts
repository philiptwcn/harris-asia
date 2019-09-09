import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContentfulService } from '../../services/contentful.service';

import { AboutComponent } from '../../about/about.component';
import { AboutUsComponent } from '../../about/about-us/about-us.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/aboutus',
    component: AboutUsComponent
  },
];

@NgModule({
  declarations: [
    AboutComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [ContentfulService],
})
export class LazyAboutModule { }
