import {ActionReducerMap} from '@ngrx/store';

import * as fromAuthentication from '../authentication/store/authentication.reducer';
import * as fromProfile from '../dashboard/profile/store/profile.reducer';

export interface AppState {
  authentication: fromAuthentication.State;
  profile: fromProfile.State;
}

export const appReducerMap: ActionReducerMap<AppState> = {
  authentication: fromAuthentication.authenticationReducer,
  profile: fromProfile.profileReducer
};
