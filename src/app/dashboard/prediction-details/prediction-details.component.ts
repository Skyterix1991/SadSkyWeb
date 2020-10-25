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
  private selectedUser: User;

  private predictionStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.predictionStoreSubscription = this.store.select('dashboard').subscribe(state => {
      this.selectedUser = state.selectedUser;
      this.selectedPrediction = state.selectedPrediction;
      this.isFetching = state.isPredictionFetching;
    });

    if (!!this.activatedRoute.snapshot.params.predictionId) {
      this.store.dispatch(new GetUserPredictionStart(this.selectedUser.userId, this.activatedRoute.snapshot.params.predictionId));
    }
  }

  ngOnDestroy(): void {
    this.predictionStoreSubscription.unsubscribe();
  }

}
