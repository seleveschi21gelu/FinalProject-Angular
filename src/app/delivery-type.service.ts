import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryTypeService {

  // readonly root='http://localhost:8080'
  constructor(private http:HttpClient) {
   }
    
   getDeliverysType(){
  return this.http.get('server/deliveryType')

   }
   addDeliveryType(deliveryType: any){
    // let body = JSON.stringify(deliveryType);
    return this.http.post('server/deliveryType',deliveryType, httpOptions)
  }
}
