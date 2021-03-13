import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  // readonly root='http://localhost:8080'
  constructor(private http:HttpClient) {
  }

  getMaterials(){
 return this.http.get('/server/material')

  }

  getMaterialById(id: number){
    return this.http.get('/server/material/'+id);
  }
  addMaterial(material: any){
  
   return this.http.post('/server/material',material, httpOptions)
   
 }

 deleteMaterialById(id:number){
   return this.http.delete('/server/material/'+id);
 }

}
