import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions ={
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  // readonly root='http://localhost:8080' 
  constructor(private http:HttpClient) {
  }

  getProviders(){
    return this.http.get('http://localhost:8080/provider')
  }
  getProvidersById(id:number){
    return this.http.get('http://localhost:8080/provider/'+id)
  }
  addProvider(provider: any){
  //  let body = JSON.stringify(deliveryType);
   return this.http.post('http://localhost:8080/provider',provider, httpOptions)
 }

 deleteProviderById(id:number){
   return this.http.delete('http://localhost:8080/provider/'+id)

 }
 updateProviderById(id:number,client:any){
  return this.http.put('http://localhost:8080/provider/'+id, client).subscribe();
}
}
