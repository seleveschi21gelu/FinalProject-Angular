import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  // readonly root='http://localhost:8080'
  constructor(private http:HttpClient) { }


  getStatusList(){
    return this.http.get('server/paidStatus');
  }
  addStatus(status: any){
    let body = JSON.stringify(status);
    return this.http.post('server/bills',body, httpOptions)
  }

}
