import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  constructor(private http:HttpClient) {}

    getBills(){
      return this.http.get('http://localhost:8080/bills')

  }

  getBill(id:number){
    return this.http.get('http://localhost:8080/bills'+id)

  }
  addBill(bills: any){
    
    return this.http.post('http://localhost:8080/bills',bills, httpOptions)
  }

  



  }
