import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {PlaceholderDirective} from '../shared/directive/placeholder.directive';
import {Subscription} from 'rxjs';
import {PredictionDayPartService} from './prediction-details/prediction-day/prediction-day-part/prediction-day-part.service';
import {PredictionDayPartEditComponent} from './prediction-details/prediction-day/prediction-day-part/prediction-day-part-edit/prediction-day-part-edit.component';
import {PredictionResultService} from './prediction-details/prediction-result.service';
import {PredictionResultViewComponent} from './prediction-details/prediction-result/prediction-result-view/prediction-result-view.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild(PlaceholderDirective) placeholderDirective: PlaceholderDirective;

  private predictionDayPartEmotionsEditOpenSubscription: Subscription;
  private predictionDayPartEmotionsEditCloseSubscription: Subscription;

  private predictionResultViewModalOpenEvent: Subscription;
  private predictionResultViewModalCloseEvent: Subscription;

  private viewContainerRef: ViewContainerRef;

  constructor(private predictionDayPartService: PredictionDayPartService,
              private predictionResultService: PredictionResultService,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.predictionDayPartEmotionsEditOpenSubscription =
      this.predictionDayPartService.predictionDayPartEditModalOpenEvent.subscribe(emotions => {
        this.loadPredictionDayPartEmotionsForm(emotions);
      });

    this.predictionDayPartEmotionsEditCloseSubscription =
      this.predictionDayPartService.predictionDayPartEditModalCloseEvent.subscribe(__ => {
        this.viewContainerRef.clear();
      });

    this.predictionResultViewModalOpenEvent =
      this.predictionResultService.predictionResultViewModalOpenEvent.subscribe(__ => {
        this.loadPredictionResultView();
      });

    this.predictionResultViewModalCloseEvent =
      this.predictionResultService.predictionResultViewModalCloseEvent.subscribe(__ => {
        this.viewContainerRef.clear();
      });
  }

  private loadPredictionDayPartEmotionsForm(selectedEmotions: string[]): void {
    const predictionDayPartEmotionsComponent = this.componentFactoryResolver.resolveComponentFactory(PredictionDayPartEditComponent);
    this.viewContainerRef = this.placeholderDirective.viewContainerRef;

    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(predictionDayPartEmotionsComponent);
    componentRef.instance.selectedEmotions = selectedEmotions;
  }

  private loadPredictionResultView(): void {
    const predictionResultViewComponent = this.componentFactoryResolver.resolveComponentFactory(PredictionResultViewComponent);
    this.viewContainerRef = this.placeholderDirective.viewContainerRef;

    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(predictionResultViewComponent);
  }
}
