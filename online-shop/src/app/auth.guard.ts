import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from './interfaces';
import { selectCurrentUser} from './store/selectors/user.selectors';
import { IAppState } from './store/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // add current user here
  user$: Observable<IUser> = this.store.pipe(select(selectCurrentUser));
  
  constructor(private router:Router, private store: Store<IAppState>){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let username = '';
      let fullName = null;
      let roles = null;
      this.user$.subscribe(user => {
        username = user.username;
        fullName = user.fullName!;
        roles = user.roles!;
      });
      if(username && fullName && roles)
        return true;
    this.router.navigate(["/login"]);
    return false;
  }
  
}
