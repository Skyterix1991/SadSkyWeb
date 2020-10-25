import {Component, OnDestroy, OnInit} from '@angular/core';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {User} from '../../../shared/model/user.model';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import {GetUserFriendsToStart, RemoveUserFriendToStart} from '../../store/profile.actions';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';

@Component({
  selector: 'app-profile-friends-friends-to',
  templateUrl: './profile-friends-friends-to.component.html',
  styleUrls: ['./profile-friends-friends-to.component.css']
})
export class ProfileFriendsFriendsToComponent implements OnInit, OnDestroy {

  faTimes = faTimes;
  spinnerIcon = faCircleNotch;

  isFetching: boolean;
  isUserFriendsToFetching: boolean;

  private currentUser: User;
  friendsTo: User[];

  private profileStoreSubscription: Subscription;
  private authenticationStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.currentUser = state.user;
    });
    this.profileStoreSubscription = this.store.select('profile').subscribe(state => {
      this.isUserFriendsToFetching = state.isUserFriendsToFetching;
      this.friendsTo = state.friendsTo;
      this.isFetching = state.isFetching;
    });

    this.store.dispatch(new GetUserFriendsToStart(this.currentUser.userId));
  }

  ngOnDestroy(): void {
    this.profileStoreSubscription.unsubscribe();
    this.authenticationStoreSubscription.unsubscribe();
  }

  onFriendRemove(friend: User): void {
    if (this.isFetching) {
      return;
    }

    this.store.dispatch(new RemoveUserFriendToStart(this.currentUser.userId, friend.userId));
  }
}
