import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-entry',
  templateUrl: './page-entry.component.html',
  styleUrls: ['./page-entry.component.scss']
})
export class PageEntryComponent implements OnInit {

    isLoggedIn :any;

  constructor(private authService:AuthService){
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

}
