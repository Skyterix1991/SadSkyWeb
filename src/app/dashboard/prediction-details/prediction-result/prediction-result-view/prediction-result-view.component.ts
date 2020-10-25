import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {faClipboardList} from '@fortawesome/free-solid-svg-icons/faClipboardList';
import {Prediction} from '../../../../shared/model/prediction.model';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducer';
import {DOCUMENT} from '@angular/common';
import {PredictionResultService} from '../../prediction-result.service';
import {ResultUtils} from '../../../../shared/config/result.constants';

@Component({
  selector: 'app-prediction-result-view',
  templateUrl: './prediction-result-view.component.html',
  styleUrls: ['./prediction-result-view.component.css']
})
export class PredictionResultViewComponent implements OnInit, OnDestroy {

  faClipboard = faClipboardList;

  depressionResultName: string;
  depressionResultDescription: string;

  anxietyResultName: string;
  anxietyResultDescription: string;

  emotionCounts: number[];
  uniqueEmotions: string[];

  selectedPrediction: Prediction;

  private predictionStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private predictionResultService: PredictionResultService,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.predictionStoreSubscription = this.store.select('dashboard').subscribe(state => {
      this.selectedPrediction = state.selectedPrediction;
    });

    this.updateResultDetails();
    this.updateEmotions();

    window.scroll(0, 0);
    this.document.body.classList.add('modal-open');
  }

  onClose(): void {
    this.predictionResultService.predictionResultViewModalCloseEvent.emit();
  }

  ngOnDestroy(): void {
    if (!!this.predictionStoreSubscription) {
      this.predictionStoreSubscription.unsubscribe();
    }

    this.document.body.classList.remove('modal-open');
  }

  private updateResultDetails(): void {
    this.depressionResultName = ResultUtils.getDepressionResultName(this.selectedPrediction.depressionResult);
    this.depressionResultDescription = ResultUtils.getDepressionResultDescription(this.selectedPrediction.depressionResult);

    this.anxietyResultName = ResultUtils.getAnxietyResultName(this.selectedPrediction.anxietyResult);
    this.anxietyResultDescription = ResultUtils.getAnxietyResultDescription(this.selectedPrediction.anxietyResult);
  }

  private updateEmotions(): void {
    let allEmotions: string[] = [];

    this.selectedPrediction.days.forEach(day => {
      allEmotions = allEmotions.concat([...day.morningEmotions, ...day.eveningEmotions, ...day.afternoonEmotions]);
    });

    // Remove duplicates
    this.uniqueEmotions = allEmotions.filter((value, index, self) => self.indexOf(value) === index);

    this.emotionCounts = this.uniqueEmotions.map(uniqueEmotion => {
      return allEmotions.filter(value => value === uniqueEmotion).length;
    });
  }
}
