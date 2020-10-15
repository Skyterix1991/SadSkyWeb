import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClearErrorMessage, UpdateProfileSettingsStart} from '../store/profile.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/model/user.model';
import {MONTHS, YEARS} from '../../shared/config/date.constants';
import {Subscription} from 'rxjs';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit, OnDestroy {

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
    this.store.dispatch(new ClearErrorMessage());
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

  private createUpdateProfileDetailsForm(): void {
    this.profileDetailsForm = new FormGroup({
      wakeHour: new FormControl(this.user.wakeHour, [Validators.required, Validators.min(0), Validators.max(23)])
    });
  }

  onSave(): void {
    if (!this.profileDetailsForm.valid) {
      return;
    }

    const wakeHour: number = +this.profileDetailsForm.controls.wakeHour.value;

    this.store.dispatch(new UpdateProfileSettingsStart(this.user.userId, wakeHour));
  }
}
