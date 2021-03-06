import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import {Prediction} from '../../../shared/model/prediction.model';
import {Subscription} from 'rxjs';
import {faClipboardList} from '@fortawesome/free-solid-svg-icons/faClipboardList';
import {PredictionResultService} from '../prediction-result.service';
import {Day} from '../../../shared/model/day.model';
import {User} from '../../../shared/model/user.model';
import {DAY_PART_HOURS} from '../../../shared/config/day.constants';
import {GeneratePredictionResultStart, GetUserPredictionsStart, GetUserPredictionStart} from '../../store/dashboard.actions';

@Component({
  selector: 'app-prediction-result',
  templateUrl: './prediction-result.component.html',
  styleUrls: ['./prediction-result.component.css']
})
export class PredictionResultComponent implements OnInit, OnDestroy {

  faClipboard = faClipboardList;

  selectedPrediction: Prediction;
  selectedUser: User;
  errorMessage: string;

  canGeneratePrediction: boolean;

  isSelectedUserCurrentUser: boolean;

  private currentUser: User;

  private authenticationStoreSubscription: Subscription;
  private predictionStoreSubscription: Subscription;
  private predictionResultGeneratedSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private predictionResultService: PredictionResultService) {
  }

  ngOnInit(): void {
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.currentUser = state.user;
    });
    this.predictionStoreSubscription = this.store.select('dashboard').subscribe(state => {
      this.selectedPrediction = state.selectedPrediction;
      this.errorMessage = state.predictionErrorMessage;
      this.selectedUser = state.selectedUser;

      this.isSelectedUserCurrentUser = this.selectedUser.userId === this.currentUser.userId;

      if (!!this.selectedPrediction && !this.selectedPrediction.depressionResult) {
        this.canGeneratePrediction = this.canGeneratePredictionResult();
      }
    });

    this.predictionResultGeneratedSubscription = this.predictionResultService.predictionResultGeneratedEvent.subscribe(__ => {
      this.store.dispatch(new GetUserPredictionStart(this.selectedUser.userId, this.selectedPrediction.predictionId));
      this.store.dispatch(new GetUserPredictionsStart(this.selectedUser.userId));
    });
  }

  ngOnDestroy(): void {
    this.authenticationStoreSubscription.unsubscribe();
    this.predictionStoreSubscription.unsubscribe();
    this.predictionResultGeneratedSubscription.unsubscribe();
  }

  onViewResult(): void {
    this.predictionResultService.predictionResultViewModalOpenEvent.emit();
  }

  canGeneratePredictionResult(): boolean {
    // If prediction is cancelled
    if (this.selectedPrediction.canceled) {
      return false;
    }

    const currentTime = new Date();

    const expireDays = this.selectedPrediction.expireDays;

    const expireDate = new Date(
      this.selectedPrediction.expireDate[0],
      this.selectedPrediction.expireDate[1] - 1,
      this.selectedPrediction.expireDate[2],
      this.currentUser.wakeHour + (DAY_PART_HOURS * 3),
      0,
      0,
      0
    );

    // Is prediction expired
    if (currentTime > expireDate) {
      return true;
    }

    const lastDay: Day = this.selectedPrediction.days
      .filter(day => day.dayNumber === expireDays - 1)[0]; // Find last day in array

    const currentHour = currentTime.getHours();
    // Calculate last emotion deadline for last day
    const lastEmotionsDeadline = this.selectedUser.wakeHour + DAY_PART_HOURS;

    // Set time to start of current day
    const startOfToday = currentTime;
    startOfToday.setHours(0);
    startOfToday.setMinutes(0);
    startOfToday.setSeconds(0);
    startOfToday.setMilliseconds(0);

    // Is it a prediction expiration day
    if (startOfToday === expireDate) {
      // Are all possible emotions filled for last deadline or is currentHour greater/equal to last deadline hour
      return lastDay.eveningEmotions.length !== 0 || currentHour >= lastEmotionsDeadline;
    }

    return false;
  }

  onResultGenerate(): void {
    this.store.dispatch(new GeneratePredictionResultStart(this.selectedUser.userId, this.selectedPrediction.predictionId));
  }
}
