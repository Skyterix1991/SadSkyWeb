import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, skipWhile, take} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanLoad {

  constructor(private store: Store<fromApp.AppState>, private router: Router) {
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select('authentication').pipe(skipWhile(state => !state || !state.isAutoLoginCompleted), take(1), map(authState => {
      if (!!authState.user) {
        return true;
      }

      return this.router.createUrlTree(['/']);
    }));
  }

}
