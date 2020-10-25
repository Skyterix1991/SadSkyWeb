import {Component, OnDestroy, OnInit} from '@angular/core';
import {Prediction} from '../../shared/model/prediction.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Subscription} from 'rxjs';
import {ClearErrorMessage, GetUserPredictionsStart} from '../store/dashboard.actions';
import {User} from '../../shared/model/user.model';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-prediction-list',
  templateUrl: './prediction-list.component.html',
  styleUrls: ['./prediction-list.component.css']
})
export class PredictionListComponent implements OnInit, OnDestroy {

  predictions: Prediction[];
  isFetching: boolean;

  faCircleNotch = faCircleNotch;

  private selectedUser: User;

  private predictionStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.store.dispatch(new ClearErrorMessage());
    this.predictionStoreSubscription = this.store.select('dashboard').subscribe(state => {
      if (!!state.selectedUser && this.selectedUser !== state.selectedUser) {
        this.store.dispatch(new GetUserPredictionsStart(state.selectedUser.userId));
      }

      this.predictions = state.predictions;
      this.selectedUser = state.selectedUser;
      this.isFetching = state.arePredictionsFetching;
    });

    if (!!this.activatedRoute.snapshot.params.userId) {
      this.store.dispatch(new GetUserPredictionsStart(this.activatedRoute.snapshot.params.userId));
    }
  }

  ngOnDestroy(): void {
    this.predictionStoreSubscription.unsubscribe();
  }

}
