import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { map, take, debounceTime } from 'rxjs/operators';
import { User} from '../../services/user.model';

export class EmailValidator {
  static email(afs: AngularFirestore) {
    return (control: AbstractControl) => {

      const email = control.value.toLowerCase();

      return afs.collection('users', ref => ref.where('email', '==', email) )

        .valueChanges().pipe(
          debounceTime(500),
          take(1),
          map(arr => arr ? null : { emailMatch: true } ),
        );
    };
  }
}

export class PasswordValidator {
  static password(afs: AngularFirestore) {
    return (control: AbstractControl) => {

      const password = control.value;

      return afs.collection('users', ref => ref.where('password', '==', password) )

        .valueChanges().pipe(
          debounceTime(500),
          take(1),
          map(arr => arr.length ? null : { passwordMatch: false } ),
        );
    };
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  signinForm: FormGroup;
  detailForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  constructor(private afs: AngularFirestore, public fb: FormBuilder, public auth: AuthService) { }

  ngOnInit() {

    // First Step
    this.signinForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        EmailValidator.email(this.afs)
        ],
      ],
      password: ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required,
        PasswordValidator.password(this.afs)
        ],
      ],
    });

    


  }

  // Using getters will make your code look pretty
  get email() { return this.signinForm.get('email'); }
  get displayName() { return this.signinForm.get('displayName'); }
  get password() { return this.signinForm.get('password'); }

  get catchPhrase() { return this.detailForm.get('catchPhrase'); }


  // Step 1
  signin() {
    return this.auth.emailSignIn(this.email.value, this.password.value);
  }



}

