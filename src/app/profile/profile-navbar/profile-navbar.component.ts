import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faKey} from '@fortawesome/free-solid-svg-icons/faKey';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faWrench} from '@fortawesome/free-solid-svg-icons/faWrench';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.css']
})
export class ProfileNavbarComponent implements OnInit {

  menuToggleIcon = faBars;

  private isMenuOpened = true;

  @ViewChild('menuRef') menuRef: ElementRef;

  faBack = faArrowLeft;
  faKey = faKey;
  faUser = faUser;
  faWrench = faWrench;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
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
