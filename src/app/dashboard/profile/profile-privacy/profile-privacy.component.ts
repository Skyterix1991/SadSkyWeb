import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../shared/model/user.model';
import {Subscription} from 'rxjs';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import {ClearErrorMessage, UpdateProfilePrivacyEmailStart, UpdateProfilePrivacyPasswordStart} from '../store/profile.actions';

@Component({
  selector: 'app-profile-privacy',
  templateUrl: './profile-privacy.component.html',
  styleUrls: ['./profile-privacy.component.css']
})
export class ProfilePrivacyComponent implements OnInit, OnDestroy {

  profilePrivacyEmailForm: FormGroup;
  profilePrivacyPasswordForm: FormGroup;

  faCircleNotch = faCircleNotch;

  errorMessage: string;
  isFetching: boolean;

  user: User;

  authenticationStoreSubscription: Subscription;
  profileStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new ClearErrorMessage());
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.user = state.user;
    });
    this.profileStoreSubscription = this.store.select('profile').subscribe(state => {
      this.errorMessage = state.errorMessage;
      this.isFetching = state.isFetching;
    });

    this.createUpdateProfilePrivacyEmailForm();
    this.createUpdateProfilePrivacyPasswordForm();
  }

  ngOnDestroy(): void {
    this.authenticationStoreSubscription.unsubscribe();
    this.profileStoreSubscription.unsubscribe();
  }

  onEmailSave(): void {
    if (!this.profilePrivacyEmailForm.valid) {
      return;
    }

    const email: string = this.profilePrivacyEmailForm.controls.email.value;

    this.store.dispatch(new UpdateProfilePrivacyEmailStart(this.user.userId, email));
  }

  onPasswordSave(): void {
    if (!this.profilePrivacyPasswordForm.valid) {
      return;
    }

    const password: string = this.profilePrivacyPasswordForm.controls.password.value;

    this.store.dispatch(new UpdateProfilePrivacyPasswordStart(this.user.userId, password));
  }

  private createUpdateProfilePrivacyEmailForm(): void {
    this.profilePrivacyEmailForm = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.maxLength(255),
        Validators.email
      ])
    });
  }

  private createUpdateProfilePrivacyPasswordForm(): void {
    this.profilePrivacyPasswordForm = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40),
      ])
    });
  }

}
