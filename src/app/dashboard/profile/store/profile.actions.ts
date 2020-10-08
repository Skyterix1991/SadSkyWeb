import {Action} from '@ngrx/store';

export const UPDATE_PROFILE_DETAILS_START = '[Profile] Update profile details start';
export const UPDATE_PROFILE_PRIVACY_EMAIL_START = '[Profile] Update profile privacy email start';
export const UPDATE_PROFILE_PRIVACY_PASSWORD_START = '[Profile] Update profile privacy password start';
export const UPDATE_PROFILE_FAIL = '[Profile] Update profile fail';
export const UPDATE_PROFILE_SUCCESS = '[Profile] Update profile success';
export const CLEAR_ERROR_MESSAGE = '[Profile] Clear error message';

export class UpdateProfilePrivacyEmailStart implements Action {
  readonly type = UPDATE_PROFILE_PRIVACY_EMAIL_START;

  constructor(public userId: string, public email: string) {
  }
}

export class UpdateProfilePrivacyPasswordStart implements Action {
  readonly type = UPDATE_PROFILE_PRIVACY_PASSWORD_START;

  constructor(public userId: string, public password: string) {
  }
}

export class UpdateProfileDetailsStart implements Action {
  readonly type = UPDATE_PROFILE_DETAILS_START;

  constructor(public userId: string, public firstName: string, public lastName: string, public birthDay: number[]) {
  }
}

export class UpdateProfileSuccess implements Action {
  readonly type = UPDATE_PROFILE_SUCCESS;

  constructor(public userId: string) {
  }
}

export class UpdateProfileFail implements Action {
  readonly type = UPDATE_PROFILE_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class ClearErrorMessage implements Action {
  readonly type = CLEAR_ERROR_MESSAGE;

  constructor() {
  }
}

export type ProfileActions =
  UpdateProfileDetailsStart |
  UpdateProfileFail |
  UpdateProfileSuccess |
  UpdateProfilePrivacyEmailStart |
  UpdateProfilePrivacyPasswordStart |
  ClearErrorMessage;
