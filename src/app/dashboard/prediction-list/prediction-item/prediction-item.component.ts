import {Component, Input, OnInit} from '@angular/core';
import {Prediction} from '../../../shared/model/prediction.model';
import {MONTHS} from '../../../shared/config/date.constants';
import {faClock} from '@fortawesome/free-solid-svg-icons/faClock';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import {Subscription} from 'rxjs';
import {SelectPrediction} from '../../store/dashboard.actions';
import {Icon} from '@fortawesome/fontawesome-svg-core';
import {faClipboardList} from '@fortawesome/free-solid-svg-icons/faClipboardList';

@Component({
  selector: 'app-prediction-item',
  templateUrl: './prediction-item.component.html',
  styleUrls: ['./prediction-item.component.css']
})
export class PredictionItemComponent implements OnInit {

  predictionIcon: Icon;

  MONTHS = MONTHS;

  @Input() prediction: Prediction;

  isPredictionSelected: boolean;
  selectedPrediction: Prediction;

  createDate: Date;
  expireDate: Date;

  predictionStoreSubscription: Subscription;

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
    return this.isPredictionExpired() ? faClipboardList : faClock;
  }
}
