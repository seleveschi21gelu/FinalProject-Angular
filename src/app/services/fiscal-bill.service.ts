import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}
@Injectable({
  providedIn: 'root'
})


export class FiscalBillService {

  constructor(private http:HttpClient) { }

  getFiscalBills(){
    return this.http.get('/server/fiscalBill');
  }

  getFiscalBill(id:number){
    return this.http.get('/server/fiscalBill/'+id);
  }
  addFiscalBill(bills: any){
    //let body = JSON.stringify(bills);
    return this.http.post('/server/fiscalBill',bills, httpOptions);
  }

  deleteFiscalBillById(id:number){
    return this.http.delete('/server/fiscalBill/' + id);

  }
  updateFiscalBillById(id:number,bills:any){
    return this.http.put('/server/fiscalBill/'+id,bills).subscribe();
  }
}


