import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loginModalCloseEvent: EventEmitter<void> = new EventEmitter<void>();
  loginModalOpenEvent: EventEmitter<void> = new EventEmitter<void>();

  registerModalCloseEvent: EventEmitter<void> = new EventEmitter<void>();
  registerModalOpenEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }
}
