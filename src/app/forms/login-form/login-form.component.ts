import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { map, take, debounceTime } from 'rxjs/operators';
import { User} from '../../services/user.model';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {

  signinForm: FormGroup;
  detailForm: FormGroup;

  constructor(private afs: AngularFirestore, public fb: FormBuilder, public auth: AuthService) { }

  ngOnInit() {

    // First Step
    this.signinForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email, ],
      ],
      displayName:  ['',
        Validators.required,
      ],
      password: ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required
        ],
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
  get email() { return this.signinForm.get('email'); }
  get displayName() { return this.signinForm.get('displayName'); }
  get password() { return this.signinForm.get('password'); }

  get catchPhrase() { return this.detailForm.get('catchPhrase'); }


  // Step 1
  signin(user: User) {
    return this.auth.emailSignIn(this.email.value, this.password.value),
    this.auth.updateUser(user, { displayName: this.displayName.value });
  }

  // Step 2
  setCatchPhrase(user) {
    return this.auth.updateUser(user, { catchPhrase:  this.catchPhrase.value });
  }
}

