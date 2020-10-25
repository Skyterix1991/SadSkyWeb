import {
  CLEAR_ERROR_MESSAGE,
  CLEAR_SELECTED_PREDICTION,
  DashboardActions,
  GENERATE_PREDICTION_RESULT_FAIL,
  GENERATE_PREDICTION_RESULT_START,
  GENERATE_PREDICTION_RESULT_SUCCESS,
  GET_USER_FRIENDS_TO_FAIL,
  GET_USER_FRIENDS_TO_START,
  GET_USER_FRIENDS_TO_SUCCESS,
  GET_USER_PREDICTION_FAIL,
  GET_USER_PREDICTION_START,
  GET_USER_PREDICTIONS_FAIL,
  GET_USER_PREDICTIONS_START,
  GET_USER_PREDICTIONS_SUCCESS,
  REPLACE_PREDICTION_DAY_EMOTIONS_FAIL,
  REPLACE_PREDICTION_DAY_EMOTIONS_START,
  REPLACE_PREDICTION_DAY_EMOTIONS_SUCCESS,
  SELECT_PREDICTION,
  SELECT_USER_FAIL,
  SELECT_USER_START,
  SELECT_USER_SUCCESS
} from './dashboard.actions';
import {Prediction} from '../../shared/model/prediction.model';
import {User} from '../../shared/model/user.model';

export interface State {
  predictionErrorMessage: string;
  predictionsErrorMessage: string;
  replaceEmotionsErrorMessage: string;
  userErrorMessage: string;
  dayPartEmotionsEditErrorMessage: string;
  arePredictionsFetching: boolean;
  isPredictionFetching: boolean;
  isUserFetching: boolean;
  predictions: Prediction[];
  selectedPrediction: Prediction;
  selectedUser: User;
  userFriendsTo: User[];
}

const initialState: State = {
  predictionErrorMessage: null,
  predictionsErrorMessage: null,
  replaceEmotionsErrorMessage: null,
  dayPartEmotionsEditErrorMessage: null,
  userErrorMessage: null,
  arePredictionsFetching: false,
  isPredictionFetching: false,
  isUserFetching: false,
  predictions: [],
  selectedPrediction: null,
  selectedUser: null,
  userFriendsTo: []
};

export function dashboardReducer(state = initialState, action: DashboardActions): State {
  switch (action.type) {
    case GENERATE_PREDICTION_RESULT_SUCCESS:
      return {
        ...state,
        isPredictionFetching: false,
      };
    case GENERATE_PREDICTION_RESULT_START:
      return {
        ...state,
        predictionErrorMessage: null,
        isPredictionFetching: true,
      };
    case GENERATE_PREDICTION_RESULT_FAIL:
      return {
        ...state,
        predictionErrorMessage: action.errorMessage,
        isPredictionFetching: false
      };
    case REPLACE_PREDICTION_DAY_EMOTIONS_FAIL:
      return {
        ...state,
        dayPartEmotionsEditErrorMessage: action.errorMessage,
        isPredictionFetching: false,
      };
    case REPLACE_PREDICTION_DAY_EMOTIONS_SUCCESS:
      return {
        ...state,
        isPredictionFetching: false,
      };
    case REPLACE_PREDICTION_DAY_EMOTIONS_START:
      return {
        ...state,
        predictionsErrorMessage: null,
        isPredictionFetching: true,
      };
    case CLEAR_SELECTED_PREDICTION:
      return {
        ...state,
        selectedPrediction: null
      };
    case GET_USER_PREDICTION_FAIL:
      return {
        ...state,
        replaceEmotionsErrorMessage: action.errorMessage,
        isPredictionFetching: false,
      };
    case GET_USER_PREDICTION_START:
      return {
        ...state,
        replaceEmotionsErrorMessage: null,
        isPredictionFetching: true,
        selectedPrediction: null
      };
    case SELECT_USER_FAIL:
      return {
        ...state,
        userErrorMessage: action.errorMessage,
        isUserFetching: false
      };
    case SELECT_USER_START:
      return {
        ...state,
        isUserFetching: true
      };
    case SELECT_USER_SUCCESS:
      return {
        ...state,
        selectedUser: action.user,
        isUserFetching: false
      };
    case SELECT_PREDICTION:
      return {
        ...state,
        isPredictionFetching: false,
        selectedPrediction: action.prediction
      };
    case GET_USER_PREDICTIONS_FAIL:
      return {
        ...state,
        predictionsErrorMessage: action.errorMessage,
        arePredictionsFetching: false,
      };
    case GET_USER_PREDICTIONS_SUCCESS:
      return {
        ...state,
        arePredictionsFetching: false,
        predictions: action.predictions
      };
    case GET_USER_PREDICTIONS_START:
      return {
        ...state,
        predictions: [],
        predictionsErrorMessage: null,
        arePredictionsFetching: true,
      };
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        replaceEmotionsErrorMessage: null,
        predictionsErrorMessage: null,
        dayPartEmotionsEditErrorMessage: null
      };
    case GET_USER_FRIENDS_TO_START:
      return {
        ...state,
        userFriendsTo: []
      };
    case GET_USER_FRIENDS_TO_SUCCESS:
      return {
        ...state,
        userFriendsTo: action.userFriendsTo
      };
    case GET_USER_FRIENDS_TO_FAIL:
      return {
        ...state,
        predictionsErrorMessage: action.errorMessage
      };
    default:
      return state;
  }
}
