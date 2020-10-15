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

@NgModule({
  declarations: [ProfileComponent, ProfileNavbarComponent, ProfileDetailsComponent, ProfilePrivacyComponent, ProfileSettingsComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule {
}
