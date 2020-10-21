import {Action} from '@ngrx/store';
import {User} from '../../shared/model/user.model';

export const UPDATE_PROFILE_DETAILS_START = '[Profile] Update profile details start';
export const UPDATE_PROFILE_SETTINGS_START = '[Profile] Update profile settings start';
export const UPDATE_PROFILE_PRIVACY_EMAIL_START = '[Profile] Update profile privacy email start';
export const UPDATE_PROFILE_PRIVACY_PASSWORD_START = '[Profile] Update profile privacy password start';
export const UPDATE_PROFILE_FAIL = '[Profile] Update profile fail';
export const UPDATE_PROFILE_SUCCESS = '[Profile] Update profile success';
export const CLEAR_ERROR_MESSAGE = '[Profile] Clear error message';

export const GET_USER_SENT_INVITES_START = '[Profile] Get user sent invites start';
export const GET_USER_SENT_INVITES_SUCCESS = '[Profile] Get user sent invites success';
export const GET_USER_SENT_INVITES_FAIL = '[Profile] Get user sent invites fail';

export const CANCEL_USER_SENT_INVITE_START = '[Profile] Cancel user sent invite start';
export const CANCEL_USER_SENT_INVITE_FAIL = '[Profile] Cancel user sent invite fail';
export const CANCEL_USER_SENT_INVITE_SUCCESS = '[Profile] Cancel user sent invite success';

export const SEND_USER_INVITE_START = '[Profile] Send user invite start';
export const SEND_USER_INVITE_FAIL = '[Profile] Send user invite fail';

export const GET_USER_PENDING_INVITES_START = '[Profile] Get user pending invites start';
export const GET_USER_PENDING_INVITES_SUCCESS = '[Profile] Get user pending invites success';
export const GET_USER_PENDING_INVITES_FAIL = '[Profile] Get user pending invites fail';

export const REFUSE_USER_PENDING_INVITE_FAIL = '[Profile] Refuse user pending invite fail';
export const REFUSE_USER_PENDING_INVITE_START = '[Profile] Refuse user pending invite start';

export const ACCEPT_USER_PENDING_INVITE_FAIL = '[Profile] Accept user pending invite fail';
export const ACCEPT_USER_PENDING_INVITE_START = '[Profile] Accept user pending invite start';

export const GET_USER_FRIENDS_START = '[Profile] Get user friends start';
export const GET_USER_FRIENDS_SUCCESS = '[Profile] Get user friends success';
export const GET_USER_FRIENDS_FAIL = '[Profile] Get user friends fail';

export const REMOVE_USER_FRIEND_START = '[Profile] Remove user friend start';
export const REMOVE_USER_FRIEND_SUCCESS = '[Profile] Remove user friend success';
export const REMOVE_USER_FRIEND_FAIL = '[Profile] Remove user friend fail';

export const GET_USER_FRIENDS_TO_START = '[Profile] Get user friends to start';
export const GET_USER_FRIENDS_TO_SUCCESS = '[Profile] Get user friends to success';
export const GET_USER_FRIENDS_TO_FAIL = '[Profile] Get user friends to fail';

export const REMOVE_USER_FRIEND_TO_START = '[Profile] Remove user friend to start';
export const REMOVE_USER_FRIEND_TO_SUCCESS = '[Profile] Remove user friend to success';
export const REMOVE_USER_FRIEND_TO_FAIL = '[Profile] Remove user friend to fail';


export class RemoveUserFriendToStart implements Action {
  readonly type = REMOVE_USER_FRIEND_TO_START;

  constructor(public currentUserId: string, public friendId: string) {
  }
}

export class RemoveUserFriendToSuccess implements Action {
  readonly type = REMOVE_USER_FRIEND_TO_SUCCESS;

  constructor(public friendId: string) {
  }
}

export class RemoveUserFriendToFail implements Action {
  readonly type = REMOVE_USER_FRIEND_TO_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class GetUserFriendsToStart implements Action {
  readonly type = GET_USER_FRIENDS_TO_START;

  constructor(public userId: string) {
  }
}

export class GetUserFriendsToSuccess implements Action {
  readonly type = GET_USER_FRIENDS_TO_SUCCESS;

  constructor(public friendsTo: User[]) {
  }
}

export class GetUserFriendsToFail implements Action {
  readonly type = GET_USER_FRIENDS_TO_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class RemoveUserFriendStart implements Action {
  readonly type = REMOVE_USER_FRIEND_START;

  constructor(public currentUserId: string, public friendId: string) {
  }
}

export class RemoveUserFriendSuccess implements Action {
  readonly type = REMOVE_USER_FRIEND_SUCCESS;

  constructor(public friendId: string) {
  }
}

export class RemoveUserFriendFail implements Action {
  readonly type = REMOVE_USER_FRIEND_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class GetUserFriendsStart implements Action {
  readonly type = GET_USER_FRIENDS_START;

  constructor(public userId: string) {
  }
}

export class GetUserFriendsSuccess implements Action {
  readonly type = GET_USER_FRIENDS_SUCCESS;

  constructor(public friends: User[]) {
  }
}

export class GetUserFriendsFail implements Action {
  readonly type = GET_USER_FRIENDS_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class AcceptUserPendingInviteFail implements Action {
  readonly type = ACCEPT_USER_PENDING_INVITE_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class AcceptUserPendingInviteStart implements Action {
  readonly type = ACCEPT_USER_PENDING_INVITE_START;

  constructor(public currentUserId: string, public friendId: string) {
  }
}

export class RefuseUserPendingInviteFail implements Action {
  readonly type = REFUSE_USER_PENDING_INVITE_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class RefuseUserPendingInviteStart implements Action {
  readonly type = REFUSE_USER_PENDING_INVITE_START;

  constructor(public currentUserId: string, public friendId: string) {
  }
}

export class GetUserPendingInvitesStart implements Action {
  readonly type = GET_USER_PENDING_INVITES_START;

  constructor(public userId: string) {
  }
}

export class GetUserPendingInvitesSuccess implements Action {
  readonly type = GET_USER_PENDING_INVITES_SUCCESS;

  constructor(public pendingInvites: User[]) {
  }
}

export class GetUserPendingInvitesFail implements Action {
  readonly type = GET_USER_PENDING_INVITES_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class SendUserInviteFail implements Action {
  readonly type = SEND_USER_INVITE_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class SendUserInviteStart implements Action {
  readonly type = SEND_USER_INVITE_START;

  constructor(public currentUserId: string, public friendId: string) {
  }
}

export class CancelUserSentInviteFail implements Action {
  readonly type = CANCEL_USER_SENT_INVITE_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class CancelUserSentInviteSuccess implements Action {
  readonly type = CANCEL_USER_SENT_INVITE_SUCCESS;

  constructor(public friendId: string) {
  }
}

export class CancelUserSentInviteStart implements Action {
  readonly type = CANCEL_USER_SENT_INVITE_START;

  constructor(public currentUserId: string, public friendId: string) {
  }
}

export class GetUserSentInvitesStart implements Action {
  readonly type = GET_USER_SENT_INVITES_START;

  constructor(public userId: string) {
  }
}

export class GetUserSentInvitesSuccess implements Action {
  readonly type = GET_USER_SENT_INVITES_SUCCESS;

  constructor(public sentInvites: User[]) {
  }
}

export class GetUserSentInvitesFail implements Action {
  readonly type = GET_USER_SENT_INVITES_FAIL;

  constructor(public errorMessage: string) {
  }
}

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

export class UpdateProfileSettingsStart implements Action {
  readonly type = UPDATE_PROFILE_SETTINGS_START;

  constructor(public userId: string, public wakeHour: number) {
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
  UpdateProfileSettingsStart |
  UpdateProfileFail |
  UpdateProfileSuccess |
  UpdateProfilePrivacyEmailStart |
  UpdateProfilePrivacyPasswordStart |
  ClearErrorMessage |
  GetUserSentInvitesStart |
  GetUserSentInvitesSuccess |
  GetUserSentInvitesFail |
  CancelUserSentInviteFail |
  CancelUserSentInviteStart |
  CancelUserSentInviteSuccess |
  SendUserInviteStart |
  SendUserInviteFail |
  GetUserPendingInvitesStart |
  GetUserPendingInvitesSuccess |
  GetUserPendingInvitesFail |
  AcceptUserPendingInviteFail |
  RefuseUserPendingInviteFail |
  AcceptUserPendingInviteStart |
  RefuseUserPendingInviteStart |
  GetUserFriendsStart |
  GetUserFriendsSuccess |
  GetUserFriendsFail |
  RemoveUserFriendFail |
  RemoveUserFriendStart |
  RemoveUserFriendSuccess |
  GetUserFriendsToStart |
  GetUserFriendsToSuccess |
  GetUserFriendsToFail |
  RemoveUserFriendToFail |
  RemoveUserFriendToStart |
  RemoveUserFriendToSuccess;
