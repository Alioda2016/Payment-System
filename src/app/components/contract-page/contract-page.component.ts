import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract, Payment } from 'src/app/shared/models/contract';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ContractService } from 'src/app/shared/services/contract.service';
import { AddNewPaymentComponent } from '../add-new-payment/add-new-payment.component';

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.css']
})
export class ContractPageComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  buttonDisabled: boolean = false;
  contractId: string='';
  contract: Contract;
  displayedColumns = ['class', 'name', 'sourceColumn', 'description', 'individual', 'organization', 'case', 'display'];

  type: boolean=false;
  paymentList: Payment[];
  dataSource = new MatTableDataSource<any>();
  dataSource1 = new MatTableDataSource<any>();
  dataSource2 = new MatTableDataSource<any>();
  list1:Payment[] = [];
  list2:Payment[] = [];
  list3:Payment[] = [];
  constructor(
    public dialog: MatDialog,
    public route: ActivatedRoute,
    public router: Router,
    public alertService: AlertService,
    public contractService: ContractService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.contractId = (params.get('id')||"");
      console.info('contract id = ', this.contractId);
      this.contractService.getContractDoc(this.contractId).subscribe((res:any) =>{
        console.log("this.contract: ", res);
        this.contract = res;
        this.list1 = this.contract.receiptAndAcceptanceCertificatePayments;
        this.dataSource.data = this.list1;
        this.list2 = this.contract.finalCertificatePayments;
        this.dataSource1.data=this.list2;
        this.list3 = this.contract.sparePartsCertificatePayments;
        this.dataSource2.data = this.list3;
      });
    });
  }

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openForm() {
    let emptyPayment:Payment={
      id: '',
      type: '',
      paymentClass: "O1",
      certificateNumber: 0,
      paymentDiscount: 0,
      createdBy: '',
      status: false,
      paymentValue: 0,
      paymentValueInLetters: '',
      billNumber: 0,
      billDate: new Date(Date.now()),
      attachments: '',
      notes: '',
      checkedBySiteEngineer: false,
      attachmentsHaveBeenChecked: false,
      checked: false,
      originCountryCertificateSupplied: false,
      materialsHaveBeenReceived: false
    }
    const dialogRef = this.dialog.open(AddNewPaymentComponent, {
      width: '1000px',
      data:{contract:this.contract, paymentValue:emptyPayment},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        // let originalSource = this.dataSource.data
        // originalSource.push(result)
        // this.dataSource.data = originalSource
      }

    });
  }

  disabled(row: any) {
    this.buttonDisabled = row.enabled;
    return this.buttonDisabled;
  }

  displayElements(row: Element) {
  }

  changesourceColumn(event: any, row: any) {
    console.log(event)
  }
}

const payments: Payment[] = [
  {
    id: '',
      type: '',
      paymentClass: "O1",
      certificateNumber: 0,
      paymentDiscount: 0,
      createdBy: '',
      status: false,
      paymentValue: 0,
      paymentValueInLetters: '',
      billNumber: 0,
      billDate: new Date(Date.now()),
      attachments: '',
      notes: '',
      checkedBySiteEngineer: false,
      attachmentsHaveBeenChecked: false,
      checked: false,
      originCountryCertificateSupplied: false,
      materialsHaveBeenReceived: false
  }
];

