import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-profile-invites',
  templateUrl: './profile-invites.component.html',
  styleUrls: ['./profile-invites.component.css']
})
export class ProfileInvitesComponent implements OnInit, OnDestroy {

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
