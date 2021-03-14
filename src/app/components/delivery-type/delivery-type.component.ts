import { DeliveryTypeService } from '../../services/delivery-type.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-delivery-type',
  templateUrl: './delivery-type.component.html',
  styleUrls: ['./delivery-type.component.scss']
})
export class DeliveryTypeComponent implements OnInit {
  deliveryTypeList: any;
  deliveryTypeForm:any;
  validMessage: string = "";

  constructor(private deliveryTypeService:DeliveryTypeService) {
    this.deliveryTypeService.getDeliverysType().subscribe(delivery=>this.deliveryTypeList=delivery);
  }

  ngOnInit(): void {
    this.deliveryTypeForm=new FormGroup({
      name:new FormControl('',Validators.required)
    });
  }

  submitRegistration(){
    if(this.deliveryTypeForm?.valid){
      this.validMessage = "Your Delivery Type registration has been submitted. Thank you!";
      this.deliveryTypeService.addDeliveryType(this.deliveryTypeForm.value).subscribe(
        data => {
          this.deliveryTypeForm?.reset();
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
