import { BillsService } from './../../services/bills.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute}from '@angular/router'


@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.scss']
})
export class ViewRegistrationComponent implements OnInit {

  public billsRegistration:any;
  constructor(private billsService:BillsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBillsRegistration(this.route.snapshot.params.id);
  }

getBillsRegistration(id:number){
  this.billsRegistration.getBill(id).subscribe(
    (    data: any)=>{this.billsRegistration = data;
    },
    (    err: any)=>console.error(err),
    ()=>console.log('bills loaded')
  );
}

}
