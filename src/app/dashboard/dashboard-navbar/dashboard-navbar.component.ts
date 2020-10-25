import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Subscription} from 'rxjs';
import {User} from '../../shared/model/user.model';
import {Logout} from '../../authentication/store/authentication.actions';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {ClearSelectedPrediction, GetUserFriendsToStart, SelectUserStart, SelectUserSuccess} from '../store/dashboard.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  usersForm: FormGroup;

  private authenticationStoreSubscription: Subscription;
  private dashboardStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>,
              private renderer: Renderer2,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
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

    if (!!this.activatedRoute.snapshot.params.userId && this.activatedRoute.snapshot.params.userId !== this.currentUser.userId) {
      this.store.dispatch(new SelectUserStart(this.activatedRoute.snapshot.params.userId));
    } else {
      this.store.dispatch(new SelectUserSuccess(this.currentUser));
    }

    this.createUsersForm();
  }

  ngOnDestroy(): void {
    this.authenticationStoreSubscription.unsubscribe();
    this.dashboardStoreSubscription.unsubscribe();
  }

  onLogout(): void {
    this.store.dispatch(new ClearSelectedPrediction());
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

  selectUser(): void {
    const userId = this.usersForm.controls.users.value;
    if (!userId) {
      return;
    }

    let user: User;

    if (userId === this.currentUser.userId) {
      user = this.currentUser;
    } else {
      user = this.userFriendsTo.find(userFriendTo => userId === userFriendTo.userId);
    }

    if (this.selectedUser.userId === user.userId) {
      return;
    }

    this.store.dispatch(new SelectUserSuccess(user));
    this.store.dispatch(new ClearSelectedPrediction());

    this.router.navigate(['/dashboard', user.userId]);
  }

  private createUsersForm(): void {
    let userId = this.activatedRoute.snapshot.params.userId;

    if (!userId) {
      userId = this.currentUser.userId;
    }

    this.usersForm = new FormGroup({
      users: new FormControl(userId, [Validators.required])
    });
  }
}
