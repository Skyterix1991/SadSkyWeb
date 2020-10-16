import {ActionReducerMap} from '@ngrx/store';

import * as fromAuthentication from '../authentication/store/authentication.reducer';
import * as fromProfile from '../profile/store/profile.reducer';
import * as fromDashboard from '../dashboard/store/dashboard.reducer';

export interface AppState {
  authentication: fromAuthentication.State;
  profile: fromProfile.State;
  dashboard: fromDashboard.State
}

export const appReducerMap: ActionReducerMap<AppState> = {
  authentication: fromAuthentication.authenticationReducer,
  profile: fromProfile.profileReducer,
  dashboard: fromDashboard.dashboardReducer
};
