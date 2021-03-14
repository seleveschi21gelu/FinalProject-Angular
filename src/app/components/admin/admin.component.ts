import { BillsService } from './../../services/bills.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
public bills: any;
  constructor(private BillsService:BillsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getBills();
    //this.deleteBillById(this.route.snapshot.params.id);
    // this.updateBillById(this.route.snapshot.params.id,this.bills);
  }

  getBills(){
    this.BillsService.getBills().subscribe(
      data =>{this.bills=data},
      err=>console.error(err),
      ()=>console.log('bills loaded')
    );
  }

  deleteBillById(id:number){
    this.BillsService.deleteBillById(id).
    subscribe(
      (data) =>{
        console.log(data);
        this.ngOnInit();
      })

  }
  updateBillById(id:number,bills:any){
    this.BillsService.updateBillById(id,bills);
  }

}
