import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {faMehBlank} from '@fortawesome/free-solid-svg-icons/faMehBlank';
import {FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../../../store/app.reducer';
import {PredictionDayPartService} from '../prediction-day-part.service';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {DOCUMENT} from '@angular/common';
import {EmotionUtils} from '../../../../../shared/config/emotion.constants';
import {GetUserPredictionsStart, ReplacePredictionDayEmotionsStart} from '../../../../store/dashboard.actions';
import {Prediction} from '../../../../../shared/model/prediction.model';

@Component({
  selector: 'app-prediction-day-part-edit',
  templateUrl: './prediction-day-part-edit.component.html',
  styleUrls: ['./prediction-day-part-edit.component.css']
})
export class PredictionDayPartEditComponent implements OnInit, OnDestroy {

  editEmotionsForm: FormGroup;

  faCircleNotch = faCircleNotch;

  errorMessage: string;
  isFetching: boolean;

  faMeh = faMehBlank;

  @Input() selectedEmotions: string[];
  selectedPrediction: Prediction;

  negativeEmotions: string;
  positiveEmotions: string;
  emotions = EmotionUtils.EMOTIONS;

  predictionStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private predictionDayPart: PredictionDayPartService,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
    this.createEditEmotionsForm();
    this.predictionStoreSubscription = this.store.select('dashboard').subscribe(state => {
      this.selectedPrediction = state.selectedPrediction;
      this.errorMessage = state.dayPartEmotionsEditErrorMessage;
      this.isFetching = state.isPredictionFetching;
    });

    window.scroll(0, 0);
    this.document.body.classList.add('modal-open');
  }

  ngOnDestroy(): void {
    this.predictionStoreSubscription.unsubscribe();

    this.document.body.classList.remove('modal-open');
  }

  onClose(): void {
    this.predictionDayPart.predictionDayPartEditModalCloseEvent.emit();

    this.store.dispatch(new GetUserPredictionsStart(this.selectedPrediction.owner.userId));
  }

  onSubmit(): void {
    this.store.dispatch(new ReplacePredictionDayEmotionsStart(this.selectedPrediction, [...this.selectedEmotions]));
  }

  private createEditEmotionsForm(): void {
    this.editEmotionsForm = new FormGroup({});
  }

  onEmotionClicked(emotion: string): void {
    if (!this.selectedEmotions.includes(emotion)) {
      this.selectedEmotions.push(emotion);
    } else {
      this.selectedEmotions = this.selectedEmotions.filter(item => item !== emotion);
    }
  }
}
