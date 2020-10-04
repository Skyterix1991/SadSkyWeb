import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuToggleIcon = faBars;

  private isMenuOpened = true;

  @ViewChild('menuRef') menuRef: ElementRef;

  constructor(private authenticationService: AuthenticationService,
              private renderer: Renderer2) {
  }

  onLoginClicked(): void {
    this.authenticationService.loginModalOpenEvent.emit();
  }

  onRegisterClicked(): void {
    this.authenticationService.registerModalOpenEvent.emit();
  }

  onMenuToggle(): void {
    if (this.isMenuOpened) {
      this.menuToggleIcon = faTimes;
      this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'block');
    } else {
      this.menuToggleIcon = faBars;
      this.renderer.setStyle(this.menuRef.nativeElement, 'display', 'none');
    }

    this.isMenuOpened = !this.isMenuOpened;
  }
}
