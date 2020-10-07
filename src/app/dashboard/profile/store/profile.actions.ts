import {Action} from '@ngrx/store';

export const UPDATE_PROFILE_DETAILS_START = '[Profile] Update profile details start';
export const UPDATE_PROFILE_FAIL = '[Profile] Update profile fail';
export const UPDATE_PROFILE_SUCCESS = '[Profile] Update profile success';

export class UpdateProfileDetailsStart implements Action {
  readonly type = UPDATE_PROFILE_DETAILS_START;

  constructor(public userId: string, public firstName: string, public lastName: string, public birthDay: number[]) {
  }
}

export class UpdateProfileSuccess implements Action {
  readonly type = UPDATE_PROFILE_SUCCESS;

  constructor() {
  }
}

export class UpdateProfileFail implements Action {
  readonly type = UPDATE_PROFILE_FAIL;

  constructor(public errorMessage: string) {
  }
}

export type ProfileActions = UpdateProfileDetailsStart | UpdateProfileFail | UpdateProfileSuccess;
