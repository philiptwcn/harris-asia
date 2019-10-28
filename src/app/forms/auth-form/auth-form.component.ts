import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { map, take, debounceTime } from 'rxjs/operators';
import { User} from '../../services/user.model';

import { OnExecuteData, ReCaptchaV3Service } from 'ng-recaptcha';
import { Subscription } from 'rxjs';

export class CodeValidator {
  static code(afs: AngularFirestore) {
    return (control: AbstractControl) => {

      const code = control.value;

      return afs.collection('securityCodes', ref => ref.where('code', '==', code) )

        .valueChanges().pipe(
          debounceTime(500),
          take(1),
          map(arr => arr.length ? null : { codeMatch: false } ),
        );
    };
  }
}

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.sass']
})
export class AuthFormComponent implements OnInit, OnDestroy {

  authForm: FormGroup;

  // Form state
  loading = false;
  success = false;

  public recentToken: string = '';
  public readonly executionLog: OnExecuteData[] = [];

  private allExecutionsSubscription: Subscription;
  private singleExecutionSubscription: Subscription;

  constructor(
    private afs: AngularFirestore,
    public fb: FormBuilder,
    public auth: AuthService,
    private recaptchaV3Service: ReCaptchaV3Service,
    ) { }

  public executeAction(action: string): void {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
    this.singleExecutionSubscription = this.recaptchaV3Service.execute(action)
      .subscribe((token) => this.recentToken = token);
  }

  ngOnInit() {
    this.allExecutionsSubscription = this.recaptchaV3Service.onExecute
      .subscribe((data) => this.executionLog.push(data));

    this.authForm = this.fb.group({
      code: ['', [
        Validators.required,
        ],
        CodeValidator.code(this.afs)
      ],
    });
  }

  public ngOnDestroy() {
    if (this.allExecutionsSubscription) {
      this.allExecutionsSubscription.unsubscribe();
    }
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
  }

  public formatToken(token: string): string {
    if (!token) {
      return '(empty)';
    }
    return `${token.substr(0, 7)}...${token.substr(-7)}`;
  }

  get code() { return this.authForm.get('code'); }

  authSummit() {
    this.success = true;
  }
}
