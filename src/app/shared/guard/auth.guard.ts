import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    public authService: AuthService,
    public router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("inside canactivate: ", this.authService.isLoggedIn);
    // if(!this.authService.isLoggedIn) {
    //   alert('You are not allowed to view this page. You are redirected to login Page');
    //   this.router.navigate(['sign-in'])
    //   return false;
    // }
    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("inside canactivateChiled: ", this.authService.isLoggedIn);

    // if(!this.authService.isLoggedIn) {
    //   alert('You are not allowed to view this page. You are redirected to login Page');
    //   this.router.navigate(['sign-in'])
    //   return false;
    // }
    return true;
  }

}
