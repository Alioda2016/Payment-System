import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Contract } from '../models/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private angularFirestore: AngularFirestore) { }

  getContractDoc(id: any){
    return this.angularFirestore.collection('contracts').doc(id).valueChanges();
  }

  getContractList(){
    return this.angularFirestore.collection('contracts').valueChanges();
  }

  createContract(contract: any){
    // return new Promise<any>((resolve: any, reject: any) => {
    //   this.angularFirestore
    //       .collection('contract')
    //       .add({...contract})
    //       .then(response => {
    //         console.log(response);
    //         }, error =>{
    //           reject(error)
    //         });
    // });
    const id1 = this.angularFirestore.createId();
    contract.id = id1;
    const contractRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`contracts/${contract.id}`);
    const contractData: Contract = {
      id: contract.id,
      contractName: contract.contractName,
      contractNumber: contract.contractNumber,
      contractValue: contract.contractValue,
      contractor: contract.contractor,
      contractClass: contract.contractClass,
      contractDiscount: contract.contractDiscount,
      remainingValue: contract.remainingValue,
      contractEndDate: contract.contractEndDate,
      sparePartsCertificatePayments: contract.sparePartsCertificatePayments || null,
      CIFCertificatePayments: contract.CIFCertificatePayments || null,
      finalCertificatePayments: contract.finalCertificatePayments || null,
      receiptAndAcceptanceCertificatePayments: contract.receiptAndAcceptanceCertificatePayments || null
    }
    return contractRef.set(contractData, {
      merge: true
    })
  }

  deleteContract(contract: Contract){
    return this.angularFirestore.collection('contract').doc(contract.id).delete();
  }

  updateContract(contract: Contract, id: string){
    return this.angularFirestore.collection('contract').doc(id).update({
      contractNumber: contract.contractNumber,
      contractValue: contract.contractValue,
      contractor: contract.contractor,
      contractDiscount: contract.contractDiscount,
      contractName: contract.contractName,
      contractEndDate: contract.contractEndDate,
      remainingValue: contract.remainingValue
    });
  }
}
