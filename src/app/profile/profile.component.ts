import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import {Subscription} from 'rxjs';
import {User} from '../shared/model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  currentUser: User;

  authenticationStoreSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.currentUser = state.user;
    });
  }

  ngOnDestroy(): void {
    this.authenticationStoreSubscription.unsubscribe();
  }

}
