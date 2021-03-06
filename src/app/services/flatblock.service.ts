import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class FlatblockService {

  // readonly root='http://localhost:8080'
  constructor(private http:HttpClient) {
  }

  getFlatBlocks(){
    return this.http.get('server/flatBlock')

  }
  addFlatBlock(deliveryType: any){
   let body = JSON.stringify(deliveryType);
   return this.http.post('server/flatBlock',body, httpOptions)
 }
}
