import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {exhaustMap, take} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private store: Store<fromApp.AppState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('authentication').pipe(take(1), exhaustMap(state => {
      if (!state.userAuth) {
        return next.handle(req);
      }

      const authRequest = req.clone({
        headers: new HttpHeaders().append('Authorization', state.userAuth.authorizationToken)
      });

      return next.handle(authRequest);
    }));
  }

}
