import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string ='';
  password: string ='';
  invalidUsernameOrPasswordError = ''; 
  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {


  }
  login(){
    console.log("login" + this.username+':'+this.password);
    this.authService.login(this.username,this.password).subscribe(
      data => {
          console.log(data);
          this.authService.subject.next(true);
          this.authService.saveAuthInLocalStorage();
          this.router.navigate([<string>localStorage.getItem('returnUrl')]);
        },
      error =>{
        if(error.status === 401) this.invalidUsernameOrPasswordError = "Invalid username or password."
      }

      );
  }



}
