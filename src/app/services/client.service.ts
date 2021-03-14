import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions ={
  headers: new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) {}

  getClients(){
    return this.http.get('/server/client');
  }

  getClient(id:number){
    return this.http.get('/server/client/'+id);
  }
  addClient(client: any){
    //let body = JSON.stringify(bills);
    return this.http.post('/server/client',client, httpOptions);
  }

  deleteClientById(id:number){
    return this.http.delete('/server/client/' + id);

  }
  updateClientById(id:number,client:any){
    return this.http.put('/server/client/'+id,client).subscribe();
  }

}
