import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';

@Injectable({providedIn: 'root'})
export class NoAuthGuard implements CanActivate {

  constructor(private store: Store<fromApp.AppState>, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.store.select('authentication').pipe(take(1), map(authState => {
      const isAuth = !!authState.user;
      if (!isAuth) {
        return true;
      }
      return this.router.createUrlTree(['/']);
    }));
  }

}
