import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AddNewContractComponent } from '../add-new-contract/add-new-contract.component';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  displayedColumns = ['class', 'name', 'sourceColumn', 'description', 'individual', 'organization', 'weight', 'display'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  type: boolean=false;
  dataSource = new MatTableDataSource<any>();
  buttonDisabled: boolean = false;

  constructor(public dialog: MatDialog,
    public router: ActivatedRoute,
    public route: Router,
    public alertService: AlertService) {

  }

  ngOnInit(): void {
    this.dataSource.data = contracts;
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
    let emptycontract:any={description:'',id:0, weight: 0, sourceColumn: '', name:'',
                                  enabled: false, individual: false, organization: false, elements:[]}
    const dialogRef = this.dialog.open(AddNewContractComponent, {
      width: '1000px',
      data:{type:false, contractValue:emptycontract},
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


    this.route.navigateByUrl(`/element/${row.id}`);
  }

  changesourceColumn(event: any, row: any) {
    console.log(event)
  }
}

const contracts: any[] = [
  {
    id: 0,
    class: "O1",
    name: "4435",
    description: "1,523,550",
    weight: "25-4-2020",
    enabled: true,
    sourceColumn: "شركة المقاولات الوطنية",
    elements: [],
    organization: "1,225,320",
    individual: "36,620"
  },
  {
    id: 1,
    class: "O1",
    name: "4435",
    description: "1,523,550",
    weight: "25-4-2020",
    enabled: true,
    sourceColumn: "شركة المقاولات الوطنية",
    elements: [],
    organization: "1,225,320",
    individual: "36,620"
  },
  {
    id: 2,
    class: "O1",
    name: "4435",
    description: "1,523,550",
    weight: "25-4-2020",
    enabled: true,
    sourceColumn: "شركة المقاولات الوطنية",
    elements: [],
    organization: "1,225,320",
    individual: "36,620"
  },
  {
    id: 3,
    class: "O1",
    name: "4435",
    description: "1,523,550",
    weight: "25-4-2020",
    enabled: true,
    sourceColumn: "شركة المقاولات الوطنية",
    elements: [],
    organization: "1,225,320",
    individual: "36,620"
  },
  {
    id: 4,
    class: "O1",
    name: "4435",
    description: "1,523,550",
    weight: "25-4-2020",
    enabled: true,
    sourceColumn: "شركة المقاولات الوطنية",
    elements: [],
    organization: "1,225,320",
    individual: "36,620"
  },
  {
    id: 5,
    class: "O1",
    name: "4435",
    description: "1,523,550",
    weight: "25-4-2020",
    enabled: true,
    sourceColumn: "شركة المقاولات الوطنية",
    elements: [],
    organization: "1,225,320",
    individual: "36,620"
  },
  {
    id: 6,
    class: "O1",
    name: "4435",
    description: "1,523,550",
    weight: "25-4-2020",
    enabled: true,
    sourceColumn: "شركة المقاولات الوطنية",
    elements: [],
    organization: "1,225,320",
    individual: "36,620"
  },
  {
    id: 7,
    class: "O1",
    name: "4435",
    description: "1,523,550",
    weight: "25-4-2020",
    enabled: true,
    sourceColumn: "شركة المقاولات الوطنية",
    elements: [],
    organization: "1,225,320",
    individual: "36,620"
  },
  {
    id: 8,
    class: "O1",
    name: "4435",
    description: "1,523,550",
    weight: "25-4-2020",
    enabled: false,
    sourceColumn: "شركة المقاولات الوطنية",
    elements: [],
    organization: "1,225,320",
    individual: "36,620"
  }
];
