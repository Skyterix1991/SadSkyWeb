import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {
  AUTHENTICATION_FAILED,
  AuthenticationFailed,
  AUTO_LOGIN_START,
  AUTO_LOGIN_SUCCESS,
  AutoLoginSuccess,
  LOGIN_START,
  LOGIN_SUCCESS,
  LoginStart,
  LoginSuccess,
  LOGOUT,
  ResetAuthentication,
  UserFetchSuccess
} from './authentication.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {GET_USER_URL, LOGIN_URL} from '../../shared/config/api.constants';
import {of} from 'rxjs';
import {UserAuth} from '../../shared/model/user-auth';
import {User} from '../../shared/model/user.model';

@Injectable()
export class AuthenticationEffects {

  @Effect()
  loginStart = this.actions$.pipe(
    ofType(LOGIN_START),
    switchMap((state: LoginStart) => {
      return this.httpClient.post(LOGIN_URL,
        {email: state.email, password: state.password},
        {observe: 'response'}).pipe(
        map(response => {
          const userId = response.headers.get('Id');
          const token = response.headers.get('Authorization');

          const userAuth = new UserAuth(userId, token);

          localStorage.setItem('userData', JSON.stringify(userAuth));

          return new LoginSuccess(userAuth);
        }),
        catchError(error => {
          switch (error.status) {
            case 403:
              return of(new AuthenticationFailed('Invalid login details.'));
            default:
              return of(new AuthenticationFailed('Something went wrong. Try again later.'));
          }
        })
      );
    })
  );

  @Effect()
  loginSuccess = this.actions$.pipe(
    ofType(LOGIN_SUCCESS),
    switchMap((state: LoginSuccess) => {
      return this.httpClient.get<User>(GET_USER_URL + state.userAuth.userId).pipe(
        map(response => {
          this.router.navigate(['/']);

          return new UserFetchSuccess(response);
        }),
        catchError(__ => {
          return of(new AuthenticationFailed('User data could not be fetched. Try again later.'));
        })
      );
    })
  );

  @Effect()
  autoLoginSuccess = this.actions$.pipe(
    ofType(AUTO_LOGIN_SUCCESS),
    switchMap((state: LoginSuccess) => {
      return this.httpClient.get<User>(GET_USER_URL + state.userAuth.userId).pipe(
        map(response => {
          return new UserFetchSuccess(response);
        }),
        catchError(__ => {
          return of(new AuthenticationFailed('User data could not be fetched. Try again later.'));
        })
      );
    })
  );

  @Effect({dispatch: false})
  logout = this.actions$.pipe(
    ofType(LOGOUT),
    tap(__ => {
      localStorage.removeItem('userData');

      this.router.navigate(['/auth/login']);
    })
  );

  @Effect()
  autoLoginStart = this.actions$.pipe(
    ofType(AUTO_LOGIN_START),
    map(__ => {
      const json: {
        userId: string,
        _authorizationToken: string,
      } = JSON.parse(localStorage.getItem('userData'));

      if (!json) {
        return new ResetAuthentication();
      }

      return new AutoLoginSuccess(new UserAuth(json.userId, json._authorizationToken));
    })
  );

  @Effect({dispatch: false})
  authenticationFailed = this.actions$.pipe(
    ofType(AUTHENTICATION_FAILED),
    tap(__ => {
      localStorage.removeItem('userData');
    })
  );

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    private router: Router
  ) {
  }
}
