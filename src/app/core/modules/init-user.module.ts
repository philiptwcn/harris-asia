import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { RegisterFormComponent } from '../../forms/register-form/register-form.component';
import { CartComponent } from '../../cart/cart.component';
import { Route } from '@angular/router';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
];

@NgModule({
  declarations: [
    RegisterFormComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class InitUserModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faEnvelope, faLock, faUser, faGoogle);
  }
}
