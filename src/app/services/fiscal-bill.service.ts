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
    return this.http.get('http://localhost:8080/fiscalBill');
  }

  getFiscalBill(id:number){
    return this.http.get('http://localhost:8080/fiscalBill/'+id);
  }
  addFiscalBill(bills: any){
    //let body = JSON.stringify(bills);
    return this.http.post('http://localhost:8080/fiscalBill',bills, httpOptions);
  }

  deleteFiscalBillById(id:number){
    return this.http.delete('http://localhost:8080/fiscalBill/' + id);

  }
  updateFiscalBillById(id:number,bills:any){
    return this.http.put('http://localhost:8080/fiscalBill/'+id,bills).subscribe();
  }
}


