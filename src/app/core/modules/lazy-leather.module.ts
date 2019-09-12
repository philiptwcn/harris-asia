import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContentfulService } from '../../services/contentful.service';

import { LeagueComponent } from '../../about/leather/league/league.component';
import { TechIntroComponent } from '../../about/leather/tech-intro/tech-intro.component';
import { CertifComponent } from '../../about/leather/certif/certif.component';

import { AboutMenuModule } from '../modules/about-menu.module';

const routes: Routes = [
  {
    path: 'league',
    component: LeagueComponent
  },
  {
    path: 'intro',
    component: TechIntroComponent
  },
  {
    path: 'certif',
    component: CertifComponent
  },
];

@NgModule({
  declarations: [
    LeagueComponent,
    TechIntroComponent,
    CertifComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AboutMenuModule
  ],
  providers: [ContentfulService],
})
export class LazyLeatherModule { }
