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

  predictionStoreSubscription: Subscription;

  private selectedPrediction: Prediction;
  private isMenuOpened = true;

  constructor(private renderer: Renderer2, private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.predictionStoreSubscription = this.store.select('dashboard').subscribe(state => {
      this.selectedPrediction = state.selectedPrediction;

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
}
