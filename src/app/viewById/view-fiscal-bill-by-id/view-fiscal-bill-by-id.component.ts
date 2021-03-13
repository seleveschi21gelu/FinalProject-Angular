import { FiscalBillService } from './../../services/fiscal-bill.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-fiscal-bill-by-id',
  templateUrl: './view-fiscal-bill-by-id.component.html',
  styleUrls: ['./view-fiscal-bill-by-id.component.scss']
})
export class ViewFiscalBillByIdComponent implements OnInit {

  public fiscalBillRegistration:any;
  constructor(private billsService:FiscalBillService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFiscalBillRegistration(this.route.snapshot.params.id);
  }

getFiscalBillRegistration(id:number){
  this.billsService.getFiscalBill(id).subscribe(
    data=>{this.fiscalBillRegistration = data;
    },
    err=>console.error(err),
    ()=>console.log('fiscal bill loaded')
  );
}

}
