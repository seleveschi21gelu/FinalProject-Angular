import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliveryTypeService {

  readonly root='http://localhost:8080'
  constructor(private http:HttpClient) {
   }
    
   getDeliveryTypeList(){
  return this.http.get(this.root+'/deliveryType')

   }
}
