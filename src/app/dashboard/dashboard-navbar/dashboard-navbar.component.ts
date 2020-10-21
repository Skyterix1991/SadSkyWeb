import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Subscription} from 'rxjs';
import {User} from '../../shared/model/user.model';
import {Logout} from '../../authentication/store/authentication.actions';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {ClearSelectedPrediction, GetUserFriendsToStart, GetUserPredictionsStart, SelectUser} from '../store/dashboard.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard-navbar',
  templateUrl: './dashboard-navbar.component.html',
  styleUrls: ['./dashboard-navbar.component.css']
})
export class DashboardNavbarComponent implements OnInit, OnDestroy {

  @ViewChild('menuRef') menuRef: ElementRef;

  menuToggleIcon = faBars;

  private isMenuOpened = true;

  userFriendsTo: User[];
  currentUser: User;
  private selectedUser: User;

  authenticationStoreSubscription: Subscription;
  dashboardStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private renderer: Renderer2, private router: Router) {
  }

  ngOnInit(): void {
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.currentUser = state.user;
    });
    this.dashboardStoreSubscription = this.store.select('dashboard').subscribe(state => {
      this.userFriendsTo = state.userFriendsTo;
      this.selectedUser = state.selectedUser;
    });

    this.store.dispatch(new GetUserFriendsToStart(this.currentUser.userId));
    this.store.dispatch(new SelectUser(this.currentUser));
  }

  ngOnDestroy(): void {
    this.authenticationStoreSubscription.unsubscribe();
    this.dashboardStoreSubscription.unsubscribe();
  }

  onLogout(): void {
    this.store.dispatch(new Logout());
    this.store.dispatch(new ClearSelectedPrediction());
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

  selectUser(user: User): void {
    if (this.selectedUser.userId === user.userId) {
      return;
    }

    this.store.dispatch(new SelectUser(user));
    this.store.dispatch(new GetUserPredictionsStart(user.userId));
    this.store.dispatch(new ClearSelectedPrediction());

    this.router.navigate(['/dashboard']);
  }
}
