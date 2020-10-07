import {ProfileActions, UPDATE_PROFILE_DETAILS_START, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_SUCCESS} from './profile.actions';

export interface State {
  errorMessage: string;
  isFetching: boolean;
}

const initialState: State = {
  errorMessage: null,
  isFetching: false
};

export function profileReducer(state = initialState, action: ProfileActions): State {
  switch (action.type) {
    case UPDATE_PROFILE_DETAILS_START:
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
    default:
      return state;
  }
}
