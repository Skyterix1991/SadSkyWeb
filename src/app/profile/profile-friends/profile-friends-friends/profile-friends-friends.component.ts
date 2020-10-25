import {Component, OnDestroy, OnInit} from '@angular/core';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {User} from '../../../shared/model/user.model';
import {Subscription} from 'rxjs';
import {GetUserFriendsStart, RemoveUserFriendStart} from '../../store/profile.actions';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-profile-friends-friends',
  templateUrl: './profile-friends-friends.component.html',
  styleUrls: ['./profile-friends-friends.component.css']
})
export class ProfileFriendsFriendsComponent implements OnInit, OnDestroy {

  faTimes = faTimes;
  spinnerIcon = faCircleNotch;

  isFetching: boolean;
  isUserFriendsFetching: boolean;

  private currentUser: User;
  friends: User[];

  private profileStoreSubscription: Subscription;
  private authenticationStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.currentUser = state.user;
    });
    this.profileStoreSubscription = this.store.select('profile').subscribe(state => {
      this.isUserFriendsFetching = state.isUserFriendsFetching;
      this.friends = state.friends;
      this.isFetching = state.isFetching;
    });

    this.store.dispatch(new GetUserFriendsStart(this.currentUser.userId));
  }

  ngOnDestroy(): void {
    this.profileStoreSubscription.unsubscribe();
    this.authenticationStoreSubscription.unsubscribe();
  }

  onFriendRemove(friend: User): void {
    if (this.isFetching) {
      return;
    }

    this.store.dispatch(new RemoveUserFriendStart(this.currentUser.userId, friend.userId));
  }
}
