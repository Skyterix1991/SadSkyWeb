import {
  ACCEPT_USER_PENDING_INVITE_FAIL,
  ACCEPT_USER_PENDING_INVITE_START,
  CANCEL_USER_SENT_INVITE_FAIL,
  CANCEL_USER_SENT_INVITE_START,
  CANCEL_USER_SENT_INVITE_SUCCESS,
  CLEAR_ERROR_MESSAGE,
  GET_USER_FRIENDS_FAIL,
  GET_USER_FRIENDS_START,
  GET_USER_FRIENDS_SUCCESS,
  GET_USER_FRIENDS_TO_FAIL,
  GET_USER_FRIENDS_TO_START,
  GET_USER_FRIENDS_TO_SUCCESS,
  GET_USER_PENDING_INVITES_FAIL,
  GET_USER_PENDING_INVITES_START,
  GET_USER_PENDING_INVITES_SUCCESS,
  GET_USER_SENT_INVITES_FAIL,
  GET_USER_SENT_INVITES_START,
  GET_USER_SENT_INVITES_SUCCESS,
  ProfileActions,
  REFUSE_USER_PENDING_INVITE_FAIL,
  REFUSE_USER_PENDING_INVITE_START,
  REMOVE_USER_FRIEND_FAIL,
  REMOVE_USER_FRIEND_START,
  REMOVE_USER_FRIEND_SUCCESS,
  REMOVE_USER_FRIEND_TO_FAIL,
  REMOVE_USER_FRIEND_TO_START,
  REMOVE_USER_FRIEND_TO_SUCCESS,
  SEND_USER_INVITE_FAIL,
  SEND_USER_INVITE_START,
  UPDATE_PROFILE_DETAILS_START,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_PRIVACY_EMAIL_START,
  UPDATE_PROFILE_PRIVACY_PASSWORD_START,
  UPDATE_PROFILE_SETTINGS_START,
  UPDATE_PROFILE_SUCCESS
} from './profile.actions';
import {User} from '../../shared/model/user.model';

export interface State {
  errorMessage: string;
  isFetching: boolean;
  isUserSentInvitesFetching: boolean;
  isUserPendingInvitesFetching: boolean;
  isUserFriendsFetching: boolean;
  isUserFriendsToFetching: boolean;
  sentInvites: User[];
  pendingInvites: User[];
  friends: User[];
  friendsTo: User[];
}

const initialState: State = {
  errorMessage: null,
  isFetching: false,
  isUserSentInvitesFetching: false,
  isUserPendingInvitesFetching: false,
  isUserFriendsFetching: false,
  isUserFriendsToFetching: false,
  sentInvites: [],
  pendingInvites: [],
  friends: [],
  friendsTo: []
};

export function profileReducer(state = initialState, action: ProfileActions): State {
  switch (action.type) {
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: null
      };
    case UPDATE_PROFILE_PRIVACY_EMAIL_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null
      };
    case UPDATE_PROFILE_PRIVACY_PASSWORD_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null
      };
    case UPDATE_PROFILE_DETAILS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null
      };
    case UPDATE_PROFILE_SETTINGS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null
      };
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case GET_USER_SENT_INVITES_START:
      return {
        ...state,
        isFetching: true,
        isUserSentInvitesFetching: true,
        errorMessage: null,
        sentInvites: []
      };
    case GET_USER_SENT_INVITES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isUserSentInvitesFetching: false,
        sentInvites: action.sentInvites
      };
    case GET_USER_SENT_INVITES_FAIL:
      return {
        ...state,
        isFetching: true,
        isUserSentInvitesFetching: false,
        errorMessage: null,
        sentInvites: []
      };
    case CANCEL_USER_SENT_INVITE_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null
      };
    case CANCEL_USER_SENT_INVITE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sentInvites: state.sentInvites.slice().filter(userInvite => userInvite.userId !== action.friendId)
      };
    case CANCEL_USER_SENT_INVITE_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case SEND_USER_INVITE_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null
      };
    case SEND_USER_INVITE_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case GET_USER_PENDING_INVITES_START:
      return {
        ...state,
        isFetching: true,
        isUserPendingInvitesFetching: true,
        errorMessage: null,
        pendingInvites: []
      };
    case GET_USER_PENDING_INVITES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isUserPendingInvitesFetching: false,
        pendingInvites: action.pendingInvites
      };
    case GET_USER_PENDING_INVITES_FAIL:
      return {
        ...state,
        isFetching: true,
        isUserPendingInvitesFetching: false,
        errorMessage: null,
        sentInvites: []
      };
    case ACCEPT_USER_PENDING_INVITE_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null
      };
    case ACCEPT_USER_PENDING_INVITE_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case REFUSE_USER_PENDING_INVITE_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null
      };
    case REFUSE_USER_PENDING_INVITE_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case GET_USER_FRIENDS_START:
      return {
        ...state,
        isFetching: true,
        isUserFriendsFetching: true,
        errorMessage: null,
        friends: []
      };
    case GET_USER_FRIENDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isUserFriendsFetching: false,
        friends: action.friends
      };
    case GET_USER_FRIENDS_FAIL:
      return {
        ...state,
        isFetching: true,
        isUserFriendsFetching: false,
        errorMessage: null,
        friends: []
      };
    case REMOVE_USER_FRIEND_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null
      };
    case REMOVE_USER_FRIEND_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case REMOVE_USER_FRIEND_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: state.friends.slice().filter(friend => friend.userId !== action.friendId)
      };
    case GET_USER_FRIENDS_TO_START:
      return {
        ...state,
        isFetching: true,
        isUserFriendsToFetching: true,
        errorMessage: null,
        friendsTo: []
      };
    case GET_USER_FRIENDS_TO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isUserFriendsToFetching: false,
        friendsTo: action.friendsTo
      };
    case GET_USER_FRIENDS_TO_FAIL:
      return {
        ...state,
        isFetching: true,
        isUserFriendsToFetching: false,
        errorMessage: null,
        friendsTo: []
      };
    case REMOVE_USER_FRIEND_TO_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: null
      };
    case REMOVE_USER_FRIEND_TO_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.errorMessage
      };
    case REMOVE_USER_FRIEND_TO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friendsTo: state.friendsTo.slice().filter(friend => friend.userId !== action.friendId)
      };
    default:
      return state;
  }
}
