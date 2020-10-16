import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Prediction} from '../../../shared/model/prediction.model';

@Component({
  selector: 'app-prediction-day',
  templateUrl: './prediction-day.component.html',
  styleUrls: ['./prediction-day.component.css']
})
export class PredictionDayComponent implements OnInit {

  selectedPrediction: Prediction;

  dayNumber: number;

  predictionStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.predictionStoreSubscription = this.store.select('dashboard').subscribe(state => {
      this.selectedPrediction = state.selectedPrediction;
    });
    this.activatedRoute.params.subscribe(params => {
      this.dayNumber = params.dayNumber;
    });
  }

}
