import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StoriesComponent } from '../../stories/stories.component';

import { ContentfulService } from '../../services/contentful.service';

const routes: Routes = [
  {
    path: 'story',
    component: StoriesComponent
  },
];

@NgModule({
  declarations: [
    StoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ContentfulService],
})
export class LazyStoryModule { }
