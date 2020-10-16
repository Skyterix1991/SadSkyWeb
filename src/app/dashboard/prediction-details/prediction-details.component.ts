import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Subscription} from 'rxjs';
import {Prediction} from '../../shared/model/prediction.model';
import {GetUserPredictionStart} from '../store/dashboard.actions';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../shared/model/user.model';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';

@Component({
  selector: 'app-prediction-details',
  templateUrl: './prediction-details.component.html',
  styleUrls: ['./prediction-details.component.css']
})
export class PredictionDetailsComponent implements OnInit, OnDestroy {

  faCircleNotch = faCircleNotch;

  isFetching: boolean;
  selectedPrediction: Prediction;

  predictionStoreSubscription: Subscription;
  authenticationStoreSubscription: Subscription;

  private user: User;

  constructor(private store: Store<fromApp.AppState>, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.user = state.user;
    });
    this.predictionStoreSubscription = this.store.select('dashboard').subscribe(state => {
      this.selectedPrediction = state.selectedPrediction;
      this.isFetching = state.isFetching;
    });

    if (!this.selectedPrediction) {
      this.store.dispatch(new GetUserPredictionStart(this.user.userId, this.activatedRoute.snapshot.params.predictionId));
    }
  }

  ngOnDestroy(): void {
    this.predictionStoreSubscription.unsubscribe();
  }

}
