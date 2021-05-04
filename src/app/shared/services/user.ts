export class User {
   uid: string;
   email: string;
   userType: string = "user";
   auth : boolean = false;
   displayName: string ="";
   photoURL: string;
   emailVerified: boolean;
}
