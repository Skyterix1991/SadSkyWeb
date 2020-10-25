import {Action} from '@ngrx/store';
import {Prediction} from '../../shared/model/prediction.model';
import {User} from '../../shared/model/user.model';

export const CLEAR_ERROR_MESSAGE = '[Dashboard] Clear error message';
export const GET_USER_PREDICTIONS_START = '[Dashboard] Get user predictions start';
export const GET_USER_PREDICTIONS_SUCCESS = '[Dashboard] Get user predictions success';
export const GET_USER_PREDICTIONS_FAIL = '[Dashboard] Get user predictions fail';

export const GET_USER_PREDICTION_FAIL = '[Dashboard] Get user prediction fail';
export const GET_USER_PREDICTION_START = '[Dashboard] Get user prediction start';

export const REPLACE_PREDICTION_DAY_EMOTIONS_START = '[Dashboard] Replace prediction day emotions start';
export const REPLACE_PREDICTION_DAY_EMOTIONS_SUCCESS = '[Dashboard] Replace prediction day emotions success';
export const REPLACE_PREDICTION_DAY_EMOTIONS_FAIL = '[Dashboard] Replace prediction day emotions fail';

export const GENERATE_PREDICTION_RESULT_START = '[Dashboard] Generate prediction result start';
export const GENERATE_PREDICTION_RESULT_FAIL = '[Dashboard] Generate prediction result fail';
export const GENERATE_PREDICTION_RESULT_SUCCESS = '[Dashboard] Generate prediction result success';

export const SELECT_USER_START = '[Dashboard] Select user start';
export const SELECT_USER_FAIL = '[Dashboard] Select user fail';
export const SELECT_USER_SUCCESS = '[Dashboard] Select user success';

export const SELECT_PREDICTION = '[Dashboard] Select prediction';
export const CLEAR_SELECTED_PREDICTION = '[Dashboard] Clear selected prediction';

export const GET_USER_FRIENDS_TO_START = '[Dashboard] Get user friends to start';
export const GET_USER_FRIENDS_TO_SUCCESS = '[Dashboard] Get user friends to success';
export const GET_USER_FRIENDS_TO_FAIL = '[Dashboard] Get user friends to fail';

export class SelectUserFail implements Action {
  readonly type = SELECT_USER_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class SelectUserStart implements Action {
  readonly type = SELECT_USER_START;

  constructor(public userId: string) {
  }
}

export class SelectUserSuccess implements Action {
  readonly type = SELECT_USER_SUCCESS;

  constructor(public user: User) {
  }
}

export class GetUserFriendsToFail implements Action {
  readonly type = GET_USER_FRIENDS_TO_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class GetUserFriendsToSuccess implements Action {
  readonly type = GET_USER_FRIENDS_TO_SUCCESS;

  constructor(public userFriendsTo: User[]) {
  }
}

export class GetUserFriendsToStart implements Action {
  readonly type = GET_USER_FRIENDS_TO_START;

  constructor(public userId: string) {
  }
}

export class GeneratePredictionResultSuccess implements Action {
  readonly type = GENERATE_PREDICTION_RESULT_SUCCESS;

  constructor() {
  }
}

export class GeneratePredictionResultStart implements Action {
  readonly type = GENERATE_PREDICTION_RESULT_START;

  constructor(public userId: string, public predictionId: string) {
  }
}

export class GeneratePredictionResultFail implements Action {
  readonly type = GENERATE_PREDICTION_RESULT_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class ReplacePredictionDayEmotionsStart implements Action {
  readonly type = REPLACE_PREDICTION_DAY_EMOTIONS_START;

  constructor(public userId: string, public predictionId: string, public emotions: string[]) {
  }
}

export class ReplacePredictionDayEmotionsFail implements Action {
  readonly type = REPLACE_PREDICTION_DAY_EMOTIONS_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class ReplacePredictionDayEmotionsSuccess implements Action {
  readonly type = REPLACE_PREDICTION_DAY_EMOTIONS_SUCCESS;

  constructor(public userId: string, public predictionId: string) {
  }
}


export class ClearSelectedPrediction implements Action {
  readonly type = CLEAR_SELECTED_PREDICTION;

  constructor() {
  }
}

export class GetUserPredictionStart implements Action {
  readonly type = GET_USER_PREDICTION_START;

  constructor(public userId: string, public predictionId: string) {
  }
}

export class GetUserPredictionFail implements Action {
  readonly type = GET_USER_PREDICTION_FAIL;

  constructor(public errorMessage: string) {
  }
}

export class SelectPrediction implements Action {
  readonly type = SELECT_PREDICTION;

  constructor(public prediction: Prediction) {
  }
}

export class ClearErrorMessage implements Action {
  readonly type = CLEAR_ERROR_MESSAGE;

  constructor() {
  }
}

export class GetUserPredictionsStart implements Action {
  readonly type = GET_USER_PREDICTIONS_START;

  constructor(public userId: string) {
  }
}

export class GetUserPredictionsSuccess implements Action {
  readonly type = GET_USER_PREDICTIONS_SUCCESS;

  constructor(public predictions: Prediction[]) {
  }
}

export class GetUserPredictionsFail implements Action {
  readonly type = GET_USER_PREDICTIONS_FAIL;

  constructor(public errorMessage: string) {
  }
}

export type DashboardActions =
  ClearErrorMessage |
  GetUserPredictionsStart |
  GetUserPredictionsSuccess |
  GetUserPredictionsFail |
  SelectPrediction |
  GetUserPredictionStart |
  GetUserPredictionFail |
  ClearSelectedPrediction |
  ReplacePredictionDayEmotionsFail |
  ReplacePredictionDayEmotionsStart |
  ReplacePredictionDayEmotionsSuccess |
  GeneratePredictionResultFail |
  GeneratePredictionResultStart |
  GeneratePredictionResultSuccess |
  SelectUserStart |
  SelectUserFail |
  SelectUserSuccess |
  GetUserFriendsToStart |
  GetUserFriendsToFail |
  GetUserFriendsToSuccess;
