import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { LoginFormComponent } from '../../forms/login-form/login-form.component';
import { RegisterFormComponent } from '../../forms/register-form/register-form.component';
import { AuthFormComponent } from '../../forms/auth-form/auth-form.component';
import { CartComponent } from '../../cart/cart.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'auth',
    component: AuthFormComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
];

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    AuthFormComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FontAwesomeModule
  ],
})
export class FormModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faEnvelope, faLock, faUser, faGoogle);
  }
}
