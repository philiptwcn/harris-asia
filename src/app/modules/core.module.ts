import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';


import { NotifyService } from '../services/notify.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyClew1rgcKO2gZrvBTCFcQGLHT_N1uTs4s',
  authDomain: 'test-a2c7c.firebaseapp.com',
  databaseURL: 'https://test-a2c7c.firebaseio.com',
  projectId: 'test-a2c7c',
  storageBucket: 'test-a2c7c.appspot.com',
  messagingSenderId: '640893180493',
  appId: '1:640893180493:web:5d05ded8c3248c84'
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
  ],
  exports: [
  ],
  providers: [AuthService, NotifyService],
})
export class CoreModule { }
