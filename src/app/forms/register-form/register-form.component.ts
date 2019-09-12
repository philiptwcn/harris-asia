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
          map(arr => arr.length ? { emailAvailable: false } : null ),
        );
    };
  }
}

export class DisplayNameValidator {
  static displayName(afs: AngularFirestore) {
    return (control: AbstractControl) => {

      const displayName = control.value.toLowerCase();

      return afs.collection('users', ref => ref.where('displayName', '==', displayName) )

        .valueChanges().pipe(
          debounceTime(500),
          take(1),
          map(arr => arr.length ? { displayNameAvailable: false } : null ),
        );
    };
  }
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass']
})
export class RegisterFormComponent implements OnInit {

  signupForm: FormGroup;
  detailForm: FormGroup;

  constructor(private afs: AngularFirestore, public fb: FormBuilder, public auth: AuthService) { }

  ngOnInit() {

    // First Step
    this.signupForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        ],
        EmailValidator.email(this.afs),
      ],
      displayName:  ['',
        Validators.required,
        DisplayNameValidator.displayName(this.afs)
      ],
      password: ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required
        ]
      ],
      region: ['', [
        ]
      ],
    });

    // Second Step
    this.detailForm = this.fb.group({
      catchPhrase: ['', [ Validators.required ] ]
    });

  }

  // Using getters will make your code look pretty
  get email() { return this.signupForm.get('email'); }
  get displayName() { return this.signupForm.get('displayName'); }
  get password() { return this.signupForm.get('password'); }

  get catchPhrase() { return this.detailForm.get('catchPhrase'); }


  // Step 1
  signup() {
    return this.auth.emailSignUp(this.email.value, this.password.value, this.displayName.value);
  }


}
