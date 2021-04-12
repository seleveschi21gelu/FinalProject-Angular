import { ActivatedRoute } from '@angular/router';
import { DeliveryTypeService } from '../../services/delivery-type.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-delivery-type',
  templateUrl: './delivery-type.component.html',
  styleUrls: ['./delivery-type.component.scss']
})
export class DeliveryTypeComponent implements OnInit {
  
  deliveryTypeForm = new FormGroup({
    name:new FormControl('',Validators.required)
  });
  
  deliveryTypeList: any;
 
 
  validMessage: string = "";
  isAddMode:any;
  public deliveryTypeRegistration:any;



  constructor(private deliveryTypeService:DeliveryTypeService, private route:ActivatedRoute) {
    // let id = this.route.snapshot.params.id;

    // if (id !== undefined) {
    //   this.deliveryTypeService.getDeliveryTypeById(id).subscribe(data=>this.deliveryType = data)
    // } else {
    //   this.deliveryType = new DeliveryType();
    // }

    // this.deliveryTypeService.getDeliverysType().subscribe(delivery=>this.deliveryTypeList=delivery);


  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;         
    this.isAddMode = !id;
    // this.deliveryTypeForm=new FormGroup({
    //   name:new FormControl('',Validators.required)
    // });

    
    if(!this.isAddMode) {
      this.deliveryTypeService.getDeliveryTypeById(id)
      .pipe(first())
      .subscribe(x => this.deliveryTypeForm.patchValue(x))

  }
}

  submitRegistration(){
    let id = this.route.snapshot.params.id;
    if(id) {this.deliveryTypeService.updateDeliveryTypeById(id, this.deliveryTypeForm.value);
        this.validMessage = "Delivery type updated!"
    } 
     else{ this.deliveryTypeService.addDeliveryType(this.deliveryTypeForm.value).subscribe();
        this.validMessage = "Delivery type registrated!"
    }
}

  getDeliveryTypeRegistration(id:number){
    this.deliveryTypeService.getDeliveryTypeById(id).subscribe(
      data=>{this.deliveryTypeRegistration = data;
      },
      err=>console.error(err),
      ()=>console.log('delivery type loaded')
    );
  }

  updateMaterialById(id:number,material:any){
    this.deliveryTypeService.updateDeliveryTypeById(id,material);
  }

  get name(){
    return this.deliveryTypeForm.get('name')
  }

}
