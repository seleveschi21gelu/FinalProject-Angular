import { Edit } from '../models/edit';
import { FlatblockService } from '../../services/flatblock.service';
import { MaterialService } from '../../services/material.service';
import { ProviderService } from '../../services/provider.service';
import { DeliveryTypeService } from '../../services/delivery-type.service';
import { Observable, throwError } from 'rxjs';
import { BillsService } from '../../services/bills.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';
import { StatusService } from 'src/app/services/status.service';



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
  clientList:any;
  public billsRegistration:any;
  billsform!: FormGroup;
  validMessage: string= "";
  readonly:boolean =false;

  constructor(private billsService:BillsService,
              private statusService:StatusService,
              private providerService:ProviderService,
              private materialService:MaterialService,
              private flatBlockService:FlatblockService,
              private clientService:ClientService,
              private route: ActivatedRoute) {

    this.statusService.getStatusList().subscribe(statuses => this.statusList =statuses);
    this.providerService.getProviders().subscribe(providers => this.providerList =providers);
    this.materialService.getMaterials().subscribe(materials => this.materialList =materials);
    this.flatBlockService.getFlatBlocks().subscribe(flatBlocks => this.flatBlockList =flatBlocks);
    this.clientService.getClients().subscribe(client => this.clientList =client);


   }

  ngOnInit(): void  {
    this.billsform = new FormGroup({
      //  name:new FormControl ('',Validators.required),
       invoiceNumber: new FormControl('',Validators.required),
       materialAndExecution:new FormControl('',Validators.required),
       provider: new FormControl('',Validators.required),
       invoiceDate: new FormControl('',Validators.required),
       unitPrice: new FormControl('',Validators.required),
       quantity:new FormControl('',Validators.required),
       tva:new FormControl('',Validators.required),
       paidStatus: new FormControl('',Validators.required),
       flatBlock:new FormControl('',Validators.required),
       client: new FormControl('',Validators.required)
    });

    if(this.route.snapshot.queryParams['id']){
      this.getBillsRegistration(this.route.snapshot.params.id);
    } else {
      this.billsRegistration = new Edit();
    }

  }
  submitRegistration(){
    if(this.billsform?.valid){
      this.validMessage = "Your invoice registration has been submitted. Thank you!";
      this.billsService.addBill(this.billsform.value).subscribe(
        _data => {
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

  getBillsRegistration(id:number){
    this.billsService.getBill(id).subscribe(
      data=>{this.billsRegistration = data;
      },
      err=>console.error(err),
      ()=>console.log('bills loaded')
    );
  }
}
