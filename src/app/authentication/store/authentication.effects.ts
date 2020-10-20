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
  REGISTER_START,
  RegisterStart,
  ResetAuthentication,
  USER_FETCH_START,
  UserFetchStart,
  UserFetchSuccess
} from './authentication.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {GET_USER_URL, LOGIN_URL, REGISTER_URL} from '../../shared/config/api.constants';
import {of} from 'rxjs';
import {UserAuth} from '../../shared/model/user-auth';
import {User} from '../../shared/model/user.model';
import {UpdateProfileFail} from '../../profile/store/profile.actions';

@Injectable()
export class AuthenticationEffects {

  @Effect()
  registerStart = this.actions$.pipe(
    ofType(REGISTER_START),
    switchMap((state: RegisterStart) => {
      return this.httpClient.post(REGISTER_URL,
        {
          firstName: state.firstName,
          lastName: state.lastName,
          birthDay: state.birthDay,
          email: state.email,
          password: state.password
        }).pipe(
        map(__ => {
          return new LoginStart(state.email, state.password);
        }),
        catchError(error => {
          switch (error.status) {
            case 400:
              return of(new AuthenticationFailed('Podane dane są nieprawidłowe.'));
            default:
              return of(new AuthenticationFailed('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

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
              return of(new AuthenticationFailed('Podane hasło jest nieprawidłowe.'));
            case 400:
              return of(new AuthenticationFailed('Podane dane są nieprawidłowe.'));
            default:
              return of(new AuthenticationFailed('Coś poszło nie tak. Spróbuj ponownie później.'));
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
          this.router.navigate(['/dashboard']);

          return new UserFetchSuccess(response);
        }),
        catchError(__ => {
          return of(new AuthenticationFailed('Nie udało się pobrać informacji o użytkowniku. Spróbuj ponownie później.'));
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
          return of(new AuthenticationFailed('Nie udało się pobrać informacji o użytkowniku. Spróbuj ponownie później.'));
        })
      );
    })
  );

  @Effect()
  userFetchStart = this.actions$.pipe(
    ofType(USER_FETCH_START),
    switchMap((state: UserFetchStart) => {
      return this.httpClient.get<User>(GET_USER_URL + state.userId).pipe(
        map(response => {
          return new UserFetchSuccess(response);
        }),
        catchError(__ => {
          return of(new UpdateProfileFail('Nie udało się pobrać informacji o użytkowniku. Spróbuj ponownie później.'));
        })
      );
    })
  );

  @Effect({dispatch: false})
  logout = this.actions$.pipe(
    ofType(LOGOUT),
    tap(__ => {
      localStorage.removeItem('userData');

      this.router.navigate(['/main']);
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
