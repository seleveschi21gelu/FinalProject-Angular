import { FormControl, Validators } from '@angular/forms';
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
    this.providerForm=new FormControl({
      name:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required)

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
