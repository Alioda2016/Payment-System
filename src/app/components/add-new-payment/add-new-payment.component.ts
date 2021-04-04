import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) {}


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

}
