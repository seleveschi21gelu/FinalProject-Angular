import { BasicAuthResponseModel } from './../models/BasicAuthResponseModel';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  _authString :string ='';

  constructor(private http:HttpClient) {
    this._authString =this.authFromLocalStorage;

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(state.url);
    return true;
  }

  login(username:string ,password: string) : Observable<BasicAuthResponseModel>{
    console.log("AuthServiceLogin " + username +" "+ password)
    this._authString = 'Basic ' + window.btoa(username + ':' + password);

return this.http.get<BasicAuthResponseModel>('http://localhost:8080/api/login').pipe(
  map(response =>response)
);

  }

  get authString(){
    return this._authString;
  }
  saveAuthInLocalStorage(){
    console.log("Saved:" + this._authString)
    localStorage.setItem('auth',this.authString);
  }
  get authFromLocalStorage(){
    let auth =localStorage.getItem('auth')|| '';
    console.log('get auth: ' +auth);
    return auth;
  }
   httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  }

  register(user: any) : Observable<BasicAuthResponseModel> {
    // console.log("AuthServiceRegister " + username +" "+ password)
     let body = JSON.stringify(user)
    return this.http.post<any>('/server/api/register', 
   body,this.httpOptions);

  }
}
