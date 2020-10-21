import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProfilePrivacyComponent} from './profile-privacy/profile-privacy.component';
import {ProfileSettingsComponent} from './profile-settings/profile-settings.component';
import {ProfileInvitesComponent} from './profile-invites/profile-invites.component';
import {ProfileFriendsComponent} from './profile-friends/profile-friends.component';

const routes: Routes = [
  {
    path: '',
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
      },
      {
        path: 'invites',
        component: ProfileInvitesComponent
      },
      {
        path: 'friends',
        component: ProfileFriendsComponent
      },
      {
        path: '**',
        redirectTo: 'details'
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
