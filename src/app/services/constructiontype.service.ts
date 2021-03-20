import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstructiontypeService {

  constructor(private http:HttpClient) { }

  getConstructioType(){
    return this.http.get('http://localhost:8080/constructiontype')
  }

}
