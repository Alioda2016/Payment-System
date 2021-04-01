import { Component, Inject, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-contract',
  templateUrl: './add-new-contract.component.html',
  styleUrls: ['./add-new-contract.component.css']
})
export class AddNewContractComponent implements OnInit {

  contract:any = {description:'',id:0, weight: 0, sourceColumn: '', name:'',
            enabled: false, individual: false, organization: false, elements:[]};
 type: boolean
  constructor(public dialogRef: MatDialogRef<AddNewContractComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
              this.contract=data.contractValue
              this.type=data.type
              console.log("contractValue: ", this.contract);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changePosition() {
    this.dialogRef.updatePosition({top: '20px'});
  }


  addContract(){}
}
