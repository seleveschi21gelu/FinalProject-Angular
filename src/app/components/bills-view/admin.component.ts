import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BillsService } from '../../services/bills.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any 

  dataSource:any;
  displayedColumns: string[]=["client","provider","invoiceNumber","material","invoiceDate","unitPrice","quantity","tva","paidStatus","action","action2"]
public bills: any;
  constructor(private BillsService:BillsService, private route: ActivatedRoute, private router: Router) {
 
   }

  ngOnInit(): void {

    this.BillsService.getBills().subscribe((data:any)=>{
      console.log(data);
      this.dataSource= new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort= this.sort;
    
    }
      )

    this.getBills();
    this.deleteBillById(this.route.snapshot.params.id);
  }

 async  getBills(){

    await this.BillsService.getBills().subscribe(
       data=>{this.bills =data;
       },
       err=>console.error(err),
       ()=>console.log('Bills loaded')
     );
 }

 async deleteBillById(id:number){
   await this.BillsService.deleteBillById(id).
    subscribe(
      (data) =>{
        console.log(data);
        this.ngOnInit();
      })

  }
   updateBillById(id:number,bills:any){
    this.BillsService.updateBillById(id,bills);
  }
  filter(query:string){
    this.dataSource.filter =query.trim().toLowerCase();

  }

isActive: boolean=false;
switch(){
this.isActive = !this.isActive;

}

}