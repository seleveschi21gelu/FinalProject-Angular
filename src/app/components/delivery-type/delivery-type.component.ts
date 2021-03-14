import { ActivatedRoute } from '@angular/router';
import { DeliveryTypeService } from '../../services/delivery-type.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { DeliveryType } from '../models/DeliveryType';

@Component({
  selector: 'app-delivery-type',
  templateUrl: './delivery-type.component.html',
  styleUrls: ['./delivery-type.component.scss']
})
export class DeliveryTypeComponent implements OnInit {
  deliveryTypeList: any;
  deliveryType: DeliveryType = new DeliveryType();
  deliveryTypeForm:any;
  validMessage: string = "";

  constructor(private deliveryTypeService:DeliveryTypeService, private route:ActivatedRoute) {
    let id = this.route.snapshot.params.id;

    if (id !== undefined) {
      this.deliveryTypeService.getDeliveryTypeById(id).subscribe(data=>this.deliveryType = data)
    } else {
      this.deliveryType = new DeliveryType();
    }

    this.deliveryTypeService.getDeliverysType().subscribe(delivery=>this.deliveryTypeList=delivery);


  }

  ngOnInit(): void {
    // this.deliveryTypeForm=new FormGroup({
    //   name:new FormControl('',Validators.required)
    // });

  }

  submitRegistration(registration: any){
      this.validMessage = "Your Delivery Type registration has been submitted. Thank you!";
      this.deliveryTypeService.addDeliveryType(registration.value).subscribe(
        data => {
          registration.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      )
  }

  getDeliveryTypeById(id:number){
    this.deliveryTypeService.getDeliveryTypeById(id).subscribe(
      data=>{this.deliveryType = data;
      },
      err=>console.error(err),
      ()=>console.log('bills loaded')
    );
  }

}
