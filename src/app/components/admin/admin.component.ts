import { BillsService } from './../../services/bills.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
public bills: any;
  constructor(private BillsService:BillsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBills();
    this.deleteBillById(this.route.snapshot.params.id);
    this.updateBillById();
  }

  getBills(){
    this.BillsService.getBills().subscribe(
      data =>{this.bills=data},
      err=>console.error(err),
      ()=>console.log('bills loaded')
    );
  }

  deleteBillById(id:number){
    this.BillsService.deleteBillById(id).subscribe(
      data=>{this.bills=data},
  err=>console.error(err),
  ()=>console.log('bill removed')

    );
  }
  // updateBillById(id:number,bills:any){
  //   this.BillsService.updateBillById(id,bills).subscribe(
  //     data=>{
  //       this.bills=data
  //     },
  //     err=>console.error(err),
  //     ()=>console.log('bill updated')
  //   );
  // }
  
  updateBillById(){
    if(this.bills.id) this.BillsService.updateBillById(this.bills.id,this.bills)
  }

}
