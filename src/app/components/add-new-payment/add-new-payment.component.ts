import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contract, Payment } from 'src/app/shared/models/contract';
import { ContractService } from 'src/app/shared/services/contract.service';

@Component({
  selector: 'app-add-new-payment',
  templateUrl: './add-new-payment.component.html',
  styleUrls: ['./add-new-payment.component.css']
})
export class AddNewPaymentComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  buttonDisabled: boolean = false;
  payment: Payment;
  contract: Contract;
  checkListElements: any[] = [
    "تم التدقيق من قبل المهندس",
    "تم التدقيق على المرفقات",
    "تم الفحص",
    "تم تزويد شهادة بلد المنشأ",
    "تم استلام المواد",
  ];

  constructor(private _formBuilder: FormBuilder,public dialogRef: MatDialogRef<AddNewPaymentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public contractService: ContractService) {
      this.payment = data.paymentValue;
      this.contract = data.contract;
    }


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      type: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      paymentValue: [''],
      paymentValueInLetters: [''],
      billNumber: [''],
      billDate: [''],
      attachments: [''],
      notes: ['']
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

  addPayment(){

    this.payment.type = this.firstFormGroup.value.type;
    this.payment.attachments = this.secondFormGroup.value.attachments;
    this.payment.billDate = this.secondFormGroup.value.billDate;
    this.payment.billNumber = this.secondFormGroup.value.billNumber;
    this.payment.notes = this.secondFormGroup.value.notes;
    this.payment.paymentValue = this.secondFormGroup.value.paymentValue;
    this.payment.paymentValueInLetters = this.secondFormGroup.value.paymentValueInLetters;
    this.payment.createdBy = "م. حمد الشريدة";
    this.payment.paymentDiscount = 0;
    this.contract.remainingValue -= this.payment.paymentValue;
    this.contract.compPercentage = ((this.contract.remainingValue/this.contract.contractValue)*100)

    let listCheck = this.checkList.value;
    if(listCheck != null){
      if(this.checkList.value.length === 5){
        this.payment.status = true;
        this.payment.originCountryCertificateSupplied = true;
        this.payment.materialsHaveBeenReceived = true;
        this.payment.checkedBySiteEngineer = true;
        this.payment.checked = true;
        this.payment.attachmentsHaveBeenChecked = true;
      }else{
          listCheck.forEach((element:string) => {
          if(element == "تم التدقيق من قبل المهندس"){this.payment.checkedBySiteEngineer = true;}
          if(element == "تم التدقيق على المرفقات"){this.payment.attachmentsHaveBeenChecked = true;}
          if(element == "تم الفحص"){this.payment.checked = true;}
          if(element == "تم تزويد شهادة بلد المنشأ"){this.payment.originCountryCertificateSupplied = true;}
          if(element == "تم استلام المواد"){this.payment.materialsHaveBeenReceived = true;}
        });
      }
    }


    if(this.payment.type === "ReceiptAndAcceptanceCertificate"){
      this.contract.receiptAndAcceptanceCertificatePayments.push(this.payment);
    }
    else if(this.payment.type === "CIFCertificate"){
      this.contract.CIFCertificatePayments.push(this.payment);
    }
    else if(this.payment.type === "FinalCertificate"){
      this.contract.finalCertificatePayments.push(this.payment);
    }
    else if(this.payment.type === "SparePartsCertificate"){
      this.contract.sparePartsCertificatePayments.push(this.payment);
    }

    this.contractService.updateContract(this.contract, this.contract.id).then(res =>{
      console.log("update: ", res);

    });
    console.log("payment: ", this.payment);
    console.log("contract: ", this.contract);


    this.dialogRef.close();
  }

}
