import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from './services/admin.service';
import { AuthService } from './services/auth.service';
import { User } from './services/user';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
   user: any = {};
   userDoc: any = {};
  constructor(
    public authService: AuthService,
    public router: Router,
    public angularFirestore: AngularFirestore,
    public adminService: AdminService
  ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.user=this.authService.getUser();
      console.log("inside canactivate: ", this.user.uid);
      this.adminService.getUser(this.user.uid).subscribe((res:any) =>{
        console.log("user document: ", res);
        this.userDoc = res;
      });

      console.log(this.userDoc);

      if(this.userDoc.auth !== true) {
         alert('You are not allowed to view this page. you need permission from the admin');
         this.router.navigate(['dashboard'])
         return false;
       }
    return true;
  }

}
