import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import {Subscription} from 'rxjs';
import {User} from '../../../shared/model/user.model';
import {DateConstants, MONTHS, YEARS} from '../../../shared/config/date.constants';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UpdateProfileDetailsStart} from '../store/profile.actions';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit, OnDestroy {

  profileDetailsForm: FormGroup;

  faCircleNotch = faCircleNotch;

  errorMessage: string;
  isFetching: boolean;

  user: User;

  months = MONTHS;
  years = YEARS;
  daysInMonth = [];

  authenticationStoreSubscription: Subscription;
  profileStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.user = state.user;
    });
    this.profileStoreSubscription = this.store.select('profile').subscribe(state => {
      this.errorMessage = state.errorMessage;
      this.isFetching = state.isFetching;
    });

    this.createUpdateProfileDetailsForm();
  }

  ngOnDestroy(): void {
    this.authenticationStoreSubscription.unsubscribe();
    this.profileStoreSubscription.unsubscribe();
  }

  onBirthdayChange(): void {
    const days = DateConstants.getDaysInMonth(+this.profileDetailsForm.controls.month.value, +this.profileDetailsForm.controls.year.value);

    this.daysInMonth = [];

    for (let i = 1; i <= days; i++) {
      this.daysInMonth.push(i);
    }

    if (!!days) {
      this.profileDetailsForm.controls.day.enable();
    } else {
      this.profileDetailsForm.controls.day.disable();
    }
  }

  onSave(): void {
    if (!this.profileDetailsForm.valid) {
      return;
    }

    const firstName: string = this.profileDetailsForm.controls.firstName.value;
    const lastName: string = this.profileDetailsForm.controls.lastName.value;

    const day: number = +this.profileDetailsForm.controls.day.value;
    const month: number = +this.profileDetailsForm.controls.month.value;
    const year: number = +this.profileDetailsForm.controls.year.value;

    this.store.dispatch(new UpdateProfileDetailsStart(this.user.userId, firstName, lastName, [year, month, day]));
  }

  private createUpdateProfileDetailsForm(): void {
    const day = this.user.birthDay[2];
    const month = this.user.birthDay[1];
    const year = this.user.birthDay[0];

    const days = DateConstants.getDaysInMonth(month, year);

    this.daysInMonth = [];

    for (let i = 1; i <= days; i++) {
      this.daysInMonth.push(i);
    }

    this.profileDetailsForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, [Validators.required]),
      lastName: new FormControl(this.user.lastName, [Validators.required]),
      day: new FormControl(day, [Validators.required]),
      month: new FormControl(month, [Validators.required]),
      year: new FormControl(year, [Validators.required]),
    });
  }
}
