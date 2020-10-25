import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../../../shared/model/user.model';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import {AcceptUserPendingInviteStart, GetUserPendingInvitesStart, RefuseUserPendingInviteStart} from '../../store/profile.actions';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';

@Component({
  selector: 'app-profile-invites-pending-invites',
  templateUrl: './profile-invites-pending-invites.component.html',
  styleUrls: ['./profile-invites-pending-invites.component.css']
})
export class ProfileInvitesPendingInvitesComponent implements OnInit, OnDestroy {

  acceptIcon = faCheck;
  refuseIcon = faTimes;
  faCircleNotch = faCircleNotch;
  faPlus = faPlus;

  isFetching: boolean;
  isUserPendingInvitesFetching: boolean;

  private currentUser: User;
  pendingInvites: User[];

  private profileStoreSubscription: Subscription;
  private authenticationStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.currentUser = state.user;
    });
    this.profileStoreSubscription = this.store.select('profile').subscribe(state => {
      this.isUserPendingInvitesFetching = state.isUserSentInvitesFetching;
      this.pendingInvites = state.pendingInvites;
      this.isFetching = state.isFetching;
    });

    this.store.dispatch(new GetUserPendingInvitesStart(this.currentUser.userId));
  }

  ngOnDestroy(): void {
    this.profileStoreSubscription.unsubscribe();
    this.authenticationStoreSubscription.unsubscribe();
  }

  onInviteAccept(pendingInviteUser: User): void {
    if (this.isFetching) {
      return;
    }

    this.store.dispatch(new AcceptUserPendingInviteStart(this.currentUser.userId, pendingInviteUser.userId));
  }

  onInviteRefuse(pendingInviteUser: User): void {
    if (this.isFetching) {
      return;
    }

    this.store.dispatch(new RefuseUserPendingInviteStart(this.currentUser.userId, pendingInviteUser.userId));
  }
}
