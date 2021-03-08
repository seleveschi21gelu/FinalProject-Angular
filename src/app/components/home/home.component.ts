import { FlatblockService } from './../../services/flatblock.service';
import { MaterialService } from './../../services/material.service';
import { ProviderService } from './../../services/provider.service';
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
  providerList:any;
  materialList:any;
  flatBlockList:any;

  billsform!: FormGroup;
  validMessage: string= "";

  constructor(private billsService:BillsService,
              private statusService:StatusService,
              private deliveryTypeService:DeliveryTypeService,
              private providerService:ProviderService,
              private materialService:MaterialService,
              private flatBlockService:FlatblockService) {

    this.statusService.getStatusList().subscribe(statuses => this.statusList =statuses);
    this.providerService.getProviders().subscribe(providers => this.providerList =providers);
    this.materialService.getMaterials().subscribe(materials => this.materialList =materials);
    this.flatBlockService.getFlatBlocks().subscribe(flatBlocks => this.flatBlockList =flatBlocks);
    // this.deliveryTypeService.getDeliverysType().subscribe(deliveryTypes=>this.deliveryTypeList = deliveryTypes);

   }

  ngOnInit(): void  {
    this.billsform = new FormGroup({
       name:new FormControl ('',Validators.required),
       invoiceNumber: new FormControl('',Validators.required),
       unitPrice: new FormControl('',Validators.required),
       paidStatus: new FormControl('',Validators.required),
       invoiceDate: new FormControl('',Validators.required),
       provider: new FormControl('',Validators.required),
       flatBlock:new FormControl('',Validators.required),
       materialAndExecution:new FormControl('',Validators.required)
    });

  }
  submitRegistration(){
    if(this.billsform?.valid){
      this.validMessage = "Your invoice registration has been submitted. Thank you!";
      this.billsService.addBill(this.billsform.value).subscribe(
        data => {
          this.billsform?.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      )
    } else{
      this.validMessage = "Please fill out the form before submitting";
    }
  }

}
