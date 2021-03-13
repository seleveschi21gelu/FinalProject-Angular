import { FiscalBillService } from './../../services/fiscal-bill.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiscal-bill-view',
  templateUrl: './fiscal-bill-view.component.html',
  styleUrls: ['./fiscal-bill-view.component.scss']
})
export class FiscalBillViewComponent implements OnInit {
 public fiscalBill:any;

  constructor(private fiscalBillService:FiscalBillService) { }

  ngOnInit(): void {
    this.getFiscalBills();
  }

  getFiscalBills(){
    this.fiscalBillService.getFiscalBills().subscribe(
      data =>{this.fiscalBill=data},
      err=>console.error(err),
      ()=>console.log('fiscal bill registered')
    );
  }

  deleteFiscalBillById(id:number){
    this.fiscalBillService.deleteFiscalBillById(id).
    subscribe(
      (data) =>{
        console.log(data);
        this.ngOnInit();
      })
   
  }
  updateFiscalBillById(id:number,fiscalBill:any){
    this.fiscalBillService.updateFiscalBillById(id,fiscalBill);
  
  }

}
