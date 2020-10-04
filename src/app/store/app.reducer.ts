import {ActionReducerMap} from '@ngrx/store';

import * as fromAuthentication from '../authentication/store/authentication.reducer';

export interface AppState {
  authentication: fromAuthentication.State;
}

export const appReducerMap: ActionReducerMap<AppState> = {
  authentication: fromAuthentication.authenticationReducer
};
