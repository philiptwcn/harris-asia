import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { LoginFormComponent } from '../../forms/login-form/login-form.component';
import { AuthFormComponent } from '../../forms/auth-form/auth-form.component';



const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'auth',
    component: AuthFormComponent
  },
];

@NgModule({
  declarations: [
    LoginFormComponent,
    AuthFormComponent,
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
    library.addIcons(faEnvelope, faLock, faUser, faGoogle, faTimesCircle, faCheckCircle);
  }
}
