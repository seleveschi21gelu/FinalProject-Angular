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
import { first } from 'rxjs/operators';



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
  clientList:any;
  billsRegistration:any;
  billsform!: FormGroup;
 


  validMessage: string= "";
  readonly:boolean =false;
  isAddMode: any;

  constructor(private billsService:BillsService,
              private statusService:StatusService,
              private providerService:ProviderService,
              private materialService:MaterialService,
              private clientService:ClientService,
              private route: ActivatedRoute) {

    this.statusService.getStatusList().subscribe(statuses => this.statusList =statuses);
    this.providerService.getProviders().subscribe(providers => this.providerList =providers);
    this.materialService.getMaterials().subscribe(materials => this.materialList =materials);
    this.clientService.getClients().subscribe(client => this.clientList =client);
   }

  ngOnInit(): void  {

    let id = this.route.snapshot.params.id;         
    this.isAddMode = !id;

     
 this.billsform=new FormGroup({
     invoiceNumber: new FormControl('',Validators.required),
     materialAndExecution:new FormControl('',Validators.required),
     provider: new FormControl('',Validators.required),
     invoiceDate: new FormControl('',Validators.required),
     unitPrice: new FormControl('',Validators.required),
     quantity:new FormControl('',Validators.required),
     tva:new FormControl('',Validators.required),
     paidStatus: new FormControl('',Validators.required),
     client: new FormControl('',Validators.required)
  });

    if(!this.isAddMode) {
      this.billsService.getBill(id)
        .pipe(first())
        .subscribe(x => this.billsform.patchValue(x))
    }

  }
  submitRegistration(){
      let id = this.route.snapshot.params.id;
      
      if(id) {
        this.billsService.updateBillById(id, this.billsform.value);
        this.validMessage = "Your invoice registration has been updated. Thank you!";
      
      }
      else{
         this.billsService.addBill(this.billsform.value).subscribe();
         this.validMessage = "Your invoice registration has been registrated. Thank you!";
      
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
  get invoiceNumber() {
    return this.billsform.get('invoiceNumber');
  }

  get client() {
    return this.billsform.get('client');
  }

  get provider(){
    return this.billsform.get('provider');
  }

  get materialAndExecution(){
    return this.billsform.get('materialAndExecution');
  }

  get unitPrice(){
    return this.billsform.get('unitPrice');
  }
  get tva(){
    return this.billsform.get('tva');
  }
  get paidStatus(){
    return this.billsform.get('paidStatus');
  }
  get invoiceDate(){
    return this.billsform.get('invoiceDate')
  }
  
  get quantity(){
    return this.billsform.get('quantity');
  }

  get totalWithoutTVA(){
    return this.billsform.get('totalWithoutTVA')
  }
  
  get totalWithTVA(){
    return this.billsform.get('totalWithTVA')
  }

}


