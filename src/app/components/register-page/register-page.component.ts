import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  username: string="";
  password: string="";
  user= {username:"", password:""}
  validMessage: string ="";
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  isSelected:boolean=false;
  show(){
this.isSelected=true;
  }

  register(){
    console.log("register login");
    console.log("username", this.username)
     this.authService.register(this.user).subscribe(result=>{
    
      })
     
   }

   
 

}
