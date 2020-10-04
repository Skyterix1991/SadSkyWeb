import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LOGIN_URL} from '../config/api.constants';
import {Store} from '@ngrx/store';
import {Logout} from '../../authentication/store/authentication.actions';

@Injectable()
export class TokenExpireInterceptorService implements HttpInterceptor {

  private whitelist: string[] = [
    LOGIN_URL // Prevent logging out on login request
  ];

  constructor(private store: Store) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => {
      if (!this.whitelist.includes(req.url) && error.status === 403) {
        this.store.dispatch(new Logout());
      }

      return throwError(error);
    }));
  }

}
