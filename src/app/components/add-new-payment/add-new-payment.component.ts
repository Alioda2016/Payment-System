import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-payment',
  templateUrl: './add-new-payment.component.html',
  styleUrls: ['./add-new-payment.component.css']
})
export class AddNewPaymentComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isEditable = false;
  buttonDisabled: boolean = false;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  // checkListElements: any[] = [
  //   {"تم التدقيق من قبل المهندس": true},
  //   {"تم التدقيق على المرفقات": false},
  //   {"تم الفحص": true},
  //   {"تم تزويد شهادة بلد المنشأ": false},
  //   {"تم استلام المواد": false},
  // ];
  checkListElements: any[] = [
    "تم التدقيق من قبل المهندس",
    "تم التدقيق على المرفقات",
    "تم الفحص",
    "تم تزويد شهادة بلد المنشأ",
    "تم استلام المواد",
  ];

  constructor(private _formBuilder: FormBuilder,public dialogRef: MatDialogRef<AddNewPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [''],
      thirdCtrl: [''],
      fourthCtrl: [''],
      fifthCtrl: [''],
      sixthCtrl: [''],
      seventhCtrl: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      eighthCtrl: ['']
    });
  }

  checkList = new FormControl();

  disabled(row: any) {
    this.buttonDisabled = row.enabled;
    return this.buttonDisabled;
  }

  changeActivity(row: any) {
    if (row.enabled) {
      row.enabled = !row.enabled
    } else {
      row.enabled = !row.enabled
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPayment(){}

}
