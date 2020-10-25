import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {AuthenticationService} from '../authentication.service';
import {DateConstants, MONTHS, YEARS} from '../../shared/config/date.constants';
import {RegisterStart} from '../store/authentication.actions';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;

  userIcon = faUser;
  authenticatingIcon = faCircleNotch;

  errorMessage: string;
  isAuthenticating: boolean;

  months = MONTHS;
  years = YEARS;
  daysInMonth = [];

  private authenticationStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private authenticationService: AuthenticationService,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.createRegisterForm();
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

    this.authenticationService.registerModalCloseEvent.emit();
  }

  onSubmit(): void {
    if (!this.registerForm.valid) {
      return;
    }

    const firstName: string = this.registerForm.controls.firstName.value;
    const lastName: string = this.registerForm.controls.lastName.value;

    const day: number = +this.registerForm.controls.day.value;
    const month: number = +this.registerForm.controls.month.value;
    const year: number = +this.registerForm.controls.year.value;

    const email: string = this.registerForm.controls.email.value;
    const password: string = this.registerForm.controls.password.value;


    this.store.dispatch(new RegisterStart(firstName, lastName, [year, month, day], email, password));
  }

  onBirthdayChange(): void {
    const days = DateConstants.getDaysInMonth(+this.registerForm.controls.month.value, +this.registerForm.controls.year.value);

    this.daysInMonth = [];

    for (let i = 1; i <= days; i++) {
      this.daysInMonth.push(i);
    }

    if (!!days) {
      this.registerForm.controls.day.enable();
    } else {
      this.registerForm.controls.day.disable();
    }
  }

  private createRegisterForm(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
        Validators.pattern('^[a-zA-Z]+$')
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255),
        Validators.pattern('^[a-zA-Z]+$')
      ]),
      day: new FormControl({value: 'Dzień', disabled: true}, [Validators.required]),
      month: new FormControl('Miesiąc', [Validators.required]),
      year: new FormControl('Rok', [Validators.required]),
      email: new FormControl(null, [
        Validators.email,
        Validators.required,
        Validators.maxLength(255)]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(40)
      ])
    });
  }
}
