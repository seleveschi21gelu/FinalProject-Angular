import { TypeService } from './../../type.service';
import { DeliveryTypeService } from './../../delivery-type.service';
import { StatusService } from './../../status.service';
import { Observable, throwError } from 'rxjs';
import { BillsService } from './../../services/bills.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  statusList:any;
  deliveryTypeList:any;
  typeList:any;

  models: string[]= [
    'PAID',
    'UNPAID',
    "ADVANCE"
  ];
  billsform!: FormGroup;
  validMessage: string= "";

  constructor(private billsService:BillsService, private statusService:StatusService,private deliveryTypeService:DeliveryTypeService,private typeService:TypeService) {
    this.statusService.getStatusList().subscribe(statuses => this.statusList =statuses);
    this.deliveryTypeService.getDeliveryTypeList().subscribe(deliveryTypes=>this.deliveryTypeList =deliveryTypes)
  this.typeService.getTypes().subscribe(types =>this.typeList=types)
   }

  ngOnInit(): void  {
    this.billsform = new FormGroup({
      invoiceNumber: new FormControl('',Validators.required),
      unitPrice: new FormControl('',Validators.required),
      status: new FormControl('',Validators.required),
      invoiceDate: new FormControl('',Validators.required),
      providers: new FormControl('',Validators.required),
      name:new FormControl ('',Validators.required),
      flatBlock:new FormControl('',Validators.required),
      material:new FormControl('',Validators.required),
      deliveryTypes:new FormControl('',Validators.required),
      type:new FormControl('',Validators.required)
    });

  }
  submitRegistration(){
if(this.billsform.valid){
  this.validMessage = "Your bills registration has been submitted. Thank you!";
  this.billsService.addBill(this.billsform.value).subscribe(
    data=>{this.billsform.reset();
    return true;
   },error =>{return throwError(error); 
  }
  )
}else {
  this.validMessage ="Please fill out the form before submitting"
}
  }

}
