import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginModalCloseEvent: EventEmitter<void> = new EventEmitter<void>();
  registerModalCloseEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }
}
