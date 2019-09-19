import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StoriesComponent } from '../../stories/stories.component';

import { ContentfulService } from '../../services/contentful.service';
import { MdToHtmlPipe } from '../../services/md-to-html.pipe';

const routes: Routes = [
  {
    path: 'story',
    component: StoriesComponent
  },
];

@NgModule({
  declarations: [
    StoriesComponent,
    MdToHtmlPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ContentfulService],
})
export class LazyStoryModule { }
