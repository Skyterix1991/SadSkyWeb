import {Component, OnInit} from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {faKey} from '@fortawesome/free-solid-svg-icons/faKey';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import {faWrench} from '@fortawesome/free-solid-svg-icons/faWrench';

@Component({
  selector: 'app-profile-navbar',
  templateUrl: './profile-navbar.component.html',
  styleUrls: ['./profile-navbar.component.css']
})
export class ProfileNavbarComponent implements OnInit {

  faBack = faArrowLeft;
  faKey = faKey;
  faUser = faUser;
  faWrench = faWrench;

  constructor() {
  }

  ngOnInit(): void {
  }

}
