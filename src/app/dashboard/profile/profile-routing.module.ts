import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {AuthGuard} from '../../shared/guard/auth.guard';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProfilePrivacyComponent} from './profile-privacy/profile-privacy.component';
import {ProfileSettingsComponent} from './profile-settings/profile-settings.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'details',
        pathMatch: 'full'
      },
      {
        path: 'details',
        component: ProfileDetailsComponent
      },
      {
        path: 'settings',
        component: ProfileSettingsComponent
      },
      {
        path: 'privacy',
        component: ProfilePrivacyComponent
      }
    ]
  }
];

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
export class ProfileRoutingModule {
}
