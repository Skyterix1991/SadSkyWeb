import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UPDATE_USER_URL} from '../../shared/config/api.constants';
import {of} from 'rxjs';
import {
  UPDATE_PROFILE_DETAILS_START,
  UPDATE_PROFILE_PRIVACY_EMAIL_START,
  UPDATE_PROFILE_PRIVACY_PASSWORD_START,
  UPDATE_PROFILE_SETTINGS_START,
  UPDATE_PROFILE_SUCCESS,
  UpdateProfileDetailsStart,
  UpdateProfileFail,
  UpdateProfilePrivacyEmailStart,
  UpdateProfilePrivacyPasswordStart,
  UpdateProfileSettingsStart,
  UpdateProfileSuccess
} from './profile.actions';
import {UserFetchStart} from '../../authentication/store/authentication.actions';

@Injectable()
export class ProfileEffects {

  @Effect()
  updateProfileSettingsStart = this.actions$.pipe(
    ofType(UPDATE_PROFILE_SETTINGS_START),
    switchMap((state: UpdateProfileSettingsStart) => {
      return this.httpClient.patch(UPDATE_USER_URL + state.userId,
        {
          wakeHour: state.wakeHour
        }).pipe(
        map(__ => {
          return new UpdateProfileSuccess(state.userId);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new UpdateProfileFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  updateProfileDetailsStart = this.actions$.pipe(
    ofType(UPDATE_PROFILE_DETAILS_START),
    switchMap((state: UpdateProfileDetailsStart) => {
      return this.httpClient.patch(UPDATE_USER_URL + state.userId,
        {
          firstName: state.firstName,
          lastName: state.lastName,
          birthDay: state.birthDay
        }).pipe(
        map(__ => {
          return new UpdateProfileSuccess(state.userId);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new UpdateProfileFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  updateProfilePrivacyEmailStart = this.actions$.pipe(
    ofType(UPDATE_PROFILE_PRIVACY_EMAIL_START),
    switchMap((state: UpdateProfilePrivacyEmailStart) => {
      return this.httpClient.patch(UPDATE_USER_URL + state.userId,
        {
          email: state.email
        }).pipe(
        map(__ => {
          return new UpdateProfileSuccess(state.userId);
        }),
        catchError(error => {
          switch (error.status) {
            case 409:
              return of(new UpdateProfileFail('Email jest już zajęty.'));
            default:
              return of(new UpdateProfileFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );


  @Effect()
  updateProfilePrivacyPasswordStart = this.actions$.pipe(
    ofType(UPDATE_PROFILE_PRIVACY_PASSWORD_START),
    switchMap((state: UpdateProfilePrivacyPasswordStart) => {
      return this.httpClient.patch(UPDATE_USER_URL + state.userId,
        {
          password: state.password
        }).pipe(
        map(__ => {
          return new UpdateProfileSuccess(state.userId);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new UpdateProfileFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  updateProfileSuccess = this.actions$.pipe(
    ofType(UPDATE_PROFILE_SUCCESS),
    map((state: UpdateProfileSuccess) => {
      return new UserFetchStart(state.userId);
    })
  );

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
  ) {
  }
}
