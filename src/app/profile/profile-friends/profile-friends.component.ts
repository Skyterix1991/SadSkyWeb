import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-profile-friends',
  templateUrl: './profile-friends.component.html',
  styleUrls: ['./profile-friends.component.css']
})
export class ProfileFriendsComponent implements OnInit, OnDestroy {

  errorMessage: string;

  profileStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.profileStoreSubscription = this.store.select('profile').subscribe(state => {
      this.errorMessage = state.errorMessage;
    });
  }

  ngOnDestroy(): void {
    this.profileStoreSubscription.unsubscribe();
  }

}
