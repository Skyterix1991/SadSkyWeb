import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  ACCEPT_USER_PENDING_INVITE_URI,
  CANCEL_USER_INVITE_URI,
  GET_USER_FRIENDS_TO_URI,
  GET_USER_FRIENDS_URI,
  GET_USER_PENDING_INVITES_URI,
  GET_USER_SENT_INVITES_URI,
  GET_USER_URL,
  REFUSE_USER_PENDING_INVITE_URI,
  REMOVE_USER_FRIEND_TO_URI,
  REMOVE_USER_FRIEND_URI,
  SEND_USER_INVITE_URI,
  UPDATE_USER_URL
} from '../../shared/config/api.constants';
import {of} from 'rxjs';
import {
  ACCEPT_USER_PENDING_INVITE_START,
  AcceptUserPendingInviteFail,
  AcceptUserPendingInviteStart,
  CANCEL_USER_SENT_INVITE_START,
  CancelUserSentInviteFail,
  CancelUserSentInviteStart,
  CancelUserSentInviteSuccess,
  GET_USER_FRIENDS_START,
  GET_USER_FRIENDS_TO_START,
  GET_USER_PENDING_INVITES_START,
  GET_USER_SENT_INVITES_START,
  GetUserFriendsFail,
  GetUserFriendsStart,
  GetUserFriendsSuccess,
  GetUserFriendsToFail,
  GetUserFriendsToStart,
  GetUserFriendsToSuccess,
  GetUserPendingInvitesFail,
  GetUserPendingInvitesStart,
  GetUserPendingInvitesSuccess,
  GetUserSentInvitesFail,
  GetUserSentInvitesStart,
  GetUserSentInvitesSuccess,
  REFUSE_USER_PENDING_INVITE_START,
  RefuseUserPendingInviteFail,
  RefuseUserPendingInviteStart,
  REMOVE_USER_FRIEND_START,
  REMOVE_USER_FRIEND_TO_START,
  RemoveUserFriendFail,
  RemoveUserFriendStart,
  RemoveUserFriendSuccess,
  RemoveUserFriendToFail,
  RemoveUserFriendToStart,
  RemoveUserFriendToSuccess,
  SEND_USER_INVITE_START,
  SendUserInviteFail,
  SendUserInviteStart,
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
import {User} from '../../shared/model/user.model';

@Injectable()
export class ProfileEffects {

  @Effect()
  removeUserFriendToStart = this.actions$.pipe(
    ofType(REMOVE_USER_FRIEND_TO_START),
    switchMap((state: RemoveUserFriendToStart) => {
      return this.httpClient.delete(GET_USER_URL + state.currentUserId + REMOVE_USER_FRIEND_TO_URI + state.friendId).pipe(
        map(__ => {
          return new RemoveUserFriendToSuccess(state.friendId);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new RemoveUserFriendToFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  getUserFriendsToStart = this.actions$.pipe(
    ofType(GET_USER_FRIENDS_TO_START),
    switchMap((state: GetUserFriendsToStart) => {
      return this.httpClient.get<User[]>(GET_USER_URL + state.userId + GET_USER_FRIENDS_TO_URI).pipe(
        map((users: User[]) => {
          return new GetUserFriendsToSuccess(users);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new GetUserFriendsToFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  removeUserFriendStart = this.actions$.pipe(
    ofType(REMOVE_USER_FRIEND_START),
    switchMap((state: RemoveUserFriendStart) => {
      return this.httpClient.delete(GET_USER_URL + state.currentUserId + REMOVE_USER_FRIEND_URI + state.friendId).pipe(
        map(__ => {
          return new RemoveUserFriendSuccess(state.friendId);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new RemoveUserFriendFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  getUserFriendsStart = this.actions$.pipe(
    ofType(GET_USER_FRIENDS_START),
    switchMap((state: GetUserFriendsStart) => {
      return this.httpClient.get<User[]>(GET_USER_URL + state.userId + GET_USER_FRIENDS_URI).pipe(
        map((users: User[]) => {
          return new GetUserFriendsSuccess(users);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new GetUserFriendsFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  acceptUserPendingInviteStart = this.actions$.pipe(
    ofType(ACCEPT_USER_PENDING_INVITE_START),
    switchMap((state: AcceptUserPendingInviteStart) => {
      return this.httpClient.post(GET_USER_URL + state.currentUserId + ACCEPT_USER_PENDING_INVITE_URI + state.friendId, {}).pipe(
        map(__ => {
          return new GetUserPendingInvitesStart(state.currentUserId);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new AcceptUserPendingInviteFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  refuseUserPendingInviteStart = this.actions$.pipe(
    ofType(REFUSE_USER_PENDING_INVITE_START),
    switchMap((state: RefuseUserPendingInviteStart) => {
      return this.httpClient.post(GET_USER_URL + state.currentUserId + REFUSE_USER_PENDING_INVITE_URI + state.friendId, {}).pipe(
        map(__ => {
          return new GetUserPendingInvitesStart(state.currentUserId);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new RefuseUserPendingInviteFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  getUserPendingInvitesStart = this.actions$.pipe(
    ofType(GET_USER_PENDING_INVITES_START),
    switchMap((state: GetUserPendingInvitesStart) => {
      return this.httpClient.get<User[]>(GET_USER_URL + state.userId + GET_USER_PENDING_INVITES_URI).pipe(
        map((users: User[]) => {
          return new GetUserPendingInvitesSuccess(users);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new GetUserPendingInvitesFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  sendUserInviteStart = this.actions$.pipe(
    ofType(SEND_USER_INVITE_START),
    switchMap((state: SendUserInviteStart) => {
      return this.httpClient.post(GET_USER_URL + state.currentUserId + SEND_USER_INVITE_URI + state.friendId, {}).pipe(
        map(__ => {
          return new GetUserSentInvitesStart(state.currentUserId);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new SendUserInviteFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  cancelUserSentInviteStart = this.actions$.pipe(
    ofType(CANCEL_USER_SENT_INVITE_START),
    switchMap((state: CancelUserSentInviteStart) => {
      return this.httpClient.delete(GET_USER_URL + state.currentUserId + CANCEL_USER_INVITE_URI + state.friendId).pipe(
        map(__ => {
          return new CancelUserSentInviteSuccess(state.friendId);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new CancelUserSentInviteFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  getUserSentInvitesStart = this.actions$.pipe(
    ofType(GET_USER_SENT_INVITES_START),
    switchMap((state: GetUserSentInvitesStart) => {
      return this.httpClient.get<User[]>(GET_USER_URL + state.userId + GET_USER_SENT_INVITES_URI).pipe(
        map((users: User[]) => {
          return new GetUserSentInvitesSuccess(users);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new GetUserSentInvitesFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

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
