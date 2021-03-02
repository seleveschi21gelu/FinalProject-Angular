import { BillsService } from './../../services/bills.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
public bills: any;
  constructor(private BillsService:BillsService) { }

  ngOnInit(): void {
    this.getBills();
  }

  getBills(){
    this.BillsService.getBills().subscribe(
      data =>{this.bills=data},
      err=>console.error(err),
      ()=>console.log('bills loaded')
    );
  }
  

}
