import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Subscription} from 'rxjs';
import {User} from '../../shared/model/user.model';
import {Logout} from '../../authentication/store/authentication.actions';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit, OnDestroy {

  @ViewChild('menuRef') menuRef: ElementRef;

  menuToggleIcon = faBars;

  private isMenuOpened = true;

  user: User;

  authenticationStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.user = state.user;
    });
  }

  ngOnDestroy(): void {
    this.authenticationStoreSubscription.unsubscribe();
  }

  onLogout(): void {
    this.store.dispatch(new Logout());
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
