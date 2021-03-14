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
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  register(){
    console.log("register login");
     this.authService.register(this.username,this.password);
   }
 

}
