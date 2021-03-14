import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeliveryType } from '../components/models/DeliveryType';

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryTypeService {

  constructor(private http:HttpClient) {
  }

   getDeliverysType(){
    return this.http.get<DeliveryType[]>('/server/deliveryType')

   }

   addDeliveryType(deliveryType: any){
    // let body = JSON.stringify(deliveryType);
    return this.http.post('/server/deliveryType',deliveryType, httpOptions)
   }

   deleteDeliveryType(id:number){
    return this.http.delete('/server/deliveryType/'+id)
   }

   updateDeliveryType(id:number, deliveryType: DeliveryType){
    return this.http.put('/server/bills/'+id,deliveryType).subscribe();
   }

   getDeliveryTypeById(id:number){
     return this.http.get<DeliveryType>('server/deliveryType/' + id);
  }
}
