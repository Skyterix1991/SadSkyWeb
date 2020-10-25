import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {LoginStart} from '../store/authentication.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import {AuthenticationService} from '../authentication.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  userIcon = faUser;
  authenticatingIcon = faCircleNotch;

  errorMessage: string;
  isAuthenticating: boolean;

  private authenticationStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private authenticationService: AuthenticationService,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.createLoginForm();
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.errorMessage = state.errorMessage;
      this.isAuthenticating = state.isAuthenticating;
    });

    window.scroll(0, 0);
    this.document.body.classList.add('modal-open');
  }

  ngOnDestroy(): void {
    this.authenticationStoreSubscription.unsubscribe();

    this.document.body.classList.remove('modal-open');
  }

  onClose(): void {
    if (this.isAuthenticating) {
      return;
    }

    this.authenticationService.loginModalCloseEvent.emit();
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      return;
    }

    const email: string = this.loginForm.controls.email.value;
    const password: string = this.loginForm.controls.password.value;

    this.store.dispatch(new LoginStart(email, password));
  }

  private createLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }

}
