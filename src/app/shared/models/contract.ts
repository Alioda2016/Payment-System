export class Contract{
  id: string ;
  contractNumber: number;
  contractValue: number;
  contractor: string;
  contractDiscount: number ;
  contractName: string;
  contractEndDate: Date;
  remainingValue: number;
  receiptAndAcceptanceCertificatePayments: any[];
  finalCertificatePayments: any[];
  sparePartsCertificatePayments: any[];
  CIFCertificatePayments: any[];
  contractClass: string = "O1";
}

export class Payment{
  id: string;
  type: string;
  paymentClass: string = "O1";
  certificateNumber: number;
  paymentDiscount: number;
  createdBy: string;
  status: boolean = false;
  paymentValue: number;
  paymentValueInLetters: string;
  billNumber: number;
  billDate: Date;
  attachments: string;
  notes: string;
  checkedBySiteEngineer: boolean;
  attachmentsHaveBeenChecked: boolean;
  checked: boolean;
  originCountryCertificateSupplied: boolean;
  materialsHaveBeenReceived: boolean;
}

export class FinalCertificate{}

export class SparePartsCertificate{}

export class CIFCertificate{}
