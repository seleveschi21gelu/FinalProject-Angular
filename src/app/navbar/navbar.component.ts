import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: any;
  router: any;

  constructor(private authService:AuthService) {
    let auth = this.authService.authFromLocalStorage;
    if(auth!== ''){
      this.isLoggedIn=true;
    }else {
      this.isLoggedIn=false;
    }

    this.authService.isLoggedIn().subscribe(value =>
        this.isLoggedIn = value
      )
   }

  ngOnInit(): void {


  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    console.log(this.authService.isLoggedIn)
  }

}
