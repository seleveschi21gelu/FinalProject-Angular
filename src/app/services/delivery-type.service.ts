import { DeliveryType } from './../components/models/DeliveryType';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.get<DeliveryType[]>('http://localhost:8080/deliveryType')

   }

   addDeliveryType(deliveryType: any){
    // let body = JSON.stringify(deliveryType);
    return this.http.post('http://localhost:8080/deliveryType',deliveryType, httpOptions)
   }

   deleteDeliveryType(id:number){
    return this.http.delete('http://localhost:8080/deliveryType/'+id)
   }

   updateDeliveryTypeById(id:number,deliveryType:any){
    return this.http.put('http://localhost:8080/deliveryType/'+id,deliveryType).subscribe();
  }

  deleteDeliveryTypeById(id:number){
    return this.http.delete('http://localhost:8080/deliveryType/'+id);
  }
  

   getDeliveryTypeById(id:number){
     return this.http.get<DeliveryType>('http://localhost:8080/deliveryType/' + id);
  }
}
