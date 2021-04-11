import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { from } from 'rxjs';
import { Contract } from 'src/app/shared/models/contract';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ContractService } from 'src/app/shared/services/contract.service';

@Component({
  selector: 'app-add-new-contract',
  templateUrl: './add-new-contract.component.html',
  styleUrls: ['./add-new-contract.component.css']
})
export class AddNewContractComponent implements OnInit {
  // contract:Contract = {id:'', contractName: '', remainingValue: 0, contractClass: ''
  //                     , contractValue: 0
  //                     , contractEndDate: new Date(Date.now())
  //                     , contractDiscount: 0
  //                     , contractNumber: 0
  //                     , contractor: ''
  //                     ,CIFCertificatePayments: []
  //                     ,sparePartsCertificatePayments: []
  //                     ,finalCertificatePayments: []
  //                     ,receiptAndAcceptanceCertificatePayments: []
  //                 };
  contract:Contract;
  type: boolean;
  constructor(public dialogRef: MatDialogRef<AddNewContractComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public contractService: ContractService) {
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


  addContract(contractForm: NgForm){
    console.log("form: ",this.contract);
     this.contract.remainingValue = contractForm.value.contractValue;
    // this.contract.contractNumber = contractForm.value.contractNumber;
    // this.contract.contractClass = contractForm.value.contractClass;
    // this.contract.contractor = contractForm.value.contractor;
    // this.contract.contractValue = contractForm.value.contractValue;
    // this.contract.contractDiscount = contractForm.value.contractDiscount;
    // this.contract.contractEndDate = contractForm.value.contractEndDate;
    // this.contract.contractName = contractForm.value.contractName;
    try {
      this.contractService.createContract(this.contract);
      this.dialogRef.close()
    } catch (error) {
      console.log(error);

    }
  }
}
