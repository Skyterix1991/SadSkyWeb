import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {PredictionDetailsComponent} from './prediction-details/prediction-details.component';
import {PredictionDayComponent} from './prediction-details/prediction-day/prediction-day.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard/'
  },
  {
    path: ':userId',
    component: DashboardComponent,
    children: [
      {
        path: 'predictions',
        pathMatch: 'full',
        redirectTo: ''
      },
      {
        path: 'predictions/:predictionId',
        component: PredictionDetailsComponent,
        children: [
          {
            path: '',
            redirectTo: 'day/1'
          },
          {
            path: 'day',
            redirectTo: 'day/1'
          },
          {
            path: 'day/:dayNumber',
            component: PredictionDayComponent
          },
          {
            path: '**',
            redirectTo: 'day/1'
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

/*const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'details',
        redirectTo: ''
      },
      {
        path: 'details/:predictionId',
        component: PredictionDetailsComponent,
        children: [
          {
            path: '',
            redirectTo: 'day/1'
          },
          {
            path: 'day',
            redirectTo: 'day/1'
          },
          {
            path: 'day/:dayNumber',
            component: PredictionDayComponent
          },
          {
            path: '**',
            redirectTo: 'day/1'
          }
        ]
      },
      {
        path: '**',
        redirectTo: '/dashboard/'
      }
    ]
  }
];*/

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
