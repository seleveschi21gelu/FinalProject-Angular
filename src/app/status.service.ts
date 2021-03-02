import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  readonly root='http://localhost:8080'
  constructor(private http:HttpClient) { }


  getStatusList(){
    return this.http.get(this.root + '/status');
  }
}
