import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from './../../services/provider.service';
import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
  providerList: any;
  providerForm:any;
  validMessage: string = "";


  constructor(private providerService:ProviderService) {
    this.providerService.getProviders().subscribe(provider=>this.providerList=provider);
  }

  ngOnInit(): void {
    this.providerForm=new FormGroup({
      name:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      cif: new FormControl('',Validators.required),
      country : new FormControl('',Validators.required),
      bank : new FormControl('',Validators.required),
      iban : new FormControl('',Validators.required),
      telephone:  new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required)
    });

    
  }
  submitRegistration(){
    if(this.providerForm?.valid){
      this.validMessage = "Your provider registration has been submitted. Thank you!";
      this.providerService.addProvider(this.providerForm.value).subscribe(
        data => {
          this.providerForm?.reset();
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
