import {
  CLEAR_ERROR_MESSAGE,
  CLEAR_SELECTED_PREDICTION,
  DashboardActions,
  GET_USER_PREDICTION_FAIL,
  GET_USER_PREDICTION_START,
  GET_USER_PREDICTIONS_FAIL,
  GET_USER_PREDICTIONS_START,
  GET_USER_PREDICTIONS_SUCCESS,
  SELECT_PREDICTION
} from './dashboard.actions';
import {Prediction} from '../../shared/model/prediction.model';

export interface State {
  predictionsErrorMessage: string;
  predictionErrorMessage: string;
  isFetching: boolean;
  predictions: Prediction[];
  selectedPrediction: Prediction;
}

const initialState: State = {
  predictionsErrorMessage: null,
  predictionErrorMessage: null,
  isFetching: false,
  predictions: [],
  selectedPrediction: null
};

export function dashboardReducer(state = initialState, action: DashboardActions): State {
  switch (action.type) {
    case CLEAR_SELECTED_PREDICTION:
      return {
        ...state,
        selectedPrediction: null
      };
    case GET_USER_PREDICTION_FAIL:
      return {
        ...state,
        predictionErrorMessage: action.errorMessage,
        isFetching: false
      };
    case GET_USER_PREDICTION_START:
      return {
        ...state,
        predictionErrorMessage: null,
        isFetching: true,
        selectedPrediction: null
      };
    case SELECT_PREDICTION:
      return {
        ...state,
        selectedPrediction: action.prediction
      };
    case GET_USER_PREDICTIONS_FAIL:
      return {
        ...state,
        predictionsErrorMessage: action.errorMessage,
        isFetching: false
      };
    case GET_USER_PREDICTIONS_SUCCESS:
      return {
        ...state,
        predictionsErrorMessage: null,
        isFetching: false,
        predictions: action.predictions
      };
    case GET_USER_PREDICTIONS_START:
      return {
        ...state,
        predictions: [],
        predictionsErrorMessage: null,
        isFetching: true
      };
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        predictionsErrorMessage: null
      };
    default:
      return state;
  }
}
