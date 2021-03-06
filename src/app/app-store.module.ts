import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthenticationEffects} from './authentication/store/authentication.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {ProfileEffects} from './profile/store/profile.effects';
import {DashboardEffects} from './dashboard/store/dashboard.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(fromApp.appReducerMap),
    EffectsModule.forRoot([
      AuthenticationEffects,
      ProfileEffects,
      DashboardEffects
    ]),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
  ],
  exports: [
    StoreModule,
    EffectsModule,
    StoreDevtoolsModule
  ]
})
export class AppStoreModule {
}
