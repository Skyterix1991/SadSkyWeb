import {Component, OnDestroy, OnInit} from '@angular/core';
import {Prediction} from '../../shared/model/prediction.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Subscription} from 'rxjs';
import {ClearErrorMessage, GetUserPredictionsStart} from '../store/dashboard.actions';
import {User} from '../../shared/model/user.model';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';

@Component({
  selector: 'app-prediction-list',
  templateUrl: './prediction-list.component.html',
  styleUrls: ['./prediction-list.component.css']
})
export class PredictionListComponent implements OnInit, OnDestroy {

  predictions: Prediction[];
  isFetching: boolean;

  faCircleNotch = faCircleNotch;

  authenticationStoreSubscription: Subscription;
  predictionStoreSubscription: Subscription;

  private user: User;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new ClearErrorMessage());
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.user = state.user;
    });
    this.predictionStoreSubscription = this.store.select('dashboard').subscribe(state => {
      this.predictions = state.predictions;
      this.isFetching = state.isFetching;
    });

    this.store.dispatch(new GetUserPredictionsStart(this.user.userId));
  }

  ngOnDestroy(): void {
    this.predictionStoreSubscription.unsubscribe();
    this.authenticationStoreSubscription.unsubscribe();
  }

}
