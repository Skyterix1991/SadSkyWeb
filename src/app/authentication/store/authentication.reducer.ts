import {
  AUTHENTICATION_FAILED,
  AuthenticationActions,
  AUTO_LOGIN_START,
  AUTO_LOGIN_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_START,
  RESET_AUTHENTICATION,
  USER_FETCH_SUCCESS
} from './authentication.actions';
import {UserAuth} from '../../shared/model/user-auth';
import {User} from '../../shared/model/user.model';

export interface State {
  errorMessage: string;
  isAuthenticating: boolean;
  userAuth: UserAuth;
  user: User;
}

const initialState: State = {
  errorMessage: null,
  isAuthenticating: false,
  userAuth: null,
  user: null
};

export function authenticationReducer(state = initialState, action: AuthenticationActions): State {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isAuthenticating: true,
        errorMessage: null
      };
    case LOGIN_START:
      return {
        ...state,
        isAuthenticating: true,
        errorMessage: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userAuth: action.userAuth,
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        user: action.user,
        isAuthenticating: false,
        errorMessage: null
      };
    case AUTHENTICATION_FAILED:
      return {
        ...state,
        isAuthenticating: false,
        errorMessage: action.errorMessage,
        userAuth: null
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        userAuth: null,
        errorMessage: null,
        isAuthenticating: false
      };
    case AUTO_LOGIN_START:
      return {
        ...state,
        user: null,
        userAuth: null,
        errorMessage: null,
        isAuthenticating: true
      };
    case AUTO_LOGIN_SUCCESS:
      return {
        ...state,
        userAuth: action.userAuth,
      };
    case RESET_AUTHENTICATION:
      return {
        ...state,
        user: null,
        userAuth: null,
        errorMessage: null,
        isAuthenticating: false
      };
    default:
      return state;
  }
}
