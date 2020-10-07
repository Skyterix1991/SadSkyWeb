import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UPDATE_USER_URL} from '../../../shared/config/api.constants';
import {of} from 'rxjs';
import {UPDATE_PROFILE_DETAILS_START, UpdateProfileDetailsStart, UpdateProfileFail, UpdateProfileSuccess} from './profile.actions';

@Injectable()
export class ProfileEffects {

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
          return new UpdateProfileSuccess();
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

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
  ) {
  }
}
