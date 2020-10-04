import {Component} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authenticationService: AuthenticationService) {
  }

  onLoginClicked(): void {
    this.authenticationService.loginModalOpenEvent.emit();
  }

  onRegisterClicked(): void {
    this.authenticationService.registerModalOpenEvent.emit();
  }
}
