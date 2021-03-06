import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  // readonly root='http://localhost:8080' 
  constructor(private http:HttpClient) {
  }

  getProviders(){
    return this.http.get('server/provider')
  }
  addProvider(deliveryType: any){
   let body = JSON.stringify(deliveryType);
   return this.http.post('server/provider',body, httpOptions)
 }
}
