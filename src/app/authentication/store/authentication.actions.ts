import {Action} from '@ngrx/store';
import {UserAuth} from '../../shared/model/user-auth';
import {User} from '../../shared/model/user.model';

export const REGISTER_START = '[Authentication] Register start';

export const LOGIN_START = '[Authentication] Login start';
export const LOGIN_SUCCESS = '[Authentication] Login success';
export const USER_FETCH_SUCCESS = '[Authentication] User fetch success';
export const AUTHENTICATION_FAILED = '[Authentication] Authentication failed';
export const LOGOUT = '[Authentication] Logout';
export const AUTO_LOGIN_START = '[Authentication] Auto login start';
export const AUTO_LOGIN_SUCCESS = '[Authentication] Auto login success';
export const RESET_AUTHENTICATION = '[Authentication] Reset authentication';

export class RegisterStart implements Action {
  readonly type = REGISTER_START;

  constructor(public firstName: string,
              public lastName: string,
              public birthDay: number[],
              public email: string,
              public password: string) {
  }
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public email: string, public password: string) {
  }
}

export class AutoLoginSuccess implements Action {
  readonly type = AUTO_LOGIN_SUCCESS;

  constructor(public userAuth: UserAuth) {
  }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public userAuth: UserAuth) {
  }
}

export class UserFetchSuccess implements Action {
  readonly type = USER_FETCH_SUCCESS;

  constructor(public user: User) {
  }
}

export class AuthenticationFailed implements Action {
  readonly type = AUTHENTICATION_FAILED;

  constructor(public errorMessage: string) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor() {
  }
}

export class AutoLoginStart implements Action {
  readonly type = AUTO_LOGIN_START;

  constructor() {
  }
}

export class ResetAuthentication implements Action {
  readonly type = RESET_AUTHENTICATION;

  constructor() {
  }
}

export type AuthenticationActions =
  RegisterStart |
  LoginStart |
  LoginSuccess |
  UserFetchSuccess |
  AuthenticationFailed |
  Logout |
  AutoLoginStart |
  AutoLoginSuccess |
  ResetAuthentication;
