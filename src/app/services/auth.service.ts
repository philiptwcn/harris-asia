import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model'; // optional

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { NotifyService } from './notify.service';

import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

    user$: Observable<User>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router,
        private notify: NotifyService
    ) {
        // Get the auth state, then fetch the Firestore user document or return null
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      );
     }

    getUser(): Promise<any> {
    return this.afAuth.authState.pipe(first()).toPromise();
    }

     //// Email/Password Auth ////

    async emailSignUp(email: string, password: string, displayName: string) {
      try {
        const credential = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        return this.setUserDoc(credential.user, password, displayName); // create initial user document
      } catch (error) {
        return this.handleError(error);
      }
    }
    async emailSignIn(email: string, password: string) {
      try {
        const credential = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        // return this.updateUserData(credential.user); // login
      } catch (error) {
        return this.handleError(error);
      }
    }
        // Sets user data to firestore after succesful login
        private setUserDoc({ uid, email }: User, password: string, displayName: string ) {

          const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
          const data = {
            uid,
            email: email || null,
            password,
            photoURL: 'https://www.harris-asia.com/assets/img/logo_i.svg',
            displayName,
          };

          return userRef.set(data, { merge: true });

        }
        // Update properties on the user document
        updateUser(user: User, data: any) {
          return this.afs.doc(`users/${user.uid}`).update(data);
        }

      // If error, console log and notify user
      private handleError(error) {
        console.error(error);
        this.notify.update(error.message, 'error');
      }

      // google signin
     async googleSignin() {
        const provider = new auth.GoogleAuthProvider();
        return this.oAuthLogin(provider);
      }

      private async oAuthLogin(provider) {
        const credential = await this.afAuth.auth.signInWithPopup(provider);
        this.updateUserData(credential.user);
      }

      private updateUserData({ uid, email, displayName, photoURL }: User ) {
        // Sets user data to firestore on login
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
        const data = {
          uid,
          email,
          displayName,
          photoURL
        };

        return userRef.set(data, { merge: true });

      }

      async signOut() {
        await this.afAuth.auth.signOut();
        this.router.navigate(['/']);
      }

}
