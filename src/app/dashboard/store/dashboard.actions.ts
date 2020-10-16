import {Action} from '@ngrx/store';
import {Prediction} from '../../shared/model/prediction.model';

export const CLEAR_ERROR_MESSAGE = '[Dashboard] Clear error message';
export const GET_USER_PREDICTIONS_START = '[Dashboard] Get user predictions start';
export const GET_USER_PREDICTIONS_SUCCESS = '[Dashboard] Get user predictions success';
export const GET_USER_PREDICTIONS_FAIL = '[Dashboard] Get user predictions fail';

export const GET_USER_PREDICTION_FAIL = '[Dashboard] Get user prediction fail';
export const GET_USER_PREDICTION_START = '[Dashboard] Get user prediction start';

export const SELECT_PREDICTION = '[Dashboard] Select prediction';
export const CLEAR_SELECTED_PREDICTION = '[Dashboard] Clear selected prediction';

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
  ClearSelectedPrediction;
