import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  router: any;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    this.authService.isLoggedIn = false;
    this.router.navigate(['/']);
    console.log(this.authService.isLoggedIn)
  }

}
