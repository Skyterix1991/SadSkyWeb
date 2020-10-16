import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {catchError, map, switchMap} from 'rxjs/operators';
import {GET_USER_PREDICTION_URI, GET_USER_PREDICTIONS_URI, GET_USER_URL} from '../../shared/config/api.constants';
import {of} from 'rxjs';
import {
  GET_USER_PREDICTION_START,
  GET_USER_PREDICTIONS_START,
  GetUserPredictionFail,
  GetUserPredictionsFail,
  GetUserPredictionsStart,
  GetUserPredictionsSuccess,
  GetUserPredictionStart,
  SelectPrediction
} from './dashboard.actions';
import {Prediction} from '../../shared/model/prediction.model';

@Injectable()
export class DashboardEffects {

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

  constructor(
    private actions$: Actions,
    private httpClient: HttpClient
  ) {
  }
}
