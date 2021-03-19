import { DeliveryType } from './../models/DeliveryType';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeliveryTypeService } from 'src/app/services/delivery-type.service';

@Component({
  selector: 'app-delivery-type-view',
  templateUrl: './delivery-type-view.component.html',
  styleUrls: ['./delivery-type-view.component.scss']
})
export class DeliveryTypeViewComponent implements OnInit {
  // public deliveryTypes: DeliveryType[] = [];
  public deliveryType: any;

  constructor(private deliveryTypeService:DeliveryTypeService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getDeliveryTypes();
  }

  getDeliveryTypes(){
    this.deliveryTypeService.getDeliverysType().subscribe(
      data =>{
        console.log("This is the data: " + data)
        this.deliveryType=data
      },
      err=>console.error(err),
      ()=>console.log('delivery types loaded')
    );
  }

  deleteDeliveryTypeById(id:number) {
    this.deliveryTypeService.deleteDeliveryTypeById(id).
    subscribe(
      (data) =>{
        console.log(data);
        this.ngOnInit();
      })

  }
  updateDeliveryTypeById(id:number,deliveryType:DeliveryType){
    this.deliveryTypeService.updateDeliveryTypeById(id,deliveryType);
  }

}
