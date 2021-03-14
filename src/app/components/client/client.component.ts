import { ClientService } from './../../services/client.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
clientList:any;

clientForm !: FormGroup;
validMessage : string ="";

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
this.clientForm = new FormGroup({
  name :new FormControl('',Validators.required),
  county:new FormControl('',Validators.required),
  cif:new FormControl('',Validators.required),
  telephone:new FormControl('',Validators.required),
  address:new FormControl('',Validators.required),
  email:new FormControl('',Validators.required),

});

  }

  submitRegistration(){
    if(this.clientForm?.valid){
      this.validMessage = "Your client registration has been submitted. Thank you!";
      this.clientService.addClient(this.clientForm.value).subscribe(
        _data => {
          this.clientForm?.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      )
    } else{
      this.validMessage = "Please fill out the form before submitting";
    }
  }

}
