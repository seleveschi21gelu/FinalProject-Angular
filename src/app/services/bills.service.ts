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

  // readonly root ='http://localhost:8080';

  constructor(private http:HttpClient) {}

    getBills(){
      return this.http.get('/server/bills');
    }

    getBill(id:number){
      return this.http.get('/server/bills/'+id);
    }
    addBill(bills: any){
      //let body = JSON.stringify(bills);
      return this.http.post('/server/bills',bills, httpOptions);
    }

    deleteBillById(id:number){
      return this.http.delete('/server/bills/' + id);

    }
    updateBillById(id:number,bills:any){
      return this.http.put('/server/bills/'+id,bills).subscribe();
    }
}
