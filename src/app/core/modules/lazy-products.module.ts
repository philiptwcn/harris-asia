import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from '../../products/products.component';
import { HandbagsComponent } from '../../products/handbags/handbags.component';
import { CrossbodyComponent } from '../../products/crossbody/crossbody.component';
import { FotograficaComponent } from '../../products/fotografica/fotografica.component';
import { ClassicFlapComponent } from '../../products/classic-flap/classic-flap.component';
import { MiniBoxComponent } from '../../products/mini-box/mini-box.component';
import { ToteComponent } from '../../products/tote/tote.component';
import { WalletComponent } from '../../products/wallet/wallet.component';


import { ContentfulService } from '../../services/contentful.service';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
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
  {
    path: 'minibox',
    component: MiniBoxComponent
  },
  {
    path: 'tote',
    component: ToteComponent
  },
  {
    path: 'wallet',
    component: WalletComponent
  },

];


@NgModule({
  declarations: [
    ProductsComponent,
    HandbagsComponent,
    CrossbodyComponent,
    FotograficaComponent,
    ClassicFlapComponent,
    MiniBoxComponent,
    ToteComponent,
    WalletComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [ContentfulService],
})
export class LazyProductsModule { }
