import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  userDoc: any ={};
  user: any ={};
  constructor(
    public angularFirestore: AngularFirestore,
    public authService: AuthService
  ) {

  }

  getUsers(){
    return this.angularFirestore.collection('users').valueChanges();
  }


  getUser(id: any){
    return this.angularFirestore.collection('users').doc(id).valueChanges();
  }

  disablePermission(user: User){
    this.user=this.authService.getUser();
    console.log("user: ", user);

    return this.angularFirestore.collection('users').
      doc(this.user.uid).update({auth: false});

    // var A: any
    // this.user=this.authService.getUser();
    // this.getUser(this.user.uid).subscribe((res:any) =>{
    //   console.log("user document: ", res);
    //   this.userDoc = res;
    //   A = this.angularFirestore.collection('users').doc(id).update(
    //     {
    //       auth: !this.userDoc.auth,
    //       email: this.userDoc.email,
    //       userType: this.userDoc.userType,
    //       displayName: this.userDoc.displayName,
    //       photoURL: this.userDoc.photoURL,
    //       emailVerified: this.userDoc.emailVerified,
    //     }
    //   );
    // });
    // return A
  }

  enablePermission(user: User){
    console.log("user: ", user);
    this.user=this.authService.getUser();
    console.log("user: ", user);

    return this.angularFirestore.collection('users').
      doc(this.user.uid).update({auth: true});
    // var A: any
    // this.user=this.authService.getUser();
    // console.log("user", user);

    //   this.getUser(this.user.uid).subscribe((res:any) =>{
    //   console.log("user document: ", res);
    //   this.userDoc = res;
    //   A = this.angularFirestore.collection('users').doc(this.user.uid).update(
    //     {
    //       auth: !this.userDoc.auth,
    //       email: this.userDoc.email,
    //       userType: this.userDoc.userType,
    //       displayName: this.userDoc.displayName,
    //       photoURL: this.userDoc.photoURL,
    //       emailVerified: this.userDoc.emailVerified,
    //     }
    //   );
    // });
    // return A;
  }
}
