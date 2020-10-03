import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  bootstrap: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthenticationModule {
}
