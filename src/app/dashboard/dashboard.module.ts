import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardNavbarComponent} from './dashboard-navbar/dashboard-navbar.component';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PredictionListComponent} from './prediction-list/prediction-list.component';
import {PredictionItemComponent} from './prediction-list/prediction-item/prediction-item.component';
import {PredictionDetailsComponent} from './prediction-details/prediction-details.component';
import {PredictionDayNavbarComponent} from './prediction-details/prediction-day-navbar/prediction-day-navbar.component';
import {PredictionDayComponent} from './prediction-details/prediction-day/prediction-day.component';
import {PredictionDayPartComponent} from './prediction-details/prediction-day/prediction-day-part/prediction-day-part.component';
import {PredictionDayPartNavbarComponent} from './prediction-details/prediction-day-part-navbar/prediction-day-part-navbar.component';
import {PredictionDayPartEditComponent} from './prediction-details/prediction-day/prediction-day-part/prediction-day-part-edit/prediction-day-part-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PredictionResultComponent} from './prediction-details/prediction-result/prediction-result.component';
import {PredictionResultViewComponent} from './prediction-details/prediction-result/prediction-result-view/prediction-result-view.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardNavbarComponent,
    PredictionListComponent,
    PredictionItemComponent,
    PredictionDetailsComponent,
    PredictionDayNavbarComponent,
    PredictionDayComponent,
    PredictionDayPartComponent,
    PredictionDayPartNavbarComponent,
    PredictionDayPartEditComponent,
    PredictionResultComponent,
    PredictionResultViewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  bootstrap: [PredictionDayPartEditComponent, PredictionResultViewComponent]
})
export class DashboardModule {
}
