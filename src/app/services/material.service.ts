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
 return this.http.get('http://localhost:8080/material')

  }

  getMaterialById(id: number){
    return this.http.get('http://localhost:8080/material/'+id);
  }
  addMaterial(material: any){
  
   return this.http.post('http://localhost:8080/material',material, httpOptions)
   
 }

 deleteMaterialById(id:number){
   return this.http.delete('http://localhost:8080/material/'+id);
 }

 updateMaterialById(id:number,material:any){
  return this.http.put('http://localhost:8080/material/'+id,material).subscribe();
}


}
