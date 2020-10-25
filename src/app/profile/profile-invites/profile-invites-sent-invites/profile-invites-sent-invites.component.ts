import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../shared/model/user.model';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import {CancelUserSentInviteStart, GetUserSentInvitesStart, SendUserInviteStart} from '../../store/profile.actions';
import {faTimes} from '@fortawesome/free-solid-svg-icons/faTimes';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';

@Component({
  selector: 'app-profile-invites-sent-invites',
  templateUrl: './profile-invites-sent-invites.component.html',
  styleUrls: ['./profile-invites-sent-invites.component.css']
})
export class ProfileInvitesSentInvitesComponent implements OnInit, OnDestroy {

  profileSentInvitesForm: FormGroup;

  faTimes = faTimes;
  faCircleNotch = faCircleNotch;

  isFetching: boolean;
  isUserSentInvitesFetching: boolean;

  private currentUser: User;
  sentInvites: User[];

  private profileStoreSubscription: Subscription;
  private authenticationStoreSubscription: Subscription;
  faPlus = faPlus;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit(): void {
    this.authenticationStoreSubscription = this.store.select('authentication').subscribe(state => {
      this.currentUser = state.user;
    });
    this.profileStoreSubscription = this.store.select('profile').subscribe(state => {
      this.isFetching = state.isFetching;
      this.isUserSentInvitesFetching = state.isUserSentInvitesFetching;
      this.sentInvites = state.sentInvites;
    });

    this.store.dispatch(new GetUserSentInvitesStart(this.currentUser.userId));

    this.createProfileSentInvitesForm();
  }

  ngOnDestroy(): void {
    this.profileStoreSubscription.unsubscribe();
    this.authenticationStoreSubscription.unsubscribe();
  }

  onSentInviteCancel(sentInviteUser: User): void {
    this.store.dispatch(new CancelUserSentInviteStart(this.currentUser.userId, sentInviteUser.userId));
  }

  onSentUserInvite(): void {
    if (!this.profileSentInvitesForm.valid) {
      return;
    }

    const friendId = this.profileSentInvitesForm.controls.friendId.value;

    // Check if current user id is same as friend id
    if (this.currentUser.userId === friendId) {
      this.profileSentInvitesForm.controls.friendId.setErrors({incorrect: true});

      return;
    }

    this.store.dispatch(new SendUserInviteStart(this.currentUser.userId, friendId));
  }

  private createProfileSentInvitesForm(): void {
    this.profileSentInvitesForm = new FormGroup({
      friendId: new FormControl(null,
        [Validators.pattern('[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{4}\\-[0-9a-fA-F]{12}')])
    });
  }

}
