import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  // readonly root='http://localhost:8080'
  constructor(private http:HttpClient) { }

  getTypes(){
    return this.http.get('server/type')
  }

  addDeliveryType(type: any){
    let body = JSON.stringify(type);
    return this.http.post('server/type',body, httpOptions)
  }
}
