import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Prediction} from '../../../shared/model/prediction.model';
import {MONTHS} from '../../../shared/config/date.constants';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import {Subscription} from 'rxjs';
import {SelectPrediction} from '../../store/dashboard.actions';
import {Icon} from '@fortawesome/fontawesome-svg-core';
import {faClipboardList} from '@fortawesome/free-solid-svg-icons/faClipboardList';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'app-prediction-item',
  templateUrl: './prediction-item.component.html',
  styleUrls: ['./prediction-item.component.css']
})
export class PredictionItemComponent implements OnInit, OnDestroy {

  predictionIcon: Icon;

  MONTHS = MONTHS;

  @Input() prediction: Prediction;

  isPredictionSelected: boolean;
  selectedPrediction: Prediction;

  createDate: Date;

  private predictionStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.predictionStoreSubscription = this.store.select('dashboard').subscribe(state => {
      this.selectedPrediction = state.selectedPrediction;

      if (!!this.selectedPrediction) {
        this.isPredictionSelected = this.selectedPrediction.predictionId === this.prediction.predictionId;
      }
    });

    this.createDate = new Date(this.prediction.createDate);
    this.predictionIcon = this.getPredictionIcon();
  }

  isPredictionExpired(): boolean {
    return !!this.prediction.anxietyResult || !!this.prediction.depressionResult;
  }

  onClick(): void {
    this.store.dispatch(new SelectPrediction(this.prediction));
  }

  getPredictionIcon(): any {
    if (this.isPredictionExpired()) {
      return faClipboardList;
    } else if (this.prediction.canceled) {
      return faTimes;
    } else {
      return faClock;
    }

  }

  ngOnDestroy(): void {
    this.predictionStoreSubscription.unsubscribe();
  }
}
