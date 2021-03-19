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
    return this.http.get('http://localhost:8080/flatBlock')

  }
  getFlatblockById(id : number){
    return this.http.get('http://localhost:8080/flatBlock/'+id)

  }
  addFlatBlock(deliveryType: any){

   return this.http.post('http://localhost:8080/flatBlock',deliveryType, httpOptions)
  }

  deleteFlatBlock(id:number){
   return this.http.delete('http://localhost:8080/flatBlock/'+id)
  }
}
