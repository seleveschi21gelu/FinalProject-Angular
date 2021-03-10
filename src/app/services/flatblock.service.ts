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
    return this.http.get('/server/flatBlock')

  }
  getFlatblockById(id : number){
    return this.http.get('/server/flatBlock/'+id)

  }
  addFlatBlock(deliveryType: any){
   
   return this.http.post('/server/flatBlock',deliveryType, httpOptions)
 }

 deleteFlatBlock(id:number){
   return this.http.delete('/server/flatBlock/'+id)
 }
}
