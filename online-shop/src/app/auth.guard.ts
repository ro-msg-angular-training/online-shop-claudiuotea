import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dataService : DataService, private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.dataService.getCurrentUser().username != '' && this.dataService.getCurrentUser().fullName != null && this.dataService.getCurrentUser().roles != null)
        return true;
    this.router.navigate(["/login"]);
    return false;
  }
  
}
