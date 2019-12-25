import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from '../../test/test.component';

import { ContentfulService } from '../../services/contentful.service';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
];

@NgModule({
  declarations: [
    TestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [ContentfulService],
})
export class LazyTestModule { }
