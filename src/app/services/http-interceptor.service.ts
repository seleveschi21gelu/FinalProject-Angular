
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private auth:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   console.log('Interceptor called: '+ this.auth.authString);
   if(this.auth.authString !== undefined){
    req= req.clone({
      setHeaders:{ Authorization: this.auth.authString}});
   }
      
      return next.handle(req);
    }

  }

