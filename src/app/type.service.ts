import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  readonly root='http://localhost:8080'
  constructor(private http:HttpClient) { }

  getTypes(){
    return this.http.get(this.root+'/type')
  }
}
