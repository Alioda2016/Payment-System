import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Contract } from 'src/app/shared/models/contract';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ContractService } from 'src/app/shared/services/contract.service';
import { AddNewContractComponent } from '../add-new-contract/add-new-contract.component';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  displayedColumns = [
    'class', 'name', 'sourceColumn', 'description',
    'individual', 'organization', 'compPercentage', 'weight', 'display'
                      ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  type: boolean=false;
  dataSource = new MatTableDataSource<any>();
  buttonDisabled: boolean = false;
  contractList: Contract[];

  constructor(public dialog: MatDialog,
    public router: ActivatedRoute,
    public route: Router,
    public alertService: AlertService,
    public contractService: ContractService) {

  }

  ngOnInit(): void {
    this.getContracts();
  //  this.dataSource.data = contracts;
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
    // let emptycontract:Contract={id:'', contractName: '', remainingValue: 0, contractClass: ''
    //                           , contractValue: 0, contractEndDate: new Date(Date.now())
    //                           , contractDiscount: 0
    //                           , contractNumber: 0
    //                           , contractor: ''
    //                           ,CIFCertificatePayments: []
    //                           ,sparePartsCertificatePayments: []
    //                           ,finalCertificatePayments: []
    //                           ,receiptAndAcceptanceCertificatePayments: []
    //                         }
    let emptycontract:Contract = new Contract();
    const dialogRef = this.dialog.open(AddNewContractComponent, {
      width: '1000px',
      data:{type:false, contractValue:emptycontract},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        // let originalSource = this.dataSource.data
        // originalSource.push(result)
        // this.dataSource.data = originalSource
        this.getContracts();
        console.log("result", result);

      }

    });
  }

  getContracts(){
    this.contractService.getContractList().subscribe((res: any) =>{
      this.contractList = res
      this.dataSource.data = this.contractList;
      console.log("contracts: ", this.contractList);

    })
  }

  disabled(row: any) {
    this.buttonDisabled = row.enabled;
    return this.buttonDisabled;
  }

  displayElements(row: Contract) {


    this.route.navigateByUrl(`/dashboard/contract-page/${row.id}`);
  }

  orderByPercentage(){
    this.contractService.orderByPercentage().subscribe((res: any) =>{
      this.contractList = res
      this.dataSource.data = this.contractList;
      console.log("contracts: ", this.contractList);

    })
  }

  orderByDate(){
    this.contractService.orderByDate().subscribe((res: any) =>{
      this.contractList = res
      this.dataSource.data = this.contractList;
      console.log("contracts: ", this.contractList);

    })
  }

  changesourceColumn(event: any, row: any) {
    console.log(event)
  }
}
