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
  authService: any;
  router: any;
  isLoggedIn: boolean = false;

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

  register(username: string,password:string)   {
    console.log("register auth");
     this.http.post<any>('http://localhost:8080/api/register', {"username" : username, "password" : password}).subscribe(
       data=>{console.log(data);
      }
     );
  
  }
  logout() {
    this._authString = '';
    localStorage.removeItem('auth');
  }

  
}
