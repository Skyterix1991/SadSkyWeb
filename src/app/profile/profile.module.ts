import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ProfileComponent} from './profile.component';
import {ProfileRoutingModule} from './profile-routing.module';
import {ProfileNavbarComponent} from './profile-navbar/profile-navbar.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProfilePrivacyComponent} from './profile-privacy/profile-privacy.component';
import {ProfileSettingsComponent} from './profile-settings/profile-settings.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProfileInvitesComponent} from './profile-invites/profile-invites.component';
import {ProfileInvitesSentInvitesComponent} from './profile-invites/profile-invites-sent-invites/profile-invites-sent-invites.component';
import {ProfileInvitesPendingInvitesComponent} from './profile-invites/profile-invites-pending-invites/profile-invites-pending-invites.component';
import {ProfileFriendsComponent} from './profile-friends/profile-friends.component';
import {ProfileFriendsFriendsComponent} from './profile-friends/profile-friends-friends/profile-friends-friends.component';
import {ProfileFriendsFriendsToComponent} from './profile-friends/profile-friends-friendsto/profile-friends-friends-to.component';

@NgModule({
  declarations: [ProfileComponent, ProfileNavbarComponent, ProfileDetailsComponent, ProfilePrivacyComponent, ProfileSettingsComponent, ProfileInvitesComponent, ProfileInvitesSentInvitesComponent, ProfileInvitesPendingInvitesComponent, ProfileFriendsComponent, ProfileFriendsFriendsComponent, ProfileFriendsFriendsToComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule {
}
