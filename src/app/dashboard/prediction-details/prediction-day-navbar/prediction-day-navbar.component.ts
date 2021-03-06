import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {Prediction} from '../../../shared/model/prediction.model';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-prediction-day-navbar',
  templateUrl: './prediction-day-navbar.component.html',
  styleUrls: ['./prediction-day-navbar.component.css']
})
export class PredictionDayNavbarComponent implements OnInit, OnDestroy {

  days: number[] = [];

  @ViewChild('menuRef') menuRef: ElementRef;

  menuToggleIcon = faBars;

  currentDayNumber: number;

  private predictionStoreSubscription: Subscription;

  private selectedPrediction: Prediction;
  private isMenuOpened = true;

  constructor(private renderer: Renderer2, private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.predictionStoreSubscription = this.store.select('dashboard').subscribe(state => {
      if ((!this.selectedPrediction && !!state.selectedPrediction) || state.selectedPrediction !== this.selectedPrediction) {
        this.selectedPrediction = state.selectedPrediction;

        this.updateCurrentDayNumber();
      }

      if (!!this.selectedPrediction) {
        // Fill array 1... N...
        this.days = Array.from({length: this.selectedPrediction.days.length}, (_, i) => i + 1);
      }
    });
  }

  ngOnDestroy(): void {
    this.predictionStoreSubscription.unsubscribe();
  }

  onMenuToggle(): void {
    if (this.isMenuOpened) {
      this.menuToggleIcon = faTimes;
      this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'block');
    } else {
      this.menuToggleIcon = faBars;
      this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'none');
    }

    this.isMenuOpened = !this.isMenuOpened;
  }

  private updateCurrentDayNumber(): void {
    const expireDate = new Date(
      this.selectedPrediction.expireDate[0],
      this.selectedPrediction.expireDate[1] - 1,
      this.selectedPrediction.expireDate[2] + 1
    );

    const currentDate = new Date();
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);

    const oneDay = 24 * 60 * 60 * 1000;

    // If is expired don't highlight any
    if (currentDate.getTime() > expireDate.getTime()) {
      this.currentDayNumber = -1;

      return;
    }

    this.currentDayNumber = 7 - Math.round(Math.abs(((currentDate as any) - (expireDate as any)) / oneDay));
  }
}
