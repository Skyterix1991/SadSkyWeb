import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {HeaderComponent} from './header/header.component';
import {AdvantagesComponent} from './advantages/advantages.component';
import {AuthenticationModule} from '../authentication/authentication.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MainPageComponent} from './main-page.component';
import {MainPageRoutingModule} from './main-page-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    AdvantagesComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationModule,
    FontAwesomeModule,
    MainPageRoutingModule,
    SharedModule
  ],
  bootstrap: [
    NavbarComponent,
    HeaderComponent,
    AdvantagesComponent
  ]
})
export class MainPageModule {
}
