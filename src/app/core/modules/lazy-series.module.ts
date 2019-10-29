import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FotograficaComponent } from '../../products/fotografica/fotografica.component';
import { ClassicFlapComponent } from '../../products/classic-flap/classic-flap.component';

import { ContentfulService } from '../../services/contentful.service';

const routes: Routes = [
  {
    path: 'fotografica',
    component: FotograficaComponent
  },
  {
    path: 'classic-flap',
    component: ClassicFlapComponent
  },

];

@NgModule({
  declarations: [
    FotograficaComponent,
    ClassicFlapComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [ContentfulService],
})
export class LazySeriesModule { }
