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
  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {


  }
  login(){
    console.log("login" + this.username+':'+this.password);
    this.authService.login(this.username,this.password).subscribe(
      data => {
  console.log(data);
  this.authService.saveAuthInLocalStorage();
  this.router.navigate(['home']);
},
error =>{
  console.log('error');
}

    );
  }
  register(user:any){
    console.log("register" + this.username + this.password);
    this.authService.register(user);
  }


}
