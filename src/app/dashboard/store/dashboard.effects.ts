import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {
  GENERATE_PREDICTION_RESULT_URI,
  GET_USER_PREDICTION_URI,
  GET_USER_PREDICTIONS_URI,
  GET_USER_URL,
  SET_EMOTIONS_URI
} from '../../shared/config/api.constants';
import {of} from 'rxjs';
import {
  GENERATE_PREDICTION_RESULT_START,
  GENERATE_PREDICTION_RESULT_SUCCESS,
  GeneratePredictionResultStart,
  GeneratePredictionResultSuccess,
  GET_USER_PREDICTION_START,
  GET_USER_PREDICTIONS_START,
  GetUserPredictionFail,
  GetUserPredictionsFail,
  GetUserPredictionsStart,
  GetUserPredictionsSuccess,
  GetUserPredictionStart,
  REPLACE_PREDICTION_DAY_EMOTIONS_START,
  REPLACE_PREDICTION_DAY_EMOTIONS_SUCCESS,
  ReplacePredictionDayEmotionsFail,
  ReplacePredictionDayEmotionsStart,
  ReplacePredictionDayEmotionsSuccess,
  SelectPrediction
} from './dashboard.actions';
import {Prediction} from '../../shared/model/prediction.model';
import {PredictionResultService} from '../prediction-details/prediction-result.service';

@Injectable()
export class DashboardEffects {

  @Effect()
  generatePredictionResultStart = this.actions$.pipe(
    ofType(GENERATE_PREDICTION_RESULT_START),
    switchMap((state: GeneratePredictionResultStart) => {
      return this.httpClient.post(
        GET_USER_URL +
        state.prediction.owner.userId +
        GET_USER_PREDICTION_URI +
        state.prediction.predictionId +
        GENERATE_PREDICTION_RESULT_URI, {}).pipe(
        map(__ => {
          return new GeneratePredictionResultSuccess();
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new ReplacePredictionDayEmotionsFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  replaceDayEmotionsSuccess = this.actions$.pipe(
    ofType(REPLACE_PREDICTION_DAY_EMOTIONS_SUCCESS),
    switchMap((state: ReplacePredictionDayEmotionsSuccess) => {
      return of(new GetUserPredictionStart(state.userId, state.predictionId));
    })
  );

  @Effect()
  replaceDayEmotionsStart = this.actions$.pipe(
    ofType(REPLACE_PREDICTION_DAY_EMOTIONS_START),
    switchMap((state: ReplacePredictionDayEmotionsStart) => {
      return this.httpClient.put(
        GET_USER_URL +
        state.prediction.owner.userId +
        GET_USER_PREDICTION_URI +
        state.prediction.predictionId +
        SET_EMOTIONS_URI,
        {
          emotions: state.emotions
        }).pipe(
        map(__ => {
          return new ReplacePredictionDayEmotionsSuccess(state.prediction.owner.userId, state.prediction.predictionId);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new ReplacePredictionDayEmotionsFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  getUserPredictionsStart = this.actions$.pipe(
    ofType(GET_USER_PREDICTIONS_START),
    switchMap((state: GetUserPredictionsStart) => {
      return this.httpClient.get<Prediction[]>(GET_USER_URL + state.userId + GET_USER_PREDICTIONS_URI).pipe(
        map((predictions: Prediction[]) => {
          return new GetUserPredictionsSuccess(predictions);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new GetUserPredictionsFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect()
  getUserPredictionStart = this.actions$.pipe(
    ofType(GET_USER_PREDICTION_START),
    switchMap((state: GetUserPredictionStart) => {
      return this.httpClient.get<Prediction>(GET_USER_URL + state.userId + GET_USER_PREDICTION_URI + state.predictionId).pipe(
        map((prediction: Prediction) => {
          return new SelectPrediction(prediction);
        }),
        catchError(error => {
          switch (error.status) {
            default:
              return of(new GetUserPredictionFail('Coś poszło nie tak. Spróbuj ponownie później.'));
          }
        })
      );
    })
  );

  @Effect({dispatch: false})
  generatePredictionResultSuccess = this.actions$.pipe(
    ofType(GENERATE_PREDICTION_RESULT_SUCCESS),
    tap(__ => {
      console.log('success');
      setTimeout(() => {
        this.predictionResultService.predictionResultGeneratedEvent.emit();

      });
    })
  );

  constructor(
    private predictionResultService: PredictionResultService,
    private actions$: Actions,
    private httpClient: HttpClient
  ) {
  }
}
