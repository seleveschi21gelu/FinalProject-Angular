import { ActivatedRoute, Router } from '@angular/router';
import { BillsService } from './../../services/bills.service';
import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/status.service';
import { ProviderService } from 'src/app/services/provider.service';
import { MaterialService } from 'src/app/services/material.service';
import { FlatblockService } from 'src/app/services/flatblock.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  bill:any;
  statusList:any;
  deliveryTypeList:any;
  providerList:any;
  materialList:any;
  flatBlockList:any;

  billForm!:FormGroup;

  constructor(private billsService:BillsService,private route:ActivatedRoute,private router:Router,
    private statusService:StatusService,
    private providerService:ProviderService,
    private materialService:MaterialService,
    private flatBlockService:FlatblockService) { 
    
    this.statusService.getStatusList().subscribe(statuses => this.statusList =statuses);
    this.providerService.getProviders().subscribe(providers => this.providerList =providers);
    this.materialService.getMaterials().subscribe(materials => this.materialList =materials);
    this.flatBlockService.getFlatBlocks().subscribe(flatBlocks => this.flatBlockList =flatBlocks);
  }

  ngOnInit(): void {
    // this.billForm = new FormGroup({
    //   //  name:new FormControl ('',Validators.required),
    //    invoiceNumber: new FormControl('',Validators.required),
    //    materialAndExecution:new FormControl('',Validators.required),
    //    provider: new FormControl('',Validators.required),
    //    invoiceDate: new FormControl('',Validators.required),
    //    unitPrice: new FormControl('',Validators.required),
    //    quantity:new FormControl('',Validators.required),
    //    tva:new FormControl('',Validators.required),
    //    paidStatus: new FormControl('',Validators.required),
    //    flatBlock:new FormControl('',Validators.required),
    // });


    this.billsService.getBill(this.route.snapshot.params.id).subscribe(bills=>this.bill = bills);


  }
  update(id:any){
    console.log(id);
  }

 



}
