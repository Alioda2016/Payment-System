import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { User } from 'src/app/shared/services/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[];
  buttonDisabled: boolean = false;

  constructor(
    public alertService: AlertService,
    public adminService: AdminService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.adminService.getUsers().subscribe((res: any) =>{
      this.users = res
    //  this.dataSource.data = this.contractList;
      console.log("users: ", this.users);

    })
  }

  givePermission(){}

  disabled(row: User) {
    this.buttonDisabled = row.auth;
    return this.buttonDisabled;
  }

  changeActivity(row: User) {
    console.log("row", row);
    if (row.auth) {
      this.adminService.disablePermission(row).then(() => {
        row.auth = !row.auth

      })
    } else {
      this.adminService.enablePermission(row).then(() => {
        row.auth = !row.auth

      })
    }
  }

}
