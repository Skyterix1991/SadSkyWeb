import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AuthenticationEffects} from './authentication/store/authentication.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(fromApp.appReducerMap),
    EffectsModule.forRoot([
      AuthenticationEffects
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
